import React, {useState} from 'react';
//상태관리 할 땐 
const Counter = () => {
    const [value, setValue] = useState(0);
    //useState 함수가 호출되면 배열을 반환, 상태 값과 상태를 설정하는 함수

    return(
        <div>
            <p>
                현재 카운터 값은 
                <b>{value}</b>
                입니다.
            </p>
            <button onClick={() => setValue(value+1)}>+1</button>
            <button onClick={() => setValue(value-1)}>-1</button>
        </div>
    )
}

export default Counter;