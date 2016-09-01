const path = require('path');
const { BrowserWindow } = require('electron');

class TrayWindow {
  constructor() {

    let htmlPath = 'file://' + path.join(__dirname, '..') + '/pages/tray_page.html'

    this.window = new BrowserWindow({
      show: false,
      height: 210,
      width: 225,
      frame: false,
      backgroundColor: '#E4ECEF',
      // resizable: false,
    });

    this.window.loadURL(htmlPath);

    this.window.on('blur', () => {
      this.window.hide();
    });
  }
}

module.exports = TrayWindow;
