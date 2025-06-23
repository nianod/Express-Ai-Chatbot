const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 3000


app.use(cors())
app.use(express.json())

// Routes
app.post('/chat', (req, res) => {
    const { message } = req.body


//Demo    
    res.json({
      reply: `you said: "${message}". Im just a simple bot`    
})

})
app.get('/', (req, res) => {
    res.send("Chatbot is Live")
})

app.listen(PORT, () => {console.log(`Server runnig on port: ${PORT}`)})