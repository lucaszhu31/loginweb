const express = require('express');
const app = express();
const PORT = 3000;


app.set('view engine', 'ejs'); // Set EJS as the templating engine

app.use(express.static('public')); // Serve static files from the 'public' directory
app.use(express.urlencoded({ extended: true })); // middleware that allows access to the body of the request (req.body.username)


const loginRouter = require('./routes/login'); // Importing the login router
const signupRouter = require('./routes/signup'); // Importing the signup router

app.use('/login', loginRouter); // Mounting the login router at the '/login' path
app.use('/signup', signupRouter); // Mounting the signup router at the '/signup' path




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})