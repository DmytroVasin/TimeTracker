'use strict';

const path = require('path');

const {ipcRenderer} = require('electron');
window.$ = window.jQuery = require('jquery');

$(document).ready(function() {
  $('#quitBtn').on('click', function() {
    ipcRenderer.send('quit-app');
  });

  $('#showAboutBtn').on('click', function() {
    ipcRenderer.send('show-about-window-event');
  });

  $('#hideMainAppBtn').on('click', function() {
    ipcRenderer.send('hide-main-window-event');
  });

  $('#showMainAppBtn').on('click', function() {
    ipcRenderer.send('show-main-window-event');
  });
})
