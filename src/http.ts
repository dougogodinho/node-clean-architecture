import express from 'express'

const app = express()

app.get('/', (_, res) => res.send('hello world!'))
const port = process.env.API_PORT || 3333
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
