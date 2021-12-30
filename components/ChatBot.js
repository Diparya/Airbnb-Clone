import React from 'react'
import {
    ChatIcon
  } from "@heroicons/react/solid";
import { useRouter } from 'next/dist/client/router';
function ChatBot() {
    const router = useRouter()
    return (
        <div onClick={()=>router.push('/chat')} className="flex">
            <p className="semibold p-2">Ask</p>
            <ChatIcon className="h-12 bg-red-400 text-white rounded-full p-2 cursor-pointer"/>
        </div>
        
    )
}

export default ChatBot
