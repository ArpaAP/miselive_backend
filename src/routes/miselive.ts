import { Router } from 'express';
import admin from 'firebase-admin';

const router = Router({ mergeParams: true });

router.post('/update', (req, res) => {
  console.log(req.body);
  const db = admin.firestore();

  db.collection('miselive')
    .add({
      value: req.body.value,
      createdAt: admin.firestore.Timestamp.now(),
    })
    .then(() => res.send('OK'))
    .catch((e) => {
      console.error(e);
      res.status(500).json(e);
    });
});

export default router;
