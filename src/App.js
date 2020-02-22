import React from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage'
import { Route, Switch } from 'react-router-dom'
import CharacterList from "./components/CharacterList.js";



export default function App() {
  return (
    <main>
      <Header />
      
        
          <Switch>
            <Route exact path="/" render={props => <WelcomePage {...props}/>} />
            <Route path="/characters" render={props => <CharacterList {...props}/>}/>
          </Switch>
      
      
    </main>
  );
}

const styles = {}

styles.content ={...styles.fill,top: '40px',textAlign: 'center'}
styles.fill = {position: 'absolute',right: 0,left: 0,top: 0,bottom: 0}