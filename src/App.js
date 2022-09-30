/* eslint no-eval: 0 */
import React, {useState} from 'react';
import './App.css';

function App() {
  const [res, setRes] = useState(0);
  const [exp, setExp] = useState('');

  const calc = () => {
    const regex = /[a-z,A-Z,а-я,A-Я,.=,|,]+/;
    console.log('exp:', exp, exp.search(regex));
    if(exp.search(regex)>-1) {
      alert("Unacceptable symbols"); 
      return;
    }
    setExp(exp.split(/[\s,]+/).join(''));
    if(exp[exp.length-1] === '+' || exp[exp.length-1] === '-' || exp[exp.length-1] === '*' || exp[exp.length-1] === '/') {
      alert('End of expression incorrect');
      return;
    }
    
    setRes(eval(exp));
  }

  const clear = () => {
    setRes(0);
  }

  const handleKeyPress = (e) => {
    if(e.key === "Enter") calc();
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{fontSize:"10px", color:"grey", margin:"0 auto 5px"}}>type math expression</div>
        <div style={{display:"inline-block", height:"30px", width:"222px", position:"relative"}}>
          <input 
            id="math_expression" 
            type="text" 
            style={{padding:"5px 35px 5px 15px", borderRadius:"20px", position:"absolute", left:"0", zIndex:"5"}}
            onChange={(e) => setExp(e.target.value)} 
            onKeyPress={handleKeyPress}
            value={exp} 
          />
          <button onClick={clear} className="btn-clear">&#10006;</button>
        </div>
        <div style={{margin:"10px auto"}}>
          <button onClick={calc} className="btn-calc">calc</button>
        </div>
        <div style={{fontSize:"64px"}}>{res}</div>
      </header>
    </div>
  );
}

export default App;
