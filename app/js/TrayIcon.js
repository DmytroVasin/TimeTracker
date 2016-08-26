const path = require('path');
const { BrowserWindow, Tray } = require('electron');
const Positioner = require('electron-positioner');

class TrayIcon {
  constructor(trayWindow) {

    let iconPath = path.join(__dirname, '../icons/timeTrackerIcon_22.png')

    this.trayIcon = new Tray(iconPath);
    this.trayIcon.setToolTip('Time Tracker');

    this.trayIcon.on('click', (_e, bounds) => {
      if ( trayWindow.isVisible() ) {
        trayWindow.hide();
      } else {
        let positioner = new Positioner(trayWindow);
        positioner.move('trayCenter', bounds)

        trayWindow.show();
      }
    });
  }

  updateTitle(seconds) {
    if (seconds == null) {
      this.trayIcon.setTitle('')
    } else {
      this.trayIcon.setTitle( this._convertSecondsToFromat(seconds) )
    }
  }

  _convertSecondsToFromat(seconds) {
    let numOfSec = parseInt(minutes, 10)

    let h = Math.floor(numOfSec / 3600);
    let m = Math.floor((numOfSec - (h * 3600)) / 60);

    if (h < 10) { h = "0"+h }
    if (m < 10) { m = "0"+m }

    return h+':'+m;
  }
}

module.exports = TrayIcon;
