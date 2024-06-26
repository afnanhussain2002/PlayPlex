const express = require("express");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser')
require("dotenv").config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors({
  origin:['http://localhost:5173'],
  credentials:true
}));
app.use(express.json());
app.use(cookieParser())

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vwpy9jc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// my middle wares

const logger = async(req,res, next) =>{
  console.log('called:', req.host, req.originalUrl);
  next()
}

const verifyToken = async(req,res,next) =>{
  const token = req.cookies?.token
  console.log('middleware token', token);
  if (!token) {
    return res.status(401).send({message:'forbidden access'})
  }
  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(error, decoded) =>{
    if (error) {
      return res.status(401).send({message:'Unauthorized'})
    }
    console.log('Value in the token', decoded);
    req.user = decoded
    next()
  })
}
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const database = client.db("playPlexDB");
    const gamesCollection = database.collection("games");
    const cartCollection = database.collection("cart");

    // auth related api
    app.post('/jwt', logger, async(req,res) =>{
      const user = req.body;
      console.log(user);
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn:'1h'})

      res
      .cookie('token', token, {
        httpOnly:true,
        secure:false
      })
      .send({success:true})
    })

    // remove token after logout
    app.post('/logout', async(req,res) =>{
      const user =req.body;
      res.clearCookie('token',{maxAge:0}).send({success:true})
    })

    // service related api

    // create data using post
    app.post("/games", async (req, res) => {
      const game = req.body;
      const result = await gamesCollection.insertOne(game);
      res.send(result);
    });
    // update a single data
    app.put("/games/:id", async (req, res) => {
      const id = req.params.id;
      const game = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateGame = {
        $set: {
          productName: game.productName,
          productPrice: game.productPrice,
          category: game.category,
          productPhoto: game.productPhoto,
          productPhoto2: game.productPhoto2,
          productPhoto3: game.productPhoto3,
          productPhoto4: game.productPhoto4,
          productShortDes: game.productShortDes,
          gameTrailer: game.gameTrailer,
          description: game.description,
        },
      };

      const result = await gamesCollection.updateOne(
        filter,
        updateGame,
        options
      );
      res.send(result);
    });
    // Delete a single data
    app.delete("/games/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await gamesCollection.deleteOne(query);
      res.send(result);
    });
    // Get a single data
    app.get("/games/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const game = await gamesCollection.findOne(query);
      res.send(game);
    });
    // Get all data of single user
    app.get("/games/profile/:email", logger, verifyToken, async (req, res) => {
      const email = req.params.email;
      const query = { uploaderEmail: email };
      const game = await gamesCollection.find(query).toArray();
      res.send(game);
    });
    // Get the all data
    app.get("/games", async (req, res) => {
      const games = gamesCollection.find();
      const result = await games.toArray();
      res.send(result);
    });

    // add to cart collection

    // insert data in cart
    app.post("/cart", async (req, res) => {
      const cart = req.body;
      const result = await cartCollection.insertOne(cart);
      res.send(result);
    });

    // delete cart item
    app.delete("/cart/:id",  async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    });
    // read all cart page data
    app.get("/cart/:email", logger, verifyToken, async (req, res) => {
      const email = req.params.email;
      console.log('user in the valid token', req.user);
      if (req.params.email !== req.user.email) {
        return res.status(403).send({message:'forbidden access'})
      }
      const query = { userEmail: email };
      const cartFilter = await cartCollection.find(query).toArray();
      res.send(cartFilter);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Play Plex Server");
});

app.listen(port, () => {
  console.log(`Server is running on port ${5000}`);
});
