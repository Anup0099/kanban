import React from "react";
import "./Hero.css";
import Status from "./Status";
import User from "./User";
import Priority from "./Priority";
const Hero = ({data,type}) => {
  console.log(data)
  return (
    <div className="container">
      {type === 'status' && <Status data = {data} type = {type} />}
      {type === 'user' && <User data = {data} type = {type} />}
      {type === 'priority' && <Priority data = {data} type = {type} />}
    </div>
  );
};

export default Hero;
