
import { Router } from 'express';

import User  from '../models/user';

const router = Router();

router.post('/register', async (req, res) => 
{
    try{
        const user = await create(req.body);
        return res.send({ user });
    }catch (err) {
        return res.status(400).send({ error: 'Registration failed' });

    }

});

export default (app => app.use('/auth', router));