const express = require('express');
const cors = require('cors');
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vwpy9jc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const database = client.db("playPlexDB")
    const gamesCollection = database.collection("games")

    // create data using post 
    app.post('/games', async(req, res) =>{
        const game = req.body;
        const result = await gamesCollection.insertOne(game)
        res.send(result)
    })
    // update the data
    app.put('/games/:id', async(req, res) =>{
        const id = req.params.id;
        const game = req.body
        const filter = {_id: new ObjectId(id)}
        const options = {upsert: true}
        const updateGame ={
            $set:{
                name:game.name
            }
        }

        const result = await gamesCollection.updateOne(filter,updateGame,options)
        res.send(result)

    })
    // Get the all data
    app.get('/games', async(req, res) =>{
        const games = gamesCollection.find()
        const result = await games.toArray()
        res.send(result)
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) =>{
    res.send('Play Plex Server')
})

app.listen(port, () =>{
    console.log(`Server is running on port ${5000}`);
})