// Error handling and display
function showImportStatus(imported, failed, failedCookies = []) {
  const errorDisplay = document.getElementById('errorDisplay');
  const errorList = document.getElementById('errorList');
  
  if (failed > 0) {
    errorDisplay.style.display = 'block';
    let errorHtml = `
      <p>Import completed with some issues:</p>
      <p>✅ ${imported} cookies imported successfully</p>
      <p>⚠️ ${failed} cookies could not be imported</p>
    `;

    if (failedCookies.length > 0) {
      errorHtml += `<p class="note">Failed cookies:</p>
      <ul class="failed-list">
        ${failedCookies.map(c => `<li>${c.name}: ${c.reason}</li>`).join('')}
      </ul>`;
    }

    errorHtml += `<p class="note">Note: Some cookies may fail due to browser security restrictions</p>`;
    
    errorList.innerHTML = errorHtml;
  } else {
    errorDisplay.style.display = 'none';
  }
}

// Update cookie import function to use status display
const originalImportCookies = window.cookieUtils.importCookies;
window.cookieUtils.importCookies = async function(data, tab) {
  const result = await originalImportCookies(data, tab);
  showImportStatus(result.imported, result.failed, result.failedCookies);
  return result;
}; 