
import { Router } from 'express';

import  User   from '../models/user';

const router = Router();

router.post('/register', async (req, res) => 
{
    //const { email } = req.bory
    try{
    //if (await User.findOne({ email }))
      //  return res.send(400).send({error: 'email já cadastrado'})

        const user = await User.Create(req.body);

        user.password = undefined;

        return res.send({ user });
    }catch (err) {
        return res.status(400).send({ error: 'Registration failed' });}
});

export default (app => app.use('/auth', router));