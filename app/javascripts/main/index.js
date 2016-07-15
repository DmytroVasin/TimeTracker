const path = require('path');
const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;

const {ipcMain, Menu} = require('electron');

let window;
let optionsWindow;

function createWindow () {

  window = new BrowserWindow({ width: 800, height: 600, title: 'First App' })
  window.loadURL('file://' + path.join(__dirname, '..', '..') + '/views/index.html');

  optionsWindow = new BrowserWindow({ width: 300, height: 300, show: false });
  optionsWindow.loadURL('file://' + path.join(__dirname, '..', '..') + '/views/options.html');

  const template = [
    {
      label: 'View',
      submenu: [
        {
          label: 'About',
          click: function() {
            window.webContents.send('display-options');
          }
        }
      ]
    }
  ]
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  ipcMain.on('display-options', function() {
    console.log('>>>>>>>>>>>')
    optionsWindow.show();
  });

  window.webContents.on('did-finish-load', function(){
    window.webContents.send('display-options');
  //   window.webContents.send('load-message', {
  //     appName: 'AAAA',
  //     electronVersion: process.versions.electron,
  //     nodeVersion: process.versions.node,
  //     chromiumVersion: process.versions.chrome
  //   });
  });

  window.on('closed', function() {
    window = null;
  });

  window.webContents.openDevTools()
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  app.quit()
})
