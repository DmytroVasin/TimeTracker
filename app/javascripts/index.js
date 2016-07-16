const isDev = require('electron-is-dev');

const path = require('path');
const electron = require('electron');
const menuTemplate = require('./menu');

const {app} = electron;
const {BrowserWindow} = electron;

const {ipcMain, Menu} = require('electron');

let window;
let optionsWindow;


app.on('ready', function () {
  const createWindow = function () {
    window = new BrowserWindow({ width: 1300, height: 800 })
    window.loadURL('file://' + path.join(__dirname, '..', '..') + '/views/index.html');

    optionsWindow = new BrowserWindow({ width: 400, height: 300, show: false });
    optionsWindow.loadURL('file://' + path.join(__dirname, '..', '..') + '/views/options.html');


    window.on('closed', function() {
      window = null;
    });

    optionsWindow.on('closed', function() {
      optionsWindow = null;

      optionsWindow = new BrowserWindow({ width: 400, height: 300, show: false });
      optionsWindow.loadURL('file://' + path.join(__dirname, '..', '..') + '/views/options.html');
    });
  }
  createWindow();


  Menu.setApplicationMenu( Menu.buildFromTemplate(menuTemplate()) );
})

app.on('window-all-closed', function () {
  app.quit()
})

// Custom events
app.on('show-about', function() {
  optionsWindow.show();
});
