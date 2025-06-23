const express = require('express')
const app = express()
const PORT = 3000

app.get('/api', (req, res) => {
    res.json({"users": [useInsertionEffect, PiUserSwitchDuotone, userThree]})
})

app.listen(PORT, () => {console.log("Server runnig")})