import mongoose from 'mongoose';

interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };

  interface userModelInterface extends mongoose.Model<any> {
    build(attr: IUser): any
  };

  interface UserDoc extends mongoose.Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
  
// Each user will have a firstName, lastName, email, password, and will default recieve a chordProgression array and MongoDB ID
const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true
        },

        lastName: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        password: {
            type: String,
            required: true,
            trim: true
        },

        chordProgressions: [
            {
                key: {
                    type: String,
                },
                style: {
                    type: String,
                }
            }
        ]
    });

userSchema.statics.build = (attr: IUser) => {
    return new User(attr)
}

const User = mongoose.model<UserDoc, userModelInterface>("User", userSchema)

export { User };