import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../middleware/config"
import  { Request, Response } from "express";

export interface UserIDJwtPayload extends jwt.JwtPayload {
    id: string
    email: string
}

export function parseJwt (request: Request) {
    console.log(request.headers)
    const authHeader = request.headers && request.headers.authorization;
    if (authHeader) {    
        const token = authHeader.replace(/^[Bb]earer /, "").trim();
        const user = <UserIDJwtPayload>jwt.verify(token, SECRET_KEY);
        console.log(user)
        return user;
    } 
    else {
        throw Error('cannot decode jwt')
    }
}



