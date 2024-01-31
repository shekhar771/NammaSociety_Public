import admin from 'firebase-admin';
let lastDecodedToken = null; // Variable to store the last decoded token

const verifyFirebaseToken = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  lastDecodedToken = authorization;

  const idToken = authorization.split('Bearer ')[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Error verifying Firebase Auth token:', error);
    return res.status(401).json({ error: 'Unauthorized' });
  }
};
export default verifyFirebaseToken;

//toaccess token testing purpose
export const getLastDecodedToken = () => {
  return lastDecodedToken;
};
