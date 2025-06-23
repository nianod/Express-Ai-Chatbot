import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa"

const Ui = () => {
  const [input, setInputValue] = useState("")
  const [messages, setMessages] = useState<{role: "user" | "bot", text :String}[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setInputValue("")
    
    if(input.trim() === "") return
    setMessages(prev => [...prev, {role: "user", text: input},{role: "bot", text: "Thinking.."}])

  }

  return (
    <div className="border w-fit bg-pink-700 rounded-2xl m-auto mt-20 p-5">
      <div className="max-w-md">
        <h1 className="font-bold text-white text-2xl bg-green-700 w-full justify-center flex">
          Chat Bot
        </h1>
        <div>
            {messages.map((message, index) => (
                <div key={index}
                className={`my-1 ${message.role === "user" ? "text-right" :"text-left"}`}
                >
                    <span>{message.text}</span>
                </div>
            ))}
        </div>
        <form
          className="flex items-center border justify-between w-80 p-3 rounded-2xl mt-30 mb-2"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="focus:outline-none w-64 bg-transparent text-white"
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
