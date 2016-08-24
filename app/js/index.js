// TODO: How to recompile this into ES6?
const isDev = require('electron-is-dev');

const Positioner = require('electron-positioner')

const menubar = require('menubar');
const path = require('path');
const electron = require('electron');
const menuTemplate = require('./menu');

const MainWindow = require('./MainWindow');
const AboutWindow = require('./AboutWindow');

const {app, BrowserWindow, ipcMain, Menu} = electron;

let main = null;
let about = null;

let mb = menubar({
  index: 'file://' + path.join(__dirname, '../pages/views/tray_page.html'),
  preloadWindow: true,
  tooltip: 'Time Tracker',
  height: 200,
  width: 225,
  icon: path.join(__dirname, '../icons/timeTrackerIcon_22.png')
});

mb.app.on('quit', () => {
  console.log('mb.app.on')
  mb = null;
});


app.on('ready', function () {
  installExtentions();

  main = new MainWindow();
  about = new AboutWindow();

  Menu.setApplicationMenu( Menu.buildFromTemplate(menuTemplate()) );
})


ipcMain.on('quit-app', function() {
  uninstallExtentions();

  console.log('QUIT APP ...')

  main.window.close();
  about.window.close();
  mb.app.quit();
  app.quit();
});


// Custom events MAIN WINDOW
ipcMain.on('show-main-window-event', function() {
  main.window.show();
  app.dock.show();
});
ipcMain.on('hide-main-window-event', function() {
  main.window.hide();
  app.dock.hide();
});
ipcMain.on('minimize-main-window-event', function() {
  main.window.minimize();
});
ipcMain.on('toggle-maximize-main-window-event', function() {
  if( main.window.isMaximized() ){
    main.window.unmaximize();
  } else {
    main.window.maximize();
  }
});


// Custom events ABOUT WINDOW
ipcMain.on('show-about-window-event', function() {
  about.window.show();
  // Move window to center
  this.positioner = new Positioner(about.window);
  this.positioner.move('center');
});
ipcMain.on('hide-about-window-event', function() {
  about.window.hide();
});

// Only for dev!
const installExtentions = function () {
  let home = false;
  if(home == true){
    ext_path = '/Users/vasin/Library/Application Support/Google/Chrome/Profile 1/Extensions'
  } else {
    ext_path = '/Users/dv/Library/Application Support/Google/Chrome/Default/Extensions'
  };
  BrowserWindow.addDevToolsExtension(`${ext_path}/fmkadmapgofadopljbjfkapdkoienihi/0.15.3_0`)
  BrowserWindow.addDevToolsExtension(`${ext_path}/lmhkpmbekcpmknklioeibfkpmmfibljd/2.5.1.4_0`)
}

const uninstallExtentions = function () {
  BrowserWindow.removeDevToolsExtension("React Developer Tools")
  BrowserWindow.removeDevToolsExtension("Redux DevTools")
}
