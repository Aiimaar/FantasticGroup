import bcrypt from "bcrypt";
import models from '../models/index.js';

const { User } = models;

const getErrorDetails = (error) => {
  if (error instanceof Error) {
    return error.message || "Unknown error";
  }
  return JSON.stringify(error, null, 2) || "Unknown error";
};

export const authenticateBasic = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return next();
  }

  const base64Credentials = authHeader.split(" ")[1];
  const decodedCredentials = Buffer.from(base64Credentials, "base64").toString("ascii");
  const [email, password] = decodedCredentials.split(":");

  if (!email || !password) {
    return res.status(401).json({ message: "Wrong credentials" });
  }

  try {
    const user = await User.findOne({ where: { email: email.toLowerCase() } });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Wrong user" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Wrong password" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error en authenticateBasic:", getErrorDetails(error));
    res.status(500).json({ 
      message: "Logging in error", 
      error: getErrorDetails(error) 
    });
  }
  
};