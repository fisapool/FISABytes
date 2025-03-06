// Cookie handling utilities
const cookieUtils = {
  async exportCookies(tab) {
    const cookies = await chrome.cookies.getAll({ url: tab.url });
    return {
      url: tab.url,
      cookies: cookies
    };
  },

  async importCookies(data, tab) {
    let imported = 0;
    let failed = 0;

    // Handle both wrapped and unwrapped cookie formats
    const cookies = Array.isArray(data) ? data : 
                   (data.cookies ? data.cookies : [data]);

    for (const cookie of cookies) {
      try {
        // Skip if missing required fields
        if (!cookie.name || !cookie.domain) {
          console.warn('Skipping invalid cookie:', cookie);
          failed++;
          continue;
        }

        const cookieToSet = { ...cookie };
        // Remove properties that can't be set
        delete cookieToSet.hostOnly;
        delete cookieToSet.session;
        delete cookieToSet.storeId;

        // Ensure path exists
        if (!cookieToSet.path) {
          cookieToSet.path = '/';
        }

        // Convert expirationDate from number to Date if needed
        if (typeof cookieToSet.expirationDate === 'number') {
          const expiryDate = new Date(cookieToSet.expirationDate * 1000);
          if (expiryDate > new Date()) {
            cookieToSet.expirationDate = Math.floor(cookieToSet.expirationDate);
          } else {
            delete cookieToSet.expirationDate;
          }
        }

        await chrome.cookies.set({
          url: tab.url,
          ...cookieToSet
        });
        console.log('Successfully imported cookie:', cookieToSet.name);
        imported++;
      } catch (error) {
        console.error('Failed to set cookie:', error);
        failed++;
      }
    }

    return { imported, failed };
  }
};

window.cookieUtils = cookieUtils; 