import React, { useState, useEffect } from "react";
import { Card ,Button} from "antd";

export default function  Buttons()  {
  const  [buttonText, setButtonText] =  useState("Click me,   please");
  useEffect(()=>{
      setButtonText('通过useEffect改变的值');
  })
  function handleClick()  {
    return setButtonText("Thanks, been clicked!");
  }

  return  (
      <Card title="React Hooks 学习">
            <Button  type="danger" onClick={handleClick}>{buttonText}</Button>;
      </Card>
  )
  
  
}