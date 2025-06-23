import { useState } from "react"
import { FaLocationArrow } from "react-icons/fa"

const Ui = () => {

    const [input, setInputValue] = useState("")

  return (
    <div className="max-w-md">
      <h1 className="font-bold text-black text-2xl bg-green-700 justify-center flex">Chat Bot</h1>
      <div className="flex items-center border justify-between w-90 p-3 rounded-2xl">
        <input type="text" 
        className="focus:outline-none w-70"
          value={input}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask anything..."
        />
        <button className="cursor-pointer"
        type="submit"
        >
            <FaLocationArrow/></button>
      </div>
    </div>
  )
}

export default Ui
