const {ipcRenderer} = require('electron');

window.$ = window.jQuery = require('jquery');

$(document).ready(function() {
  $('#hideTimeTrackerBtn').on('click', function() {
    ipcRenderer.send('hide-main-window-event');
  });
});
