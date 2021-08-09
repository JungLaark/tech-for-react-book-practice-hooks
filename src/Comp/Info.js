import React, {useState} from 'react';

const Info = () => {
    const [Name, setName] = useState('');
    const [NickName, setNickName] = useState('');

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickName = e => {
        setNickName(e.target.value);
    }

    //함수형이라 render 없음 
    return (
        <div>
            <div>
                <input value={Name} onChange={onChangeName}></input>
                <input value={NickName} onChange={onChangeNickName}></input>
            </div>
            <div>
                <b>이름:</b>{Name}
                <b>별명:</b>{NickName}
            </div>
        </div>
    )
}

export default Info;