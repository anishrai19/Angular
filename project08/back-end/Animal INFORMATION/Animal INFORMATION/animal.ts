import express from "express"
import { Schema, model, connect } from 'mongoose';
import cors from "cors"

class animalSchema extends Schema {
    constructor() {
        super({
            name: { type: String, required: true },
            info:{type:String,required:true},
            imageUrl:{type:String,required:true}
            },
         {
            timestamps: true,
        });
    }
}

const animalModel = model('animal', new animalSchema());

const user_Connection = async () => {
  try {
    const MONGO_CONNECTION_USER = "mongodb://localhost:27017/Animal"
    await connect(MONGO_CONNECTION_USER!);
    console.log("Mongo Connected")
  }
  catch (e) {
    throw { message: "Could Not connect to mongo db" };
  }
}

const startServer = async () => {
    try {
        const app = express();
        await user_Connection();
        const PORT = 5000;
        app.use(cors())
        app.listen(PORT)
        {
            console.log(`App Started on port ${PORT}`);
        }
        app.get('/display',async (req, res) => {
            const result = await getall()
            res.send(result)
        })
    }
    catch (e) {
        console.log(e)
        console.log('Failed to start server');
    }
}

startServer()

const getall = () => animalModel.find()

