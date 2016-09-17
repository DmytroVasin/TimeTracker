const path = require('path');
const { BrowserWindow } = require('electron');
const Positioner = require('electron-positioner');

class AboutWindow {
  constructor() {

    let htmlPath = 'file://' + path.join(__dirname, '..') + '/pages/about_page.html'

    this.window = new BrowserWindow({
      show: false,
      width: 300,
      height: 336,
      frame: false,
      backgroundColor: '#E4ECEF',
      // resizable: false
    })

    this.window.loadURL(htmlPath);

    this.window.on('blur', () => {
      this.window.hide();
    });
    this.window.on('show', () => {
      let positioner = new Positioner(this.window);
      positioner.move('center');
    });
  }
}

module.exports = AboutWindow;
