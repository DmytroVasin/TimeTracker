import React from 'react'

export class WindowHeader extends React.Component {

  handleWindowClose = () => {
    ipcRenderer.send('hide-main-window-event');
  }

  render() {
    return (
      <div className='window-controls'>
        <div className='window-controls-actions'>
          <div className='btn close' onClick={ this.handleWindowClose } />
          <div className='btn minimize' />
          <div className='btn maximize' />
        </div>

        <div className='window-controls-title'>Time Tracker</div>
      </div>
    );
  }
};
