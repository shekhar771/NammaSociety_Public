import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import admin from 'firebase-admin';
import serviceAccount from './config/serviceAccountKey.json' assert { type: 'json' };

import getRouteHandler from './Controllers/GetRoute.js';
import verifyIdToken from './Middlewares/VerifyToken.js';
import postRouteHandler, { userInfo } from './Controllers/PostRoutes.js';
import verifyFirebaseToken, {
  getLastDecodedToken,
} from './Middlewares/VerifyToken2.js';
import addSociety from './Controllers/Society.js';
import societyRouter from './Routes/Society.js';
// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    'https://nammasociety-36224-default-rtdb.asia-southeast1.firebasedatabase.app/',
});
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8080;
//routes
app.use('/Society', societyRouter);

//  protected routes
app.post('/', verifyIdToken, postRouteHandler);
//testing
app.get('/', (req, res) => {
  const lastToken = getLastDecodedToken();
  res.json({ lastToken });
});

app.post('/userInfo', verifyFirebaseToken, userInfo);
// app.post('/Society/Create', verifyFirebaseToken, addSociety);
// 8
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
