import React from "react";
import { useEffect, useState } from "react";
import "./todoinput.style.css";
import "./../../index.css";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ItemList from "./../ItemList";
import useGenerateRandomColor from "./../RandomColor";



function TodoInput() {
  // const { color, generateColor } = useGenerateRandomColor();
  // const [color, generateColor] = useState(false)

  // const [color , setColor] = useState("#000");
  // const getRgb = ()=> Math.floor(Math.random()*256);
  // const rgbToHex = (r, g ,b)=>
  // "#"+ 
  // [r , g, b]
  // .map(x=>{
  //   const hex = x.toString(16);
  //   return hex.length === 1 ? "0" + hex : hex;
  // })
  // .join("");

  // const handleGenerate = () =>{
  //   const color ={
  //     r : getRgb(),
  //     g:getRgb(),
  //     b:getRgb(),
  //   };
  //   setColor(rgbToHex(color.r,color.g,color.b));
  // }

  const [todosList, setTodosList] = useState([]);
  // const [todosInput, setTodosInput] = useState({
  //   title: "",

  //   id: "",
  // });
  const [todosInput,setTodosInput] = useState("");
  const [isEditing,setIsEditing] = useState(false);
  const [editedTodoId,setEditedTodoId] = useState(null)

  function changeInputValue(value) {
    setTodosInput(value);
  }

   function addTodo(e) {
     e.preventDefault();
     if (!todosInput) return toast.error("input is empty");
     const newTodo = { title: todosInput, id: v4() };
     const originalTodos = [...todosList];
     originalTodos.push(newTodo);
     setTodosList(originalTodos);
     setTodosInput("");
   }

  function setEditedTodoIdFunc(id, title) {
    console.log("click")
    setEditedTodoId(id);
    setTodosInput(title);
    setIsEditing(true);
  }

    function updateFunc(e) {
      e.preventDefault()
      const originalTodos = [...todosList];
      const index = originalTodos.findIndex((item) => item.id === editedTodoId);
      originalTodos[index].title = todosInput;
      setTodosList(originalTodos);
      setTodosInput("");
      setIsEditing(false);
    }

    function deleteFunc(id) {
      const originalTodos = [...todosList];
      const newTodos = originalTodos.filter((item) => item.id !== id);
      setTodosList(newTodos);
    }

   

  // const handleCreateNewTodo = (e) => {
  //   e.preventDefault();
  //   if (!todosInput.title) return toast.error("input is empty");
  //   const newTodo = { ...todosInput, id: v4() };
  //   // setTodosInput({...todosInput, id : v4()});
  //   console.log(newTodo);
  //   setTodosList([...todosList, newTodo]);
  //   setTodosInput({
  //     title: "",
  //   });
  // };

  function checkBtns() {
    return isEditing ? (
      <button onClick={updateFunc} className="button1">
        {"update"}
      </button>
    ) : (
      <button onClick={addTodo} className="button1">
        {"add"}
      </button>
    ); 
  }
//  function generateColor1() {
//    var letters = "0123456789ABCDEF".split("");
//    var color = "#";
//    for (var i = 0; i < 6; i++) {
//      color += letters[Math.floor(Math.random() * 16)];
//    }
//    return color;
//  }


  // useEffect(()=>{
   

  // },[color])



  return (
    <>
      <div className="form1">
        <div className="header">
          <h4>Feelin' productive today?</h4>
        </div>
        <div className="todoinput pt-1 flex-column ">
          <div className="todoinput  ">
            <input
              value={todosInput}
              onChange={(e) => changeInputValue(e.target.value)}
              // value={todosInput}
              // onChange={(e)=>changeInputValue(e.target.value)}
              type="text"
              className="w-75"
            />
            {/* <button onClick={generateColor} type="submit">
            add
          </button> */}
            {checkBtns()}
          </div>
        </div>
        <div className="color-white  pl-1rem pr-1rem d-flex flex-column pt-2rem rounded-1">
          {todosList.map((todo) => (
            <ItemList
              style={{ paddingTop: "pt-5rem" }}
              text={todo.title}
              editFunc={setEditedTodoIdFunc}
              deleteFunc={deleteFunc}
              id={todo.id}
              key={todo.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default TodoInput;
