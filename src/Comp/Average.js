//useMemo1
import React, {useState, useMemo} from 'react';

const getAverage = numbers => {
    console.log('평균값 계산 중');

    if(numbers.length === 0){
        return;
    }

    const sum = numbers.reduce((a,b) => a + b);

    return sum / numbers.length;
    
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    

    //input 내용이 수정될 때도 getAverage함수가 호출됨 
    const onChange = e => {
        console.log('onChange함수');
        setNumber(e.target.value);
    };

    const onInsert = e => {
        console.log('onInsert함수');
        //여기서 리스트에 추가하네 concat으로 
        const nextList = list.concat(parseInt(number));

        setList(nextList);
        setNumber('');

        

    };
    //input 내용이 수정될 때도 getAverage함수가 실행되어 그걸 막고자 useMemo 사용  
    const avg = useMemo(
        
        () => getAverage(list), [list]
        
        );

    return (
        <div>
            <input value={number} onChange={onChange} />
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

export default Average;