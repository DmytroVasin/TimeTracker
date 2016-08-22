const {ipcRenderer} = require('electron');

window.$ = window.jQuery = require('jquery');

$(document).ready(function() {
  $('#hideAboutBtn').on('click', function() {
    ipcRenderer.send('hide-about-window-event');
  });
});
