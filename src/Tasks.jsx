import { use, useState } from "react";
import "./app.css"
function Tasks(){
  const [tasks, setTasks] = useState([
      ])
  
 function eventLoad(e){
  // console.log(e.target.value)
  setAddtask(e.target.value)

 }


  

    return(

      <>
        <section className="hero">
          <form>
            <input type="text" placeholder="Enter a new task" />
            <select >
              {/* <option value="false">Select</option> */}
              <option>Pending</option>
              <option>Compeleted</option>
            </select>
            <button type="submit">Add new Task</button>
            {/* <div>{addtask}</div> */}
          </form>

        </section>
       
        <div className="app">     
          <article className="heading-section">
        <h3>Our Daily Activities</h3>
        <button  className="trigger">Show / Hide</button>
        </article> 
      
        <ul>
       
            {tasks.map((item) => (
              
              <li>
                {1} Task 1 hard coded 
               <button className="delete">Delete</button>
              </li>
              
            ))}
           </ul>
          
        </div>
    
        
        </>
    )
}
export default Tasks;