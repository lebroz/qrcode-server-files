import express from 'express'
import path from 'path'
import images from './routes/images'

const app = express()
const PORT = 3000

app.use(express.json())

app.use(express.static(path.join(__dirname + '/public')))

app.use('/images', images)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
