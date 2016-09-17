const isDev = (process.env.NODE_ENV === 'development');

let installExtension = null;
if ( isDev ) {
  installExtension = require('electron-devtools-installer');
}

const electron = require('electron');
const menuTemplate = require('./menuTemplate');

const MainWindow  = require('../windows/MainWindow');
const AboutWindow = require('../windows/AboutWindow');
const TrayWindow  = require('../windows/TrayWindow');

const TrayIcon = require('./TrayIcon');

const {app, ipcMain, Menu} = electron;

let tray = null;
let main = null;
let about = null;
let trayIcon = null;

app.dock.hide();
app.on('ready', function () {
  if ( isDev ) installExtentions();

  tray = new TrayWindow();
  main = new MainWindow();
  about = new AboutWindow();

  trayIcon = new TrayIcon(tray.window);

  Menu.setApplicationMenu( Menu.buildFromTemplate(menuTemplate(main)) );
})


ipcMain.on('quit-app', function() {
  main.window.close();
  about.window.close();
  tray.window.close();
  app.quit();
});


// Custom events MAIN WINDOW
ipcMain.on('show-main-window-event', function() {
  main.window.show();
  app.dock.show();
});


// Custom events ABOUT WINDOW
ipcMain.on('show-about-window-event', function() {
  about.window.show();
});


// Custom events TRAY WINDOW
ipcMain.on('update-title-tray-window-event', function(event, title) {
  trayIcon.updateTitle(title);
});

const installExtentions = function () {
  installExtension['default']( installExtension['REDUX_DEVTOOLS'] )
  installExtension['default']( installExtension['REACT_DEVELOPER_TOOLS'] )
}
