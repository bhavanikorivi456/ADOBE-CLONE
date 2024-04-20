import React from "react";
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import AdditionalContent from "./components/AdditionalContent";


function App(){
  return (
    <div className="App">
        <Header/>
        <MainContent/>
        <AdditionalContent/>
        <Footer/>
    </div>
  )
}
export default App;

