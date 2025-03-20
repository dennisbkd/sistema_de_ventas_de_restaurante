import express from 'express'
import { PORT } from './config/config.js'

const app = express()

app.get('/', (req, res) => {
  res.send('connected')
})

app.listen(PORT, () => {
  console.log(`listen on port:${PORT}`)
})
