import React, { useEffect, useState } from 'react'

export default function Bai1() {
    const [title,setTitle] = useState<string>("localhost:5173");
    useEffect(()=>{
        document.title = title;
    },[title])
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setTitle(e.target.value);
    }
  return (
    <div>
        <h1>Bài 1</h1>
        <input 
            type="text"
            placeholder="Nhập tiêu đề" 
            value={title === "localhost:5173" ? "" : title}
            onChange={handleChange}
        />
    </div>
  )
}
