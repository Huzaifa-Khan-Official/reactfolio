import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './Components/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import StartLoader from './Components/StartLoader';

function App() {
  const [startLoader, setStarLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStarLoader(false)
    }, 3000);
  }, [])

  return (
    <div className="App">
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
  );
}

export default App;
