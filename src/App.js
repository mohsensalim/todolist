import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useState } from 'react';
import { useRef } from "react";


function App() {
  
  const MySwal = withReactContent(Swal)

  const [todo,setTodo] = useState([]);

  const inputRef = useRef();

  const handlAddToDo = () =>{
    if(inputRef.current.value===""){
      Swal.fire({
        // position: "top-end",
        icon: "warning",
        title: "Please Enter An Task",
        showConfirmButton: true,
        timer: 1500
      });
      return;
    }
    const text = inputRef.current.value;
    const newTodo = {completed : false,text};

    setTodo([...todo,newTodo]);
    inputRef.current.value="";
  }


  const handlDelete = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index,1);
    setTodo(newTodo);
  } 

 const handlDone = (index) =>{

    const newTodo = [...todo];
    newTodo[index].completed = !newTodo[index].completed;
    setTodo(newTodo);

 }

  return (
    <div className="App my-5 mx-5 py-5 px-5">
          
              <div className=" my-div">
                <div className="row d-flex justify-content-center">
                        <div className="col-md-3 text-break border border-dark border-2 p-3">
                              <h2>To DO List</h2>

                              <ul class="list-unstyled">

                                  {
                                    todo.map(({text,completed},index)=>{

                                        return (
                                              <div className='d-flex justify-content-between'>
                                                <li key={index} onClick={() => handlDone(index)} className={`cursor-pointer mx-3 ${completed ? "done":""}`}>{text}</li>

                                                <span className="cursor-pointer " onClick={() => handlDelete(index)}>❌</span>
                                              </div>

                                            );

                                    })
                                  }

                              </ul>
                              <input ref={inputRef} className='w-100 form-control border-primary'/>

                              <button onClick={handlAddToDo}className='d-block w-100 btn btn-danger
                               border-dark mt-2 text text-white '>Add</button>
                        </div>
                  </div>
              </div>
    </div>
  );
}

export default App;
