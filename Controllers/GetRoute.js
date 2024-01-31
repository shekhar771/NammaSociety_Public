// routes/GetRoute.js
// import verifyIdToken from '../Middlewares/VerifyToken.js';
// const express = require('express');

const getRouteHandler = (req, res) => {
  const user = req.user;
  // const user = req.user;
  res.json({ user });
  console.log('Success');
  res.json({ message: 'Received ID token successfully', user });
};

export default getRouteHandler;
