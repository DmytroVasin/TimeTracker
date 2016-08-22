// TODO: How to recompile this into ES6?

const isDev = require('electron-is-dev');

const menubar = require('menubar');
const path = require('path');
const electron = require('electron');
const menuTemplate = require('./menu');

const {app, BrowserWindow, ipcMain, Menu} = electron;


let mainWindow;
let aboutWindow;


let mb = menubar({
  dir: path.join(__dirname, '../tray'),
  preloadWindow: true,
  tooltip: 'Time Tracker',
  height: 200,
  width: 225,
  icon: path.join(__dirname, '../icons/IconTemplate.png')
});

mb.app.on('quit', () => {
  console.log('mb.app.on')
  mb = null;
});


app.on('ready', function () {
  installExtentions();
  mainWindow = createMainAppWindow();
  aboutWindow = createAboutWindow();
  Menu.setApplicationMenu( Menu.buildFromTemplate(menuTemplate()) );
})


ipcMain.on('quit-app', function() {
  uninstallExtentions();

  console.log('QUIT APP ...')

  mainWindow.close();
  aboutWindow.close();
  mb.app.quit();
  app.quit();
});


const createMainAppWindow = function () {
  var _mainWindow = new BrowserWindow({
    width: 1300,
    height: 800,
    show: false
  })
  _mainWindow.loadURL('file://' + path.join(__dirname, '..') + '/views/index.html');

  return _mainWindow;
}

const createAboutWindow = function () {
  var _aboutWindow = new BrowserWindow({
    width: 300,
    height: 500,
    show: false,
    frame: false
  })
  _aboutWindow.loadURL('file://' + path.join(__dirname, '..') + '/tray//options.html');

  return _aboutWindow;
}



// Custom events MAIN WINDOW
ipcMain.on('show-main-window-event', function() {
  mainWindow.show();
});
ipcMain.on('hide-main-window-event', function() {
  mainWindow.hide();
});


// Custom events ABOUT WINDOW
ipcMain.on('show-about-window-event', function() {
  aboutWindow.show();
});
ipcMain.on('hide-about-window-event', function() {
  aboutWindow.hide();
});

// Only for dev!
const installExtentions = function () {
  let home = true;
  if(home == true){
    ext_path = '/Users/vasin/Library/Application Support/Google/Chrome/Profile 1/Extensions'
  } else {
    ext_path = '/Users/dv/Library/Application Support/Google/Chrome/Default/Extensions'
  };
  BrowserWindow.addDevToolsExtension(`${ext_path}/fmkadmapgofadopljbjfkapdkoienihi/0.15.1_0`)
  BrowserWindow.addDevToolsExtension(`${ext_path}/lmhkpmbekcpmknklioeibfkpmmfibljd/2.5.1.2_0`)
}

const uninstallExtentions = function () {
  BrowserWindow.removeDevToolsExtension("React Developer Tools")
  BrowserWindow.removeDevToolsExtension("Redux DevTools")
}
