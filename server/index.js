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
    // update a single data
    app.put('/games/:id', async(req, res) =>{
        const id = req.params.id;
        const game = req.body
        const filter = {_id: new ObjectId(id)}
        const options = {upsert: true}
        const updateGame ={
            $set:{
                productName:game.productName,
                productPrice:game.productPrice,
                category:game.category,
                productPhoto:game.productPhoto,
                productPhoto2:game.productPhoto2,
                productPhoto3:game.productPhoto3,
                productPhoto4:game.productPhoto4,
                productShortDes:game.productShortDes,
                gameTrailer:game.gameTrailer,
                description:game.description

            }
        }

        const result = await gamesCollection.updateOne(filter,updateGame,options)
        res.send(result)

    })
    // Delete a single data
    app.delete('/games/:id', async(req, res) =>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        const result = await gamesCollection.deleteOne(query)
        res.send(result)
    })
    // Get a single data
    app.get('/games/:id', async(req, res) =>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        const game = await gamesCollection.findOne(query)
        res.send(game)
    })
    // Get all data of single user
    app.get('/games/:email', async(req, res) =>{
      const email = req.params.email;
        console.log(email);
        const query = {uploaderEmail: email}
        console.log(query);
        const game = await gamesCollection.find(query).toArray()
        console.log(game);
        res.send(game)
    })
    // Get all data from category
    app.get('/games/:category', async(req, res) =>{
      const category = req.params.category;
      const query = {category: category};
      const result = await gamesCollection.find(query).toArray
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