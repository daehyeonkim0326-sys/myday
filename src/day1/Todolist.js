const Todolist = ({todos,onDel,onToggle}) => {
  return (
    <>
    {todos.length > 0 &&
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
                            textDecorationColor : list.done ? "rgba(0,0,255,0.1)" : "none",
                            textDecorationThickness : list.done ? "10px" : "none",
                            padding:"0  3rem",
                            width:"200px",
                            display:"flex",
                            justifyContent:"flex-start"
                        }}>{list.todo}</span>
                        <button onClick={()=>{onDel(list.id)}}>×</button>
                    </li>
                    )
                })
            }
        </ul>
        }
  </>
  )
}

export default Todolist