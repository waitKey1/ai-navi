'use client'
import { useParams } from 'next/navigation'
import React from 'react'
import rawData from '@/data.json'
import Image from 'next/image'
import Link from 'next/link'



const Page = () => {
  const params=useParams()
  const card_id=params.card_id
interface Card {
  id: string;
  name: string;
  description: string;
  img: string;
  link: string;
}

interface Section {
  title: string;
  cards: Card[];
}

const cardData:Card | undefined = rawData.find((section: Section) => 

  section.cards.some((card: Card) => card.id === card_id)
)?.cards.find((card: Card) => card.id === card_id)
 

  return (
    <div className="w-full min-h-screen flex bg-white justify-center">
      <div className="flex flex-col w-7/8 mt-8">
      <div className="flex flex-row items-center justify-center gap-2">
        <Image src={`/img/${cardData?.img}`} alt={cardData?.name || ''} width={100} height={100} className="rounded-lg"/>

        
        
      <div className="flex flex-col justify-center items-start">

<p className="text-2xl font-bold">{cardData?.name}</p>
        <Link href={cardData?.link || ''} className="text-sm bg-blue-500 rounded-md text-white mt-3 p-2">链接直达</Link>


      </div>
      </div>
      {/* 描述 */}
      <div className='text-sm text-gray-500 mb-4'>{cardData?.description}</div>
{/* 广告位 */}
<div className="w-full h-96 bg-gray-200 border-1 border-gray-300 rounded-lg mt-4">

  <p className="text-2xl font-bold p-4">广告位</p>

</div>

      </div>
      

    </div>
    
  )
}

export default Page