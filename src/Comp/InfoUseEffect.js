import React, {useEffect, useState} from 'react';

const Info_useEffect = () => {

    const [Name, setName] = useState('');
    const [NickName, setNickName] = useState('');


    useEffect(() => {
        console.log('렌더링이 완료되었습니다.');
        console.log({
            Name, NickName
        });
        return () => {
            console.log('CleanUp');
            console.log(NickName);
        }
    }, [NickName]);

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickName = e => {
        setNickName(e.target.value);
    }

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

export default Info_useEffect;