const path = require('path');
const { BrowserWindow } = require('electron');

class AboutWindow {
  constructor() {

    let htmlPath = 'file://' + path.join(__dirname, '..') + '/pages/about_page.html'

    this.window = new BrowserWindow({
      show: false,
      width: 300,
      height: 336,
      frame: false,
      // resizable: false
    })

    this.window.loadURL(htmlPath);

    this.window.on('blur', () => {
      this.window.hide();
    });
  }
}

module.exports = AboutWindow;
