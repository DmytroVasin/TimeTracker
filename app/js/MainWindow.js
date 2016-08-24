const path = require('path');
const { BrowserWindow } = require('electron');

class MainWindow {
  constructor() {

    this.window = new BrowserWindow({
      width: 1300,
      height: 800,
      show: false,
      frame: false,
      minWidth: 800,
      minHeight: 600,
    })

    this.window.loadURL('file://' + path.join(__dirname, '..') + '/pages/views/time_tracker_page.html');

    this.window.webContents.on('did-finish-load', () => {
      this.window.show();
    });
  }
}

module.exports = MainWindow;
