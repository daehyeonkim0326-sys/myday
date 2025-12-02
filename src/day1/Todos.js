import Todoform from "./Todoform"
import Todolist from "./Todolist"
import { useEffect, useState } from "react";
import "../day1/Todo.css";
const Todos = () => {
    /*
    id: 현재시간 Date.now() : 
    done:true/false
    toso:text
    */
   const [todos,setTodos] = useState(()=>{
        //localstorage에 있는 TODOS를 읽어오기
        const loaded =localStorage.getItem("TODOS");
        //값이 있으면 변환해서 쓰고, 없으면 빈배열을 기본값을 쓰고 
        return loaded ? JSON.parse(loaded) : [];

   });

   useEffect(()=>{
    //todos를 localstorage에 저장
    const saved = JSON.stringify(todos);
    localStorage.setItem("TODOS",saved);
   },[todos]);
   const handleDelete =(id)=>{
        const update = todos.filter((item)=>{
            return item.id !== id;
        });
        setTodos(update);
    }
    const handleTodosSave = (list)=>{
        //배열에 저장 
        // setTodos((prev)=>{
        //     return [...prev,list]
        // });
        const newTodo = {id:Date.now(),done:false,todo:list};
        setTodos((prev)=>{return [...prev, newTodo]});
    }
    const handleToggle =(id)=>{
        const update = todos.map((list)=>{
            return list.id===id? {...list, done: !list.done}:list;
        });
        setTodos(update);
    }
  return (
    <div id="todo-page">
        <Todoform onSave={handleTodosSave}/>
        <Todolist todos={todos} onDel={handleDelete} onToggle={handleToggle}/>
    </div>
  )
}

export default Todos