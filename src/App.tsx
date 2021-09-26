import React, { useState } from 'react';
import './App.css';

export const App: React.FC = () => {
  const [num, setNum] = useState('0');
  const [add, setAdd] = useState('0');
  const [calc, setCalc] = useState('Calculator');
  const [bool, setBool] = useState(true);

  const inputValue = (e: string) => {
    if (bool === true) {
      if (num === '0') {
        setNum(e);
      } else {
        setNum(num + e);
      }
    } else if (bool === false) {
      if ((add === "0")) {
        setAdd(e);
      } else {
        setAdd(add + e);
      }
    }
    return;
  }
  const equal = (add: string, calc: string, num: string) => {
    const addNum = Number(add);
    const newNum = Number(num);
    switch (calc) {
      case 'plus':
        setNum(String(newNum + addNum));
        break;
      case 'minus':
        setNum(String(newNum - addNum));
        break;
      case 'multiply':
        setNum(String(newNum * addNum));
        break;
      case 'devide':
        setNum(String(newNum / addNum));
        break;
      default: setNum('');
    }
    setAdd('0');
    setCalc('Calculator');
    setBool(true);
  }

  const setAddNumber = (calc: string) => {
    if (num === "") {
      return;
    }
    setCalc(calc);
    setBool(false);
  }

  const reverse = (num: string) => {
    const typeOfNum = Number(num);
    const str = String(-typeOfNum);
    setNum(str);
  }

  const percentage = (num: string) => {
    const typeOfNum = Number(num);
    const str = String(typeOfNum / 100);
    setNum(str);
  }

  return (
    <>
      <div className="output">
        <h2>{bool === true ? num : add}</h2>
        <p>{calc}</p>
      </div>
      <div>
        {bool === true ? <button onClick={() => setNum("0")}>AC</button> : <button onClick={() => setAdd('0')}>C</button>}
        <button onClick={() => reverse(num)}>+/-</button>
        <button onClick={() => percentage(num)}>%</button>
        <button onClick={() => setAddNumber('devide')}>÷</button><br />
        <button onClick={() => inputValue("7")}>7</button>
        <button onClick={() => inputValue("8")}>8</button>
        <button onClick={() => inputValue("9")}>9</button>
        <button onClick={() => setAddNumber('multiply')}>*</button><br />
        <button onClick={() => inputValue("4")}>4</button>
        <button onClick={() => inputValue("5")}>5</button>
        <button onClick={() => inputValue("6")}>6</button>
        <button onClick={() => setAddNumber('minus')}>-</button><br />
        <button onClick={() => inputValue("1")}>1</button>
        <button onClick={() => inputValue("2")}>2</button>
        <button onClick={() => inputValue("3")}>3</button>
        <button onClick={() => setAddNumber('plus')}>+</button><br />
        <button onClick={() => inputValue("0")}>0</button>
        <button onClick={() => equal(add, calc, num)}>=</button>
      </div>
    </>
  )
}
