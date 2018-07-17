import { Router } from 'express';
import peopleRouter from './people';
import classesRouter from './classes';
import authRouter from './auth';
import usersRouter from './users';
import blogListRouter from './blogList';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router.use('/auth', authRouter);

router.route('*')
    .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);

router.use('/classes', classesRouter);

/* router.use(tokenMiddleware);
router.use(isLoggedIn); */
 //used to block access to people & users route

router.use('/people', peopleRouter);
router.use('/users', usersRouter);
router.use('/blogList', blogListRouter);

export default router;