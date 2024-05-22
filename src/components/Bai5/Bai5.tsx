import React, { useEffect, useState } from 'react'

export default function Bai5() {
    const [time,setTime] = useState(new Date());

    useEffect(() =>{
        const timeId = setInterval(() =>{
            setTime(new Date());
        },1000);
        return () => clearInterval(timeId);
    },[]);
    const formattedTime = time.toLocaleTimeString();
  return (
    <div>
        <h1>bài 5</h1>
        <h3>Thời gian hiện tại: {formattedTime}</h3>
    </div>
  )
}
