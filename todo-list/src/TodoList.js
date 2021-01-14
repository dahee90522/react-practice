// import React, {useState} from 'react'

// export default function TodoList(){
//     const [todos, setTodos] = useState([]);//할 일 목록을 관리할 상탯값을 정의
//     const onClick = () => {//할 일 추가 버튼을 누르면 호출되는 이벤트 처리 함수
//         import('./Todo.js').then(({Todo}) => {//비동기로 Todo 모듈을 가져옴
//             const position = todos.length+1;
//             const newTodo = <Todo key = {position} title = {`할 일 ${position}`}/>
//             //비동기로 가져온 Todo 컴포넌트를 이용해서 새로운 할 일을 만든다
//             setTodos([...todos, newTodo]);
//         });
//     };
//     return (
//         <div>
//             <button onClick = {onClick}>할 일 추가</button>
//             {todos} {/* 상태값에 저장된 할 일 목록을 모두 출력 */}
//         </div>
//     )
// }
import React, {useState} from 'react'
import Todo from './Todo';

export default function TodoList(){
    const [todos, setTodos] = useState([]);//할 일 목록을 관리할 상탯값을 정의
    const onClick = () => {//할 일 추가 버튼을 누르면 호출되는 이벤트 처리 함수
            const position = todos.length+1;
            const newTodo = <Todo key = {position} title = {`할 일 ${position}`}/>
            //비동기로 가져온 Todo 컴포넌트를 이용해서 새로운 할 일을 만든다
            setTodos([...todos, newTodo]);
    };
    return (
        <div>
            <button onClick = {onClick}>할 일 추가</button>
            {todos} {/* 상태값에 저장된 할 일 목록을 모두 출력 */}
        </div>
    )
}