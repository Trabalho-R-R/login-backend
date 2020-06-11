import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema(
{
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password:{
        type: String,
        require:true,
        select:false,
    },
    createdata:{
            type: Date,
            default: Date.now,
    },
});
UserSchema.pre('save', async function(next) 
    {
        const hash = await bcrypt.hash(this.password, 10);
        this.password = hash;
        next();
    }
    ); 
const User = model('User', UserSchema);
export default User;