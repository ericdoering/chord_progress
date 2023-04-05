import jwt from "jsonwebtoken";
import { SECRET_KEY } from "./config"

/** return signed JWT from user data. */

function createToken(user:any) {

  let payload = {
    email: user.email,
  };

  return jwt.sign(payload, SECRET_KEY);
}

export { createToken };