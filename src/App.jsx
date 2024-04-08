import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './Components/Navbar';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default App;
