const Todolist = ({todos,onDel,onToggle}) => {
  return (
        <ul id="todo-list">
            {
                todos.map((list)=>{
                    return(
                    <li key={list.id}>
                        <input 
                        type="checkbox"
                        onChange={()=>{onToggle(list.id)}}
                        checked={list.done}
                        />
                        <span style={{
                            textDecoration: list.done ? "line-through": "none",
                            textDecorationColor : list.done ? "rgba(0,0,255,0.4)" : "none",
                            textDecorationThickness : list.done ? "10px" : "none"
                        }}>{list.todo}</span>
                        <button onClick={()=>{onDel(list.id)}}>×</button>
                    </li>
                    )
                })
            }
        </ul>
    
  )
}

export default Todolist