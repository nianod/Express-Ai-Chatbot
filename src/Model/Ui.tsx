import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa"

const Ui = () => {
  const [input, setInputValue] = useState("")
  const [messages, setMessages] = useState<{role: "user" | "bot", text :string}[]>([])

  const BASE_URL: string= import.meta.env.VITE_BACKEND_URL

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  if (input.trim() === "") return

  const messageToSend = input
  setInputValue("")

   
  setMessages((prev) => [
    ...prev,
    { role: "user", text: messageToSend },
    { role: "bot", text: "Thinking..." }
  ])

  try {
    //Send message to backend
    const res = await fetch(`${BASE_URL}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: messageToSend })
    })

    const data = await res.json()

    
    setMessages((prev) => {
      const updated = [...prev]
      updated[updated.length - 1] = { role: "bot", text: data.reply || "Heeeeeeeeeeey"}
      return updated
    })
  } catch (error) {
    console.error("Error:", error)
 
    setMessages((prev) => {
      const updated = [...prev]
      updated[updated.length - 1] = {
        role: "bot",
        text: "Hello there! how can I help you?"
      }
      return updated
    })
  }
}


  return (
    <div className="border w-fit bg-pink-700 rounded-2xl m-auto mt-10 p-5">
      <div className="max-w-md">
        <h1 className="font-bold text-white text-2xl bg-green-700 w-full mb-5 justify-center flex">
          Chat Bot
        </h1>
        <div className="h-69 overflow-y-auto flex flex-col-reverse">
          <div>
            {messages.map((message, index) => (
                <div key={index}
                className={`my-1  text-black text-xl ${message.role === "user" ? "p-2 rounded -xl bg-blue-500 text-right max-[20px]" :"p-2 rounded -x bg-white max-[20px] text-left"}`}
                >
                    <span>{message.text}</span>
                </div>
            ))}
          </div>  
        </div>
        <form
          className="flex items-center bg-red-600 border justify-between w-80 p-3 rounded-2xl mt-5   mb-2"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="focus:outline-none w-64  text-xl font-semibold text-white"
            value={input}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask anything..."
          />
          <button
            className="cursor-pointer ml-2 text-white"
            type="submit"
            aria-label="Send message"
            title="Send"
          >
            <FaLocationArrow />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Ui
