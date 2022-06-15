import { Request, Response } from 'express'
const express = require('express');
const app = express()
console.log('yooo')
const PORT = 5000
app.use(express.static('./public'))

app.all('*',(req: Request, res: Response) => {
    res.status(404).send('404 Not Found ¯\\_(ツ)_/¯');
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} `);
})