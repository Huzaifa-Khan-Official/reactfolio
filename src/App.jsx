import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './Components/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import StartLoader from './Components/StartLoader';
import { Theme } from './Context/Context.js'
import { name, navbarLogo } from './Constants/Constants.js';

function App() {
  const [startLoader, setStarLoader] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    updateTitle(name, navbarLogo);
    setTimeout(() => {
      setStarLoader(false)
    }, 3000);
  }, [])

  function updateTitle(name, iconUrl) {
    const link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "icon";
    link.href = iconUrl || "%PUBLIC_URL%/favicon.ico";
    document.title = `${name} | Portfolio` || "Huzaifa Khan | Portfolio";


    document.head.appendChild(link);
  }

  return (
    <Theme.Provider value={{ darkTheme, setDarkTheme }}>
      <div className={`App ${darkTheme && "darkTheme"}`}>
        {
          startLoader ? <StartLoader /> :
            (
              <>
                <Navbar />
                <ToastContainer autoClose={1000} />
              </>
            )
        }
      </div>
    </Theme.Provider>
  );
}

export default App;
