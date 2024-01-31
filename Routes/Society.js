import express from 'express';
import verifyFirebaseToken from '../Middlewares/VerifyToken2.js';
import addSociety, {
  searchSociety,
  getSocietyById,
  updateSociety,
  getallSociety,
} from '../Controllers/Society.js';

const router = express.Router();
router.get('/', getallSociety);
router.post('/search/:userCategory', verifyFirebaseToken, searchSociety);
router.post('/Create/', verifyFirebaseToken, addSociety);
router.get('/:societyId', getSocietyById);
router.get('/', getallSociety);

// Update society details
router.put('/:societyId', updateSociety);

export default router;
