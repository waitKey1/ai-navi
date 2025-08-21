'use client'
import Image from "next/image";
import { useState } from "react";

// 导入数据
import rawData from '../data.json'
import Link from "next/link";
// 定义section的接口
interface Section {
  title:string
  cards:Card[]
}

interface Card{
  id:string
    name:string
    description:string
    img:string
    link:string
}


  

export default function Home() {
  const [search,setSearch]=useState('')
  const [data,setData]=useState(rawData)

  // 搜搜模块
  const handleSearch=()=>{
    const searchData = []
    for (const section of rawData){
      if(!section.cards.some((card:Card)=> card.name.toLowerCase().includes(search.toLowerCase()))){
        continue
      }
      const filterCards=section.cards.filter((card:Card)=> card.name.toLowerCase().includes(search.toLowerCase()))
      searchData.push({
        title:section.title,
        cards:filterCards
      })
      
    }
setData(searchData)
  }
  
  return (
    <div className="w-full min-h-screen flex flex-col ml-4">
      {/* 主要内容区域 */}
      <div className="flex-1 ml-4">
        {/* 搜索栏 */}
        <div className="w-full h-64 flex flex-col justify-center items-center">
          <p>搜索本站内容</p>
          <div className="flex flex-row justify-center items-center w-3/4 mt-2 gap-2">
            <input type="text" name="" id="" className="w-1/2 h-10 rouned-md border-2 border-gray-300 p-2"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />
            <button className="h-10 rounded-md bg-blue-500 px-4 text-white"
              onClick={handleSearch}>
              搜索
            </button>
          </div>
        </div>

        {/* 热门工具 */}
        <div>
          {
            data.map((section:Section)=>(
              <div
              className="w-full flex flex-col"
              id={section.title}
              key={section.title}
              >
                <p className="text-2xl font-bold mt-4 ml-4">{section.title}</p>
                <div className="flex flex-row flex-wrap w-full">
                  {/* 一张卡片 */}
                  {
   section.cards.map((card:Card)=>(
<Link
href={`/card/${card.id}`}
className="h-32 w-full sm:1/2 lg:w-1/5 p-4"
key={card.id}
>
    <div className="h-full w-full bg-slate-50 rounded-lg flex flex-row flex-wrap items-center">
      <div className="w-2/5 flex items-center justify-center">
      <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/img/${card.img}`} alt={card.name} width={60} height={60} className="rounded-lg"></Image>
     
    
      </div>
       <div className="flex flex-col w-3/5 p-2 ">
        <p className="text-xs lg:text-lg font-bold line-clamp-1">{card.name}</p>
            <p className="text-xs lg:text-lg text-gray-500 line-clamp-2">{card.description}</p>
       </div>
     </div>
</Link>))
                  }
                 
               
                </div>
              </div>
            ))
          }
        </div>
      </div>
      
      {/* footer - 固定在页面底部 */}
      <footer className="w-full bg-white border-t border-gray-200 py-4 ">
        <div className="flex flex-col items-center justify-center">
          <p className="text-slate-500">
            Copyright - 2025 本站所有内容均为AI生成
          </p>
        </div>
      </footer>
    </div>
  );
}
 