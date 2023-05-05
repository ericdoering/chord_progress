import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../middleware/config"
import  { Request, Response } from "express";

export interface UserIDJwtPayload extends jwt.JwtPayload {
    id: string
    email: string
};

// ParseJwt method which checks that the user has the jwt within their header by decoding it and comparing it with the SECRET_KEY
export function parseJwt (request: Request) {
    const authHeader = request.headers && request.headers.authorization;
    if (authHeader) {    
        const token = authHeader.replace(/^[Bb]earer /, "").trim();
        const user = <UserIDJwtPayload>jwt.verify(token, SECRET_KEY);
        return user;
    } 
    else {
        throw Error('cannot decode jwt')
    }
};



