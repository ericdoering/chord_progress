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
            unique: true,
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

User.build({
    firstName: "Test",
    lastName: "Tester",
    email: "test@gmail.com",
    password: "testing123"
})

export { User };