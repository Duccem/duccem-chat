'use client'

import { useChat } from 'ai/react'

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat'
  });

  return (
    <div className='flex flex-col'>
      <div className='max-w-xl h-[500px] overflow-y-scroll no-scrollbar flex flex-col justify-end'>
      {messages.map((m, index) => (
          <div key={index}>
            <p>
              {m.role === 'user' ? 'User: ' : 'AI: '}
              {m.content}
            </p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <input placeholder='Pregunta lo que desees' value={input} onChange={handleInputChange} className='fixed w-full max-w-xl px-4 py-2 m-auto mb-8 border border-gray-400 text-sm rounded-full shadow-xl bottom-4'/>
      </form>
    </div>
  );
}