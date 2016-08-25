const path = require('path');
const { BrowserWindow, Tray } = require('electron');
const Positioner = require('electron-positioner');

class TrayIcon {
  constructor(trayWindow) {

    let iconPath = path.join(__dirname, '../icons/timeTrackerIcon_22.png')
    const trayIcon = new Tray(iconPath);
    trayIcon.setToolTip('Time Tracker');


    trayIcon.on('click', (_e, bounds) => {
      if ( trayWindow.isVisible() ) {
        trayWindow.hide();
      } else {
        let positioner = new Positioner(trayWindow);
        positioner.move('trayCenter', bounds)

        trayWindow.show();
      }
    });

  }
}

module.exports = TrayIcon;
