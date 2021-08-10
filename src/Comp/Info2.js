import React, {useReducer} from 'react';
/**인풋 상태 관리하기 */
//코드가 확 준다
function reducer(state, action){
    
    console.log("reducer함수: ", state);
    return {
        ...state,
        [action.name]: action.value
    };
}

const Info2 = () => {

    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    });

    const {name, nickname} = state;

    const onChange = e => {
        console.log('onChange함수 : ', e.target);
        dispatch(e.target);
    }

    //함수형이라 render 없음 
    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}></input>
                <input name="nickname" value={nickname} onChange={onChange}></input>
            </div>
            <div>
                <b>이름:</b>{name}
                <b>별명:</b>{nickname}
            </div>
        </div>
    )
}

export default Info2;