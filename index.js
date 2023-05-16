const express = require('express')
require('dotenv').config()
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000




// middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Ema john server is running!')
})


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
