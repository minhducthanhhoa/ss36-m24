import React, { useState } from 'react'
interface Tab{
    name:string;
    label:string;
}

export default function Bai3() {
    const tabs: Tab[] = [
        {
            name:"home",
            label:"Trang chủ"
        },
        {
            name:"products",
            label:"Sản phẩm"
        },
        {
            name:"about",
            label:"Giới thiệu"
        },
        {
            name:"contact",
            label:"Liên hệ"
        },
    ]
    const [activeTab,setActiveTab] = useState<string>("home");
    const handleTabClick = (tabName:string) =>{
        setActiveTab(tabName);
    }
  return (
    <div>
        <h1>Bài 3</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', backgroundColor: '#f0f0f0' }}>
      {tabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => handleTabClick(tab.name)}
          style={{
            padding: '10px 20px',
            cursor: 'pointer',
            backgroundColor: activeTab === tab.name ? '#ccc' : 'transparent',
            border: 'none',
            outline: 'none',
            fontWeight: activeTab === tab.name ? 'bold' : 'normal'
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
    </div>
  )
}
