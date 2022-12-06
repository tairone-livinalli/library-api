import { Router } from 'express';

import BookingRoutes from './BookingsRoutes';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send({ message: 'Alive!' });
});

router.use(BookingRoutes);

export default router;
