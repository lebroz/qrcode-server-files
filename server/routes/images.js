import express from 'express'
import fs from 'fs'
import path from 'path'

const router = express.Router()

router.get('/', (req, res) => {
    const dir = path.join(__dirname, '/../public')
    const imageFiles = fs.readdirSync(dir)

    res.status(200).json(Object.assign({}, imageFiles))
})

router.get('/:id', (req, res) => {
    res.download(__dirname + '/../public/' + req.params.id, 'image', err => {
        if (err) {
            throw err
        } else {
            console.log(`console: client is downloading ${req.params.id}`)
        }
    })
})

export default router
