const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const { OpenAI } = require('openai')
const PORT = 3000

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})


app.use(cors())
app.use(express.json())

// Routes
app.post('/chat', (req, res) => {
    const { message } = req.body


//Demo    
    res.json({
      model: "gpt-4o-mini",
      store: true,
      messages: [
        {"role": "user", "content" : "who are you?"}
      ]    
})

})
app.get('/', (req, res) => {
    res.send("Chatbot is Live")
})

app.listen(PORT, () => {console.log(`Server runnig on port: ${PORT}`)})
 