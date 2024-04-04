import { app } from './settings'

const port = process.env.PORT || 3003

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

import dotenv from 'dotenv'
dotenv.config()
/*
const mongoURI = process.env.MONGO_URL || 'mongodb://0.0.0.0:27017'

console.log(process.env.MONGO_URL)
//output - mongodb+srv://a:a@ava.epzello.mongodb.net/?retryWrites=true&w=majority

 */
