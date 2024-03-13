// import { ChakraProvider } from "@chakra-ui/react";
// import { AlertProvider } from "./context/alertContext";
// import Alert from "./components/Alert";

import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className='container'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
