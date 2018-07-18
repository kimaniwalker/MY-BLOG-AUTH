import { Router } from 'express';
import Table from '../table';
import authRouter from './auth';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();
router.use('/auth', authRouter);

router.route('*')
    .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);

let blogs = new Table('blogs');

router.get('/', (req, res) => {
    blogs.getAll()
        .then(blogs => {
            res.json(blogs);
        })
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    blogs.getOne(id)
        .then(blogs => {
            res.json(blogs);
        })

})


router.use(tokenMiddleware);
router.use(isLoggedIn);

router.post('/', (req, res) => {
    let blog = req.body;

    blogs.insert(blog)
        .then(id => {
            res.json(id);
        })
})

export default router;