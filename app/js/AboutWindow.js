const path = require('path');
const { BrowserWindow } = require('electron');
const Positioner = require('electron-positioner');

class AboutWindow {
  constructor() {

    this.window = new BrowserWindow({
      show: false,
      width: 300,
      height: 336,
      frame: false,
      // resizable: false
    })

    this.window.loadURL('file://' + path.join(__dirname, '..') + '/pages/views/about_page.html');

    this.positioner = new Positioner(this.window);
    this.positioner.move('center');

    this.window.on('blur', () => {
      this.window.hide();
    });
  }
}

module.exports = AboutWindow;
