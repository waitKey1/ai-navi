'use client'

// 需要先安装 @mui/icons-material 依赖
// 运行: npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ChatIcon from '@mui/icons-material/Chat';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';

import React from 'react'
import { useRouter } from 'next/navigation';
type Props = {}



const Navibar = (props: Props) => {
const router = useRouter();


const handleClick =(text:string, position: 'top' | 'bottom' = 'top')=>{
if (window.location.pathname==='/'){
  setTimeout(()=>{
  const element = document.getElementById(text)
  if (element) {
    if (position === 'top') {
      element.scrollIntoView({behavior:'smooth', block: 'start'})
    } else {
      element.scrollIntoView({behavior:'smooth', block: 'end',inline:"nearest"})
    }
  }},300)

}else {
  router.push('/')
  setTimeout(()=>{
      const element = document.getElementById(text)
      if (element) {
        if (position === 'top') {
          element.scrollIntoView({behavior:'smooth', block: 'start'})
        } else {
          element.scrollIntoView({behavior:'smooth', block: 'end',inline:"nearest"})
        }
      }
  },300)
}


}

  return (
    <div className="w-60 h-screen bg-slate-50 flex flex-col items-center gap-4 fixed">
      {/* logo */}
      <div className="mt-6 w-3/4 h-full flex flex flex-col gap-2">
      
      <div className="flex items-center gap-2" onClick={()=>{handleClick('/')}}>
        <FormatColorTextIcon  className ="h-10 w-10 bg-white rounded-full p-1"/>
        <p className="text-2xl font-bold">AI导航站</p>
      </div>
      {/* 导航栏 */}
      <div className="flex flex-col items-center justify-center w-3/4 gap-6">

      <div className="flex w-full h-10 items-center gap-4 cursor-pointer mt-10" onClick={()=>{handleClick('AI热门工具')}}>
     <WhatshotIcon />
      <p className="tracking-widest">AI热门工具</p>
      </div>
     <div className="flex w-full h-10 items-center gap-4 cursor-pointer" onClick={()=>{handleClick('AI对话聊天')}}>
     <ChatIcon />
      <p className="tracking-widest">AI对话聊天</p>
      </div>
       <div className="flex w-full h-10 items-center gap-4 cursor-pointer" onClick={()=>{handleClick('AI文本工具')}}>
     <EditNoteIcon />
      <p className="tracking-widest">AI文本工具</p>
      </div>
            <div className="flex w-full h-10 items-center gap-4 cursor-pointer" onClick={()=>{handleClick('AI编程工具')}}>
     <CodeIcon />

      <p className="tracking-widest">AI编程工具</p>
      </div>
            <div className="flex w-full h-10 items-center gap-4 cursor-pointer" onClick={()=>{handleClick('AI绘画')}}>
     <BrushIcon />
      <p className="tracking-widest">AI绘画</p>
      </div>
            <div className="flex w-full h-10 items-center gap-4 cursor-pointer" onClick={()=>{handleClick('AI新闻')}}>
     <AnnouncementIcon />
      <p className="tracking-widest">AI新闻</p>
      </div>
            <div className="flex w-full h-10 items-center gap-4 cursor-pointer" onClick={()=>{handleClick('大模型API')}}>
     <DeviceHubIcon />
      <p className="tracking-widest">大模型API</p>
      </div>
            <div className="flex w-full h-10 items-center gap-4 cursor-pointer" onClick={()=>{handleClick('Agent工具')}}>
     <PsychologyAltIcon />
      <p className="tracking-widest">Agent工具</p>
      </div>


      </div>
      </div>
    </div>
  )
}

export default Navibar