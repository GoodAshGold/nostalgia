// imports the collection from the database
import PostMessage from '../models/postMessage.js';

// async controller function that handles GET requests to fetch all posts from the database.
export const getPosts = async (req, res) => {
  try {
    // This method queries the database and returns all documents (posts) in the PostMessage collection
    // 'await' makes the code wait until the find method completes, meaning it resolves with the list of posts
    // postMessages will be an array of objects, each representing a document (post) stored in the MongoDB database.
    const postMessages = await PostMessage.find();
    // Sets the HTTP response status code to 200, which means "OK." and/then sends the postMessages array as a JSON response to the client.
    res.status(200).json(postMessages);
  } catch (error) {
    // If an error occurs while fetching the posts, the server responds with a status code of 404 (Not Found) and sends a JSON object containing the error message
    res.status(404).json({ message: error.message });
  }
};

// async controller function that handles POST requests to create a new post
export const createPost = async (req, res) => {
  // Contains the data sent by the client in the body of the POST request, which represents the new post as an object containing the data for the new post (e.g., title, content, author, etc.)
  const post = req.body;

  // creates a new instance of the PostMessage model using the data from post
  // newPost is now a Mongoose document object that represents a single post ready to be saved to the database.
  const newPost = new PostMessage(post);

  try {
    // newPost.save(): This method saves the new post to the MongoDB database.
    // await: Ensures the code waits for the save operation to complete before continuing.
    await newPost.save();

    //  Sets HTTP response status code to 201, then sends the newly created post as JSON response to the client
    res.status(201).json(newPost);
  } catch (error) {
    //  If an error occurs during the saving process, the server responds with a status code of 409 (Conflict) and sends a JSON object containing the error message.
    res.status(409).json({ message: error.message });
  }
  //  somewhat redundant because the response has already been sent with res.status(201).json(newPost);
  res.send('Post Creation');
};
