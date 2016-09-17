const path = require('path');
const { BrowserWindow, Tray } = require('electron');
const Positioner = require('electron-positioner');

class TrayIcon {
  constructor(trayWindow) {

    let iconPath = path.join(__dirname, '../icons/icon-22.png')

    this.trayIcon = new Tray(iconPath);
    this.trayIcon.setToolTip('Time Tracker');

    this.trayIcon.on('click', (e, bounds) => {
      if ( trayWindow.isVisible() ) {
        trayWindow.hide();
      } else {
        let positioner = new Positioner(trayWindow);
        positioner.move('trayCenter', bounds)

        trayWindow.show();
      }
    });
  }

  updateTitle(title) {
    this.trayIcon.setTitle(title)
  }
}

module.exports = TrayIcon;
