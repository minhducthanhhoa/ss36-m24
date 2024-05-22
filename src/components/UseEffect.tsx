import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count,setCount] = useState<string>("");
    const [name,setName] = useState<string>("");
    const handleClick = () => {
        setCount(count + 1);
    }
    useEffect(() =>{
        console.log("useEffect được gọi");
    },[name])
  return (
    <div>
        {/*
            useEffect là 1 hook 
            sinh ra để giải quyết 1 số vấn đề side effect (tác động phụ bên cạnh tác vụ chính)
            3 cú pháp useEffect 
            - callback function 
                khi component được mang vào dom thì useEffect được gọi
                khi mỗi lần re-render thì useEffect được gọi
            - nhận vào 1 tham số là callback function và tham số thứ 2 là 1 mảng rỗng 
                khi component được mang vào dom thì useEffect được gọi 
                khi mỗi lần component re-render thì useEffect ko được gọi 
            - nhận vào 1 tham số là câlback function và tham số thứ 2 là 1 mảng(sự phụ thuộc)
                useEffect được gọi thì component được mount vào dom
                khi dependency 
         */}
        <p>Giá trị biến count: {count}</p>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}
