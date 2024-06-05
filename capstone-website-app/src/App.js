// import { ChakraProvider } from "@chakra-ui/react";
// import { AlertProvider } from "./context/alertContext";

import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

// import fontawesome from '@fortawesome/fontawesome'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { fa-solid faStar } from "@fortawesome/free-solid-svg-icons";

// fontawesome.library.add(fa-solid faStar);

function App() {
  return (
    <div className='container' data-testid='Container'>
      <BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
