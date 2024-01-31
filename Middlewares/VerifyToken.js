// middlewares/VerifyToken.js
import admin from 'firebase-admin';

const verifyIdToken = async (req, res, next) => {
  const idToken = req.header.idToken;

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    console.log(decodedToken);
    next();
  } catch (error) {
    console.error('Error verifying ID token:', error);
    res.status(401).json({ error: 'Unauthorized' });
  }
};

export default verifyIdToken;
