//useMemo1
import React, {useState, useMemo, useCallback, useRef} from 'react';

const getAverage = numbers => {
    console.log('평균값 계산 중');

    if(numbers.length === 0){
        return;
    }

    const sum = numbers.reduce((a,b) => a + b);

    return sum / numbers.length;
    
};

const Average2 = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null); //포커스 변경을 위함 
    /*useCallback 적용 전*/
    // //input 내용이 수정될 때도 getAverage함수가 호출됨 
    // const onChange = e => {
    //     setNumber(e.target.value);
    // };

    // const onInsert = e => {
    //     //여기서 리스트에 추가하네 concat으로 
    //     const nextList = list.concat(parseInt(number));

    //     setList(nextList);
    //     setNumber('');

    // };

    const onChange = useCallback(e => {
        console.log('onChange함수');
        setNumber(e.target.value);
    }, []);//컴포넌트가 처음 렌더링될 때만 함수 생성 

    const onInsert = useCallback(() => {
        console.log('onInsert함수');
        const nextList = list.concat(parseInt(number));

        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list]);//number, list가 바뀌었을 때만 함수 생성 
    //함수가 생성된다고 하는데 메모리에 한 번만 올라간다고 이해하면 될까? 




    //input 내용이 수정될 때도 getAverage함수가 실행되어 그걸 막고자 useMemo 사용  
    const avg = useMemo(
        () => getAverage(list), [list]
        );

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                {/* <b>평균값 : </b>{getAverage(list)} */}
                <b>평균값 : </b>{avg}
            </div>
        </div>
    )
};

export default Average2;