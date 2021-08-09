import React, {useReducer} from 'react';

function reducer(state, action){
    //action type에 따라 작업 수행
    switch(action.type){
        case 'INCREMENT':
            return {value: state.value + 1};
        case 'DECREMENT':
            return {value: state.value - 1};
        default:
            return state;
    }
}

const CounterUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {value: 0});
    //useReducer 함수 : 첫번째 파라미터는 reducer 함수 
    //                  두번째 파라미터는 해당 reducer의 기본값 
    //dispatch는 액션을 발생시키는 함수 
    //가장 큰 장점은 컴포넌트 업데이트 로직을 밖으로 뺄 수 있다는 것이다. 

    return(
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b>입니다.
            </p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>증가</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>감소</button>
        </div>
    )
}

export default CounterUseReducer;