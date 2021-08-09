import React, {useState} from 'react';
import Counter from './Comp/Counter';
import Info from './Comp/Info';
import InfoUseEffect from './Comp/InfoUseEffect';
import CounterUseReducer from './Comp/CounterUseReducer';

const App = () => {

  const [Visible, setVisible] = useState(false);

  return (
    <div>
    <br/>
    <hr/>
      <h1>useState 기본</h1>
      <Counter/>
    <br/>
    <hr/>
      <h1>useState 여러번</h1>
      <Info/>
    <br/>
    <hr/>
      <h1>useEffect</h1>
      <InfoUseEffect/>
    <br/>
    <hr/>
      <h1>useEffect-App함수에서 useState사용</h1>
      <div>
        <button
          onClick={() => {
            setVisible(!Visible);
          }}
        >
          {Visible ? '숨기기' : '보이기'}
        </button>
      </div>
      {false && <InfoUseEffect/>}
      {true && <InfoUseEffect/>}
      {Visible && <InfoUseEffect/>}
    <br/>
    <hr/>
      <h1>useReducer</h1>
      <CounterUseReducer/>
    </div>
    
  ) 
};

export default App;