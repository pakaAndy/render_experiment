import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParagraphList from "./Paragraph_list";
import SayHello from "./SayHello";
import Parent from "./ControlledComponents/Parent";

function App() {
  let PLFoo = [1,2,3,4].map((ziffer) =>{
    return {
      foo: ziffer
    }
  });
  console.log('PLFoo: ' , PLFoo) ;
  let child: SayHello | null = null ;
  const getChild = (theChild: SayHello) => {
    console.log('getChild: ' , theChild) ;
    child = theChild ;
  }

  const tellChild = () => {
    console.log('tellChild') ;
    if (child){
      child.myfun('say Hello') ;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Parent  />
        <ParagraphList foo={PLFoo} />
        <SayHello foo={'was denn'} giveYouClbck={getChild} />
        <button onClick={tellChild} >Er soll was sagen</button>
      </header>
    </div>
  );
}

export default App;
