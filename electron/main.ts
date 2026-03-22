import { app, BrowserWindow, ipcMain, globalShortcut } from 'electron'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
let win: BrowserWindow | null = null

function createWindow() {
  win = new BrowserWindow({
    width: 1100,
    height: 500,
    frame: false,    
    transparent: true,  
    alwaysOnTop: true,
    hasShadow: false,  
    show: false,        
    skipTaskbar: true,  
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'),
      contextIsolation: true,
      nodeIntegration: false
    },
    resizable: false,      
    movable: true,         
  })

  win.setBackgroundColor('#00000000');
  win.center(); 
  win.setContentProtection(true); // Hide from screen share
  win.setMenu(null);

  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html'))
  }
}

function toggleApp() {
  if (!win) return

  if (win.isVisible()) {
    win.hide()
  } else {
    win.setSize(1100, 500); 
    win.show()
    win.focus()
    
    win.webContents.send('focus-search'); 
  }
}

app.whenReady().then(() => {
  createWindow()

  const shortcut = 'Control+Shift+Space'; 
  const isRegistered = globalShortcut.register(shortcut, () => {
    console.log("Hotkeys pressed: Toggling Search Bar");
    toggleApp();
  });

  if (isRegistered) {
    console.log(`SUCCESS: ${shortcut} is active.`);
  } else {
    console.error("Registration failed. Shortcut might be in use by another app.");
  }
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

ipcMain.on('window-control', (_, action) => {
  if (action === 'minimize') win?.hide()
  if (action === 'close') win?.close()
})