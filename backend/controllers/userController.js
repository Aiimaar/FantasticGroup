import models from '../models/index.js';
import bcrypt from 'bcrypt';

const { User } = models;


export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'user_name', 'email'],
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createUser = async (req, res) => {
  const { user_name, email, password } = req.body;

  if (!email || !password || !user_name) {
    return res.status(400).json({ error: "Email, password and username are required." });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      user_name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      id: user.id,
      user_name: user.user_name,
      email: user.email,
    });
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(500).json({ error: "Error creating user." });
  }
};


export const updateUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const { user_name, email } = req.body;

    if (user_name !== undefined && user_name.trim() === "") {
      return res.status(400).json({
        message: "user_name can't be empty.",
      });
    }
    if (email !== undefined && email.trim() === "") {
      return res.status(400).json({
        message: "email can't be empty.",
      });
    }

    // Obtener el usuario existente usando el userId del token
    const existingUser = await User.findByPk(userId);

    if (!existingUser) {
      return res.status(404).json({ message: "User not found." });
    }

    const updatedFields = {};
    if (user_name !== undefined) updatedFields.user_name = user_name;
    if (email !== undefined) updatedFields.email = email;

    const updatedUser = await existingUser.update(updatedFields);

    res.status(200).json({
      id: updatedUser.id,
      user_name: updatedUser.user_name,
      email: updatedUser.email,
    });
  } catch (error) {
    console.error("Error updating user:", error.message);
    res.status(500).json({ message: "Error updating user." });
  }
};


export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    await User.destroy({ where: { id } });

    res.status(200).json({ message: `User with id ${id} successfully deleted.` });
  } catch (error) {
    console.error("Error deleting user:", error.message);
    res.status(500).json({ error: "Error deleting user." });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;

  console.log("ID received:", id);

  try {
    const user = await User.findByPk(id, {
      attributes: ['id', 'user_name', 'email'],
    });

    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User not found:", user);
    
    res.json({
      id: user.id,
      user_name: user.user_name,
      email: user.email,
    });
  } catch (error) {
    console.error("Error getting user:", error);
    res.status(500).json({ error: error.message });
  }
};