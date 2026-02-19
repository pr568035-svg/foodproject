import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/frontend_assets/assets';

function AppDownload() {
  return (
    <div className='app-download'>
      <p>For Better Experience Download<br />Our App</p>

      <div className='app-download-platform'>
        <img src={assets.play_store} alt="Play Store" />
        <img src={assets.app_store} alt="App Store" />
      </div>
    </div>
  );
}

export default AppDownload;
