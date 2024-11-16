import React from "react";
import { DirectMessage } from '@/types'
import { getDms } from '@/lib/fs'
import Image from 'next/image'

export const Dms: React.FC = async () => {

  const dms = await getDms()

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-5xl font-light text-[#ba867b] mb-16 text-center">Client Reviews</h2>
      <div className="grid gap-8 lg:grid-cols-3">
        {dms.map((messageArray, index) => (
          <DirectMessagesCard key={index} messages={messageArray} />
        ))}
      </div>
    </div>
  )
}

const DirectMessagesCard: React.FC<{ messages: DirectMessage[] }> = ({ messages }) => {
  return (
    <div className="relative flex flex-col justify-center gap-6 w-full bg-white rounded-lg shadow-2xl p-6 mb-8 border-solid border">
      <a
        href="https://www.instagram.com/stories/highlights/17868179959881165/"
        className="absolute top-4 right-4 cursor-pointer"
        title="See reviews on Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="text-gray-400 hover:opacity-60 transition-opacity animate-wiggle"
          height={32}
          width={32}
          src="/images/insta-black.jpg"
          alt="instagram-logo"
        />
      </a>
      {messages.map((message, index) => (
        <div key={index} className={`flex ${message.fromClient ? 'justify-start' : 'justify-end'}`}>
          <div
            className={`max-w-[70%] rounded-lg p-3 ${message.fromClient
              ? 'bg-[#ba867b] text-white'
              : 'bg-gray-200 text-gray-800'
              }`}
          >
            {message.messageText}
          </div>
        </div>
      ))}
    </div>
  )
}