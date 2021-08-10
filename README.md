# Hook
## 새로운 프로젝트 생성
    - yarn create react-app hooks-tutorial
## useState
    - 상태를 관리할 때 사용 
```javascript
const [value, setValue] = useState(0);

<button onClick={() => setValue(value + 1)}>

```
    - useState함수가 실행되면 배열이 리턴된다.
    - 0번째 원소 : 값
      1번째 원소 : 상태를 설정하는 함수

## useEffect
    - 컴포넌트가 렌더링될 때 마다 특정 작업을 수행하도록 설정
    - componentDidMount, componentDidUpdate 를 합친 형태로 봐도 됨 
    - 예를들면 어떤 작업들이 있을까
### 특정 값이 업데이트 될 때만 실행하고 싶을 때
    - 함수의 두번째 파라미터에 []를 넣으면 업데이트 될 땐 실행하지 않는다.
```javascript
    useEffect(() => {

        console.log('렌더링이 완료되었습니다.');
        console.log({
            Name, NickName
        });
    }, [NickName]);
```
### 뒷정리하기 
    - 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면 뒷정리함수를 반환해야한다. 
```javascript
 return () => {
            console.log('CleanUp');
            console.log(NickName);
        }
```
    -이건 어떤 경우에 쓰이는 것일까. 

## useReducer
    - 현재 상태, 업데이트를 위한 액션 값을 전달받아 새로운 상태를 반환하는 함수 
    - 반드시 불변성을 지켜줘야 함 
```javascript
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
```
    - useReducer 함수 : 첫번째 파라미터는 reducer 함수 
                        두번째 파라미터는 해당 reducer의 기본값 
    - dispatch는 액션을 발생시키는 함수 
    - 가장 큰 장점은 컴포넌트 업데이트 로직을 밖으로 뺄 수 있다는 것이다. 
### 인풋 상태 관리하기 


## useMemo 
    - 특정 값이 변경되었을 때만 연산을 실행하고, 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용 
    - Average comopnent

```javascript
    const avg = useMemo(
        () => getAverage(list), [list]
        );
```

## useCallback
    - 이전에 만들었던 함수를 재사용할 수 있다. 
    - 첫번째 파라미터 : 생성하고 싶은 함수를 넣는다.
      두번째 파라미터 : dependency배열, 어떤 값이 변하면 이 함수를 생성하게끔 하기 위한 변수들을 넣는다.
```javascript
 const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);//컴포넌트가 처음 렌더링될 때만 함수 생성 

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));

        setList(nextList);
        setNumber('');
    }, [number, list]);//number, list가 바뀌었을 때만 함수 생성 
    //함수가 생성된다고 하는데 메모리에 한 번만 올라간다고 이해하면 될까? 
```     
## useRef   
    - ref를 사용키 위함.
    - 렌더링과 관련되지 않은 값을 관리할 때도 사용 할 수 있음.
```javascript
//...
const inputEl = useRef(null); //포커스 변경을 위함 
//...
inputEl.current.focus();//current 가 실제 element를 가리키게 됨 
//...
ref={inputEl}

```    

