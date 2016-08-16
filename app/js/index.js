const isDev = require('electron-is-dev');

const path = require('path');
const electron = require('electron');
const menuTemplate = require('./menu');

const {app, BrowserWindow, ipcMain, Menu} = electron;

let mainWindow;
let optionsWindow;

const createApp = function () {
  const reactDevToolsname = BrowserWindow.addDevToolsExtension("/Users/dv/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/0.15.0_0")
  const reduxDevToolsname = BrowserWindow.addDevToolsExtension("/Users/dv/Library/Application Support/Google/Chrome/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.5.0.1_0")
  // const reactDevToolsname = BrowserWindow.addDevToolsExtension("/Users/vasin/Library/Application Support/Google/Chrome/Profile 1/Extensions/fmkadmapgofadopljbjfkapdkoienihi/0.15.0_0")
  // const reduxDevToolsname = BrowserWindow.addDevToolsExtension("/Users/vasin/Library/Application Support/Google/Chrome/Profile 1/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.5.0_0")

  mainWindow = new BrowserWindow({ width: 1300, height: 800 })
  mainWindow.loadURL('file://' + path.join(__dirname, '..') + '/views/index.html');

  optionsWindow = new BrowserWindow({ width: 400, height: 300, show: false});
  optionsWindow.loadURL('file://' + path.join(__dirname, '..') + '/views/options.html');


  mainWindow.on('closed', function() {
    BrowserWindow.removeDevToolsExtension("React Developer Tools")
    BrowserWindow.removeDevToolsExtension("Redux DevTools")

    app.quit()
  });

  optionsWindow.on('closed', function() {
    optionsWindow = null;

    optionsWindow = new BrowserWindow({ width: 400, height: 300, show: false });
    optionsWindow.loadURL('file://' + path.join(__dirname, '..', '..') + '/views/options.html');
  });
};

// Custom events
app.on('show-about', function() {
  optionsWindow.show();
});


app.on('ready', function () {
  createApp();
  Menu.setApplicationMenu( Menu.buildFromTemplate(menuTemplate()) );
})
