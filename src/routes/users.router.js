import express from 'express';
import user from '../controllers/users.controller';
const router =express.Router();
router
.post('/',user.add)
.get("/:id",user.getById);

export default router;