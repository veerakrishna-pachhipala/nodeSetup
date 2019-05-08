import express from 'express';
import user from '../controllers/users.controller';
import auth from '../middlewares/auth';

const router = express.Router();

router
    .put('/',auth.shouldLoggedInasAdmin,user.add)
    .get("/:id",auth.shouldLoggedInasAdmin,user.getById)
    .get('/me/profile',auth.shouldLoggedIn,user.myprofile)
    .post('/', user.login)

export default router;