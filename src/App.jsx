import { useEffect, useState } from "react";
import style from "./main.module.css";
import backgroundImage from './backgroundImages.js';

// COMPONENTS:
import NavBarBottom from "./components/NavBarBottom/NavBarBottom";
import FolderContainer from "./components/FolderContainer/FolderContainer";
import BunnyGame from "./components/BunnyGame/BunnyGame";
import ChangeUIButton from "./components/ChangeUIButton/ChangeUIButton";
import LoadingPage from "./components/LoadingPage/LoadingPage";

function App() {

  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div className={style.main}>
      {loading 
        ? 
          <LoadingPage background={backgroundImage.mainPage}/> 
        : 
          <div className={style.main} style={backgroundImage.win}>
            <ChangeUIButton/>
            <FolderContainer />
            <NavBarBottom />
            <BunnyGame/>
          </div>
      }
    </div>
  );
}

export default App;