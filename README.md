# 🚀 ELECTRON - DESKTOP APPLICATION

This is an **Electron-based desktop application** for **CLAPPED.RIP**. It provides a seamless way to build and distribute a standalone Windows executable and installer.

---

## 📌 Table of Contents

- [🛠️ Installation](#-installation)
  - [Prerequisites](#prerequisites)
  - [Cloning the Repository](#cloning-the-repository)
  - [Installing Dependencies](#installing-dependencies)
- [🚀 Building the Application](#-building-the-application)
  - [Generating a Standalone `.exe` File](#generating-a-standalone-exe-file)
- [📦 Creating an Installer](#-creating-an-installer)
  - [Generating an Installer (`.exe` Setup File)](#generating-an-installer-exe-setup-file)
- [⚙️ Configuration](#️-configuration)
- [🛠️ Troubleshooting](#-troubleshooting)
- [📝 Notes](#-notes)
- [📜 License](#-license)
- [🤝 Contributing](#-contributing)

---

## 🛠️ Installation

### Prerequisites
Before you begin, ensure that you have the following installed:

1. **Node.js**  
   - Download and install from: [Node.js Official Website](https://nodejs.org/)  
   - Ensure Node.js and npm are added to your system's `PATH` environment variable.

2. **Git** (optional, for cloning the repository)  
   - Download and install from: [Git Official Website](https://git-scm.com/)

---

### Cloning the Repository
Clone this repository to your local machine:
```bash
git clone https://github.com/OnyxDeveploment/electron-web.git
cd electron-web
```

---

### Installing Dependencies
After cloning the repository, install the required dependencies by running:
```bash
npm install
```

---

## 🚀 Building the Application

### Generating a Standalone `.exe` File
To build a standalone Windows executable, run:
```bash
npx electron-packager . "MyApp" --platform=win32 --arch=x64 --icon=assets/clapped.ico --out=out --overwrite
```

- The generated `.exe` file will be located in:  
  **`out/MyApp-win32-x64/`**

---

## 📦 Creating an Installer

### Generating an Installer (`.exe` Setup File)
To create a Windows installer (`.exe` setup file), follow these steps:

1. **Install the Electron Windows Installer Package**  
   ```bash
   npm install electron-installer-windows --save-dev
   ```

2. **Run the Installer Command**  
   ```bash
   npx electron-installer-windows --src out/MyApp-win32-x64/ --dest installers/ --config config.json
   ```

- The final installer will be located in:  
  **`installers/`**

---

## ⚙️ Configuration

Before packaging the application, ensure the following configurations:

- **Icon File**:  
  - The icon file (`clapped.ico`) should be in the `assets/` folder.
  
- **Platform Compatibility**:  
  - This application is designed to run **only on Windows (64-bit)**.
  
- **Configuration File (`config.json`)**:  
  - Check the `config.json` file for correct paths and settings before generating the installer.

---

## 🛠️ Troubleshooting

- **Dependency Issues**  
  If you encounter issues with dependencies, try reinstalling Electron:
  ```bash
  npm install --save-dev electron
  ```

- **Build Errors**  
  - Ensure all required dependencies are installed.
  - Update Node.js to the latest stable version.
  - Check that the correct file paths are used in the commands.

---

## 📝 Notes

- The application is optimized for **Windows 64-bit systems**.
- To run the application in development mode, use:
  ```bash
  npm start
  ```
- Always verify the paths in `config.json` before generating the installer.

---

## 📜 License

This project is licensed under the **MIT License**. See the [`LICENSE`](LICENSE) file for more details.

---

## 🤝 Contributing

Contributions are welcome! If you’d like to improve this project:

1. Fork the repository.
2. Create a new feature branch:  
   ```bash
   git checkout -b feature-branch
   ```
3. Make your changes and commit them:  
   ```bash
   git commit -m "Add new feature"
   ```
4. Push the changes to your forked repository:  
   ```bash
   git push origin feature-branch
   ```
5. Submit a pull request. 🎉

---

Enjoy building and distributing your Electron application! 🚀✨
