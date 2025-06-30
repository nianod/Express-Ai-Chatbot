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
app.post('/chat', async (req, res) => {
    const { message } = req.body


//Demo    
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {role :"user", content: message }
            ]
        })
        const reply = completion.choices[0].message.content
        res.json({ reply })
    } catch (error) {
        console.error("OpenAI error", error)
        res.status(429).json({
            reply: "Am overloaded at the moment. I've hit maximum quota"
        })
    }

//     res.json({
//         // reply: "replying to" + message
//       model: "gpt-4o-mini",
//       store: true,
//       message: [
//         {"role": "user", "content" : "who are you?"}
//       ]    
// })

})
app.get('/', (req, res) => {
    res.send("Chatbot is Live")
})

app.listen(PORT, () => {console.log(`Server runnig on port: ${PORT}`)})
 