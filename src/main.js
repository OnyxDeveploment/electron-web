const { app, BrowserWindow, Notification } = require("electron");
const path = require("path");

// Define constants
const appURL = "https://google.com";
const iconPath = path.join(__dirname, "../assets/clapped.png");

let mainWindow;

/**
 * Function to create the main application window
 */
function createWindow() {
    // Ensure the previous window is properly closed
    if (mainWindow) {
        mainWindow.destroy();
    }

    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            sandbox: false, // Ensures scripts work correctly
        },
        autoHideMenuBar: true,
        icon: iconPath,
        show: false
    });

    // Show the window only when it's fully loaded
    mainWindow.once("ready-to-show", () => {
        mainWindow.maximize();
        mainWindow.show();
    });

    // Set App User Model ID (Windows)
    if (process.platform === "win32") {
        app.setAppUserModelId("CLAPPED.RIP - DESKTOP");
    }

    // Load the URL and handle errors
    mainWindow.loadURL(appURL).catch((error) => {
        console.error(`[ERROR] Failed to load URL: ${error}`);
    });

    // Handle when window is closed
    mainWindow.on("closed", () => {
        mainWindow = undefined;
    });

    // Prevent new windows from opening externally
    mainWindow.webContents.setWindowOpenHandler(({ url }) => {
        console.warn(`[SECURITY] Blocked attempt to open external URL: ${url}`);
        mainWindow.loadURL(url);
        return { action: "deny" };
    });
}

/**
 * Function to send a system notification (if supported)
 */
function sendNotification(title, body) {
    if (Notification.isSupported()) {
        new Notification({
            title,
            body,
            icon: iconPath
        }).show();
    } else {
        console.warn("[WARNING] Notifications are not supported on this system.");
    }
}

// Ensure Electron is properly initialized
app.whenReady().then(createWindow).catch(err => {
    console.error("[ERROR] App failed to initialize:", err);
});

// Handle window close event on non-Mac platforms
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        console.log("[INFO] Quitting application...");
        app.quit();
    }
});

// Recreate window when app is reactivated on MacOS
app.on("activate", () => {
    if (!mainWindow) {
        createWindow();
    }
});

// Handle uncaught errors to prevent crashes
process.on("uncaughtException", (error) => {
    console.error("[FATAL] Uncaught exception:", error);
});

process.on("unhandledRejection", (reason, promise) => {
    console.error("[FATAL] Unhandled promise rejection:", reason, "at:", promise);
});
