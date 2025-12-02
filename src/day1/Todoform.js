import { useState } from "react";

const Todoform = ({onSave}) => {
    const [task,setTask]=useState('')
    const handleSubmit =(e)=>{
        e.preventDefault(); //기존 기능 방지
        // setView(task); //전송이 되면 보여지는 입력값 저장
        onSave(task);
        setTask('');
    }
    // const handleKeyDown =(e)=>{
    //     if(e.code==='KeyA'){
    //         setView(task);
    //     }
    // }
    return (
    <div id="todo-form">
        <h2>할 일 내용을 입력하세요.</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={task}
                onChange={((e)=>{setTask(e.target.value)})}
                // onKeyDown={handleKeyDown}
            />
        </form>
    </div>
  )
}

export default Todoform