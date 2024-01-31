// import verifyIdToken from '../Middlewares/VerifyToken.js';
import axios from 'axios';
import fs from 'fs';

const postRouteHandler = async (req, res) => {
  const user = req.user;
  console.log(`Success: ${user}`);
  res.json({ message: 'Received ID token successfully', user });
};

export default postRouteHandler;
export const userInfo = (req, res) => {
  // Access user information from req.user
  const { uid, email } = req.user;

  // Access data from the request body
  const { userId, userName, password, userType, userAccessLevel } = req.body;

  // Perform any backend logic with the received data
  // ...
  console.log(req.body);
  // Send a response back
  res.json({
    message: 'Data received successfully',
    userData: {
      uid,
      password,
      userId,
      userName,
      userType,
      userAccessLevel,
      alo: 'hello there',
      uid,
    },
  });
};
