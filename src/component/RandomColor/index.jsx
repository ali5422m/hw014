// import { useState } from "react";

const GenerateRandomColor = () => {
//   const [color, setColor] = useState("");
//   const generateColor = () => {
//     setColor(Math.random().toString(16).substr(-6));
//   };
  return "#" + Math.random().toString(16).substr(-6);
};
export default GenerateRandomColor;
