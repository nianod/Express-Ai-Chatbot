import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa"

const Ui = () => {
  const [input, setInputValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim() === "")
     return
    alert(`You asked: ${input}`)
    setInputValue("")

  }

  return (
    <div className="border w-fit bg-pink-700 rounded-2xl m-auto mt-20 p-5">
      <div className="max-w-md">
        <h1 className="font-bold text-white text-2xl bg-green-700 w-full justify-center flex">
          Chat Bot
        </h1>
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
