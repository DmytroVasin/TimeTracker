const isDev = require('electron-is-dev');

const path = require('path');
const electron = require('electron');
const menuTemplate = require('./menu');

const {app, BrowserWindow, ipcMain, Menu} = electron;

let mainWindow;
let optionsWindow;

const createApp = function () {
  mainWindow = new BrowserWindow({ width: 1300, height: 800 })
  mainWindow.loadURL('file://' + path.join(__dirname, '..') + '/views/index.html');

  optionsWindow = new BrowserWindow({ width: 400, height: 300, show: false});
  optionsWindow.loadURL('file://' + path.join(__dirname, '..') + '/views/options.html');


  mainWindow.on('closed', function() {
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
