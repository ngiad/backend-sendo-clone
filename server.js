import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import path from "path"
import { fileURLToPath } from 'url'
import ProductRouter from "./src/Router/Product.js"
import FilterRouter from "./src/Router/Filter.js"
import { errorHandler } from "./src/Middlewares/errormiddleware.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

const PORT = 5000
const URL = "mongodb+srv://Ngiad:Ngiad001@cluster0.2ts8aja.mongodb.net"

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())


app.use("/api/v1/product/",ProductRouter)
app.use("/api/v1/filter/",FilterRouter)

app.use('/image', express.static(path.join(__dirname, 'image')))

app.get("/" ,(req,res)=>{
    var options = {
        root: path.join(__dirname)
    };
    res.sendFile("./image/'s facebook 2023-1-7 story.mp4",options)
})

app.use(errorHandler)

mongoose.connect(URL).then(() => {
    app.listen(PORT,() => {
        console.log("server is running on PORT ",PORT)
    })
})
.catch(() => {
    console.log("server not running")
})


