import React , {Component} from 'react';
import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Widgets from './components/Widgets/Widgets';
import Login from './Login';
import {useStateValue} from "./StateProvider"
// v https://www.youtube.com/watch?v=B-kxUMHBxNo&ab_channel=PaolofromTOKYO starting from M 3.0.0
const App = ()=> {
  const [user , dispatch] = useStateValue();
    return(
      <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
        </>
      )}
      </div>
    )
}
export default App;
