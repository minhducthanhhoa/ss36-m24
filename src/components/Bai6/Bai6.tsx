import React, { useEffect } from 'react'

export default function Bai6() {
    useEffect(() =>{
        const handleScroll = () =>{
            const scrollPosition = window.scrollY;
            document.title = `Vị trí cuộn: ${scrollPosition}`;
        }
        window.addEventListener("scroll",handleScroll);
        return () =>{
            window.removeEventListener("scroll", handleScroll);
        }
    },[])
  return (
    <div>
        <h1>Bài 6</h1>
        <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `.repeat(50)}</p>
    </div>
  )
}
