# FISABytes - Cookie Manager

A lightweight Chrome extension for basic cookie management. FISABytes provides a simple way to export and import browser cookies, making it useful for developers, testers, and users who need to share account access without sharing passwords.

![FISABytes Logo](src/img/logo-128.png)

## Features

- 🔄 Basic cookie export/import functionality
- 🎨 Clean, minimalist interface
- 🏃‍♂️ Fast and lightweight
- 🔒 Local operation (no external servers)
- 💰 Free to use

## Installation

### Manual Installation (Developer Mode)
1. Download this repository as ZIP
2. Extract the ZIP file
3. Open Chrome and go to `chrome://extensions/`
4. Enable "Developer mode" in the top right
5. Click "Load unpacked"
6. Select the `src` folder from the extracted directory

### Chrome Web Store
*Coming soon*

## Usage

1. Click the FISABytes icon in your browser toolbar
2. Choose to export cookies from the current site
3. Share the exported cookie file with your colleague
4. They import the cookies using FISABytes
5. Access granted!

## Security & Privacy

- All operations are performed locally in your browser
- No data is sent to external servers
- Required permissions are used only when necessary
- Cookies are exported as-is (no encryption in v1.0.0)

## Development

### Setup
1. Clone the repository
```bash
git clone https://github.com/yourusername/FISABytes.git
cd FISABytes
```

2. Load the extension
- Open Chrome
- Go to `chrome://extensions/`
- Enable Developer Mode
- Click "Load unpacked"
- Select the `src` directory

### Project Structure
```
FISABytes/
├── src/                    # Source files
│   ├── img/               # Extension icons
│   ├── _locales/          # Internationalization
│   ├── assets/            # Static assets
│   ├── popup.html         # Extension popup
│   ├── manifest.json      # Extension manifest
│   └── service-worker.js  # Service worker
├── README.md              # This file
└── LICENSE                # MIT license
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

For support, feature requests, or bug reports, please open an issue in this repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Version History

- 1.0.0: Initial release
  - Basic cookie export/import functionality
  - Simple, clean interface
  - Local-only operation

## Upcoming Features

We're planning to enhance FISABytes with:
- Selective cookie sharing
- Enhanced security features
- Visual cookie management
- Automatic cookie cleanup
- Error checking and confirmations
- Step-by-step tutorials

## Important Notes

- Version 1.0.0 is focused on basic functionality
- Use caution when sharing cookie files
- Always verify the source of imported cookie files
- Some websites may have additional security measures that prevent cookie sharing