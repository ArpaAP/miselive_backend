import { Router } from 'express';
import miselive from './miselive';

const router = Router({ mergeParams: true });

router.use('/miselive', miselive);

export default router;
