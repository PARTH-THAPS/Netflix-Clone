import express from 'express';
import { Register } from '../controllers/user';

const router= express.router();

router.route("/register").post(Register);

export default router;


