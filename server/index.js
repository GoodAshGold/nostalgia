// in our package.json the line that says "type": "module" allows us to use import for our packages

// * IMPORTING MODULES *

// Express is used to build the web server and handle routing in our application
import express from 'express';
// Makes the body of incoming requests availabel under req.body
import bodyParser from 'body-parser';
// Mongoose is an Object Data Modeling library for MongoDB and Node. Allowing us to use schemas.
import mongoose from 'mongoose';
// Cross-Origin Resource Sharing allows you to request data from one website to another
import cors from 'cors';

// Imports the postRoutes module which contains route definitions related to "posts". This handles various HTTP requests like GET, POST, PUT, and DELETE for posts.
import postRoutes from './routes/posts.js';

// CREATES AN INSTANCE OF EXPRESS
const app = express();

// * MIDDLEWARE *

// Limits the size of the body of JSON data to 30mb and extends the type of data that is accepted to include more than just strings, but also nested data, arrays, etc.
app.use(bodyParser.json({ limit: '30mb', extended: true }));
// Same as above Format: Data is formatted as a URL-encoded string, where key-value pairs are joined by &, and keys are separated from values by =.
// Example: name=John+Doe&age=30&city=New+York
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

// Adds the cors middleware, which enables the server to accept requests from different origins, allowing cross-origin HTTP requests.
app.use(cors());

// Mounts the postRoutes module to the /posts path. This means that any HTTP request to /posts (e.g., /posts, /posts/:id) will be handled by the functions defined in the postRoutes module.
// This HAS to come after cors middleware to work properly
app.use('/posts', postRoutes);

// * CONNECTING TO MONGODB AND STARTING THE SERVER *

// This connection string connects our application with our MongoDB Cluster aka our online cloud database
const CONNECTION_URL =
  'mongodb+srv://fostonashton:BTeTAEIOr5BMa0AL@cluster0.pufow.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// A variable that checks to see if the environment varible is set, and if not it defaults to 5001
const PORT = process.env.PORT || 5001;

// Connects to the MongoDB database using Mongoose, with options to ensure compatibility with the latest MongoDB features
// useNewUrlParser set to true opts in to the new, more flexible way of parsing the Mongoose connection string
// useUnifiedTopology is a newer better engine for discovering the server
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  // Once the database connection is successfully established, the server starts listening for incoming requests on the specified PORT`. A message is logged to the console confirming that the server is running.
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  // If there’s an error during the connection to the MongoDB database, it catches the error and logs the error message to the console.
  .catch((error) => console.log(error.message));
