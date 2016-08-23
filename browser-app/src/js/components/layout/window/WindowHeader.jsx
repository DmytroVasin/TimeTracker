import React from 'react'

export class WindowHeader extends React.Component {

  handleWindowClose = () => {
    ipcRenderer.send('hide-main-window-event');
    return false;
  }
  handleWindowMinimize = () => {
    ipcRenderer.send('minimize-main-window-event');
    return false;
  }
  handleWindowMaximize = () => {
    ipcRenderer.send('toggle-maximize-main-window-event');
    return false;
  }

  render() {
    return (
      <div className='window-controls' onDoubleClick={ this.handleWindowMaximize }>
        <div className='window-controls-actions'>
          <div className='btn close' onClick={ this.handleWindowClose } />
          <div className='btn minimize' onClick={ this.handleWindowMinimize } />
          <div className='btn maximize' onClick={ this.handleWindowMaximize } />
        </div>

        <div className='window-controls-title'>Time Tracker</div>
      </div>
    );
  }
};
