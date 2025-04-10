import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import models from '../models/index.js';

const { User } = models;

export const register = async (req, res) => {
  const { user_name, email, password } = req.body;

  if (!user_name || !email || !password) {
    return res.status(400).json({ message: 'User name, email, and password are required.' });
  }

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already in use.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      user_name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

  export const login = async (req, res) => {
    const authHeader = req.headers.authorization;
  
    if (!authHeader || !authHeader.startsWith("Basic ")) {
      return res.status(401).json({ message: "No authorization header or wrong " });
    }
  
    const base64Credentials = authHeader.split(" ")[1];
    const decodedCredentials = Buffer.from(base64Credentials, "base64").toString("ascii");
    const [email, password] = decodedCredentials.split(":");
  
    if (!email || !password) {
      return res.status(400).json({ message: "Missing credentials" });
    }
  
    try {
      const user = await User.findOne({ where: { email } });
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Wrong credentials" });
      }

      const token = jwt.sign({ id: user.id, user_name: user.username }, process.env.JWT_SECRET, { expiresIn: "24h" });
      res.json({ token, userId: user.id, user_name: user.user_name });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Server error" });
    }
  };