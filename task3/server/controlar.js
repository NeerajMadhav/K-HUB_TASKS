const User = require('./models/user'); // Make sure to update the path to your user model

exports.signup = async (req, res) => {
  try {
    // Extract signup data from request body
    const { name, email, password } = req.body;

    // Create a new user
    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred during signup' });
  }
};

exports.signin = async (req, res) => {
  try {
    // Extract signin data from request body
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    if (user && user.password === password) {
      res.status(200).json({ message: 'Signin successful' });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred during signin' });
  }
};
