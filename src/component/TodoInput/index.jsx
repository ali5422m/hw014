import React from "react";
import { useEffect, useState } from "react";
import "./../../index.css";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ItemList from "./../ItemList";
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { todoinputstyle } from "./todoinput.style.js";
import axios from "axios";




function TodoInput() {
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

   function addTodo() {
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
      <button onClick={updateFunc} style={todoinputstyle.button1}>
        {"update"}
      </button>
    ) : (
      <button onClick={addTodo} style={todoinputstyle.button1}>
        {"add"}
      </button>
    ); 
  }




  return (
    <>
      <Box sx={todoinputstyle.form1}>
        <Box sx={todoinputstyle.header}>
          <Typography>Feelin' productive today?</Typography>
        </Box>
        <Box sx={todoinputstyle.todoinput}>
          <Box sx={todoinputstyle.todoinput2}>
            <input
              value={todosInput}
              onChange={(e) => changeInputValue(e.target.value)}
              // value={todosInput}
              // onChange={(e)=>changeInputValue(e.target.value)}
              type="text"
              style={todoinputstyle.w75}
            />
            {checkBtns()}
          </Box>
        </Box>

        <Box style={todoinputstyle.item}>
          {todosList.map((todo) => (
            <ItemList
              text={todo.title}
              editFunc={setEditedTodoIdFunc}
              deleteFunc={deleteFunc}
              id={todo.id}
              key={todo.id}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default TodoInput;
