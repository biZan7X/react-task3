import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const[msg,setMsg] = useState('Loading...');
  const[theme,setTheme] = useState('green');

  useEffect(()=>{
    let time = new Date().getHours();

    if(time >= 0 && time < 12){
      setMsg('Good Morning from React. You are having coffee with me')
      setTheme('green')
    } else if(time >= 12 && time < 17){
      setMsg('Good Afternoon from React. Wanna lunch with me')
      setTheme('orange')
    } else {
      setMsg('Good Evening from React. Lets drink together')
      setTheme('blue')
    }
  },[])

  return (
    <div className="App">
      <h1 style={{color:theme}}>{msg}</h1>
    </div>
  );
}

export default App;
