import React from 'react'
import "./../../index.css"
import { FaEdit } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import GenerateRandomColor from "./../RandomColor"
import { useState } from 'react';
import { useEffect } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { styles } from './itemlist.style.js';



function ItemList({ text, id, editFunc, deleteFunc }) {
  const [color , setColor ] = useState("");
  useEffect(()=>{
    setColor(GenerateRandomColor());
  },[])
  return (
    <Box sx ={styles.header} style={{backgroundColor:color}} >
      <Box sx={{ display: "flex" }}>
        <Typography>{text}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <button onClick={() => deleteFunc(id)} style={styles.deleteBtn}>
          <TiDeleteOutline />
        </button>
        <button onClick={() => editFunc(id, text)} 
        style={styles.editeBtn}>
          <FaEdit />
        </button>
      </Box>
    </Box>
  );
}




export default ItemList