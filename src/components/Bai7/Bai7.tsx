import React, { useEffect, useRef, useState } from 'react'

export default function Bai7() {
        const [count, setCount] = useState(0);
        const prevCountRef = useRef<number | null>(null);

        useEffect(() => {
            prevCountRef.current = count;
        }, [count]);

        const handleIncrement = () => {
            setCount(count + 1);
        };

  return (
    <div>
        <h1>Bài7</h1>
        <p>Giá trị trước: {prevCountRef.current ?? ''}</p>
        <p>Giá trị hiện tại: {count}</p>
        <button onClick={handleIncrement}>Tăng</button>
    </div>
  )
}
