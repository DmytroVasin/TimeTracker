import React from 'react'

export class WindowHeader extends React.Component {
  handleWindowClose = () => {
    ipcRenderer.send('hide-main-window-event');
  }

  render() {
    // Trick to forse background image to be uploaded.
    // TODO: ?
    const closeHover = require('./close-hover.png');
    const minHover = require('./min-hover.png');
    const maxHover = require('./max-hover.png');

    return (
      <div className='window-controls'>
        <div className='window-controls-actions'>
          <div className='btn close' onClick={ this.handleWindowClose } />
          <div className='btn minimize' />
          <div className='btn maximize' />
        </div>

        <div className='window-controls-title'>Time Tracker</div>

        <div style={{display: 'none'}}>
          <img src={closeHover} />
          <img src={minHover} />
          <img src={maxHover} />
        </div>
      </div>
    );
  }
};
