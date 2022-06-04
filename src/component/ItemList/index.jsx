import React from 'react'
import "./../../index.css"
import { FaEdit } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import GenerateRandomColor from "./../RandomColor"
import { useState } from 'react';
import { useEffect } from 'react';

function ItemList({ text, id, editFunc, deleteFunc }) {
  const [color , setColor ] = useState("");
  useEffect(()=>{
    setColor(GenerateRandomColor());
  },[])
  return (
    <div
      className="d-flex justify-content-space-between rounded-1 p-1 "
      style={{ backgroundColor: color }}
    >
      <div className="d-flex">
        <span className="flex-wrap">{text}</span>
      </div>
      <div className="d-flex">
        <button
          onClick={() => deleteFunc(id)}
          style={{
            backgroundColor: "transparent",
            color: "white",
            border: "none",
            fontSize: "1.2rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <TiDeleteOutline />
        </button>
        <button
          onClick={() => editFunc(id, text)}
          style={{
            backgroundColor: "transparent",
            color: "white",
            border: "none",
            fontSize: "1.2rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FaEdit />
        </button>
      </div>
    </div>
  );
}

export default ItemList