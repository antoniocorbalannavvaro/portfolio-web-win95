import winBackground from './assets/winBackground.webp';
import mainWallpaper from './assets/windows-loading-screen.jpg';

const backgroundImages = {
  win: {  
    'backgroundImage': `url(${winBackground})`,
    'backgroundPosition': 'center',
    'backgroundSize': 'cover',
    'backgroundRepeat': 'no-repeat'
  },
  mainPage: {  
    'backgroundImage': `url(${mainWallpaper})`,
    'backgroundPosition': 'center',
    'backgroundSize': 'cover',
    'backgroundRepeat': 'no-repeat'
  }
}

export default backgroundImages;