import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './Components/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import StartLoader from './Components/StartLoader';
import { Theme } from './Context/Context.js'

function App() {
  const [startLoader, setStarLoader] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStarLoader(false)
    }, 3000);
  }, [])

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
