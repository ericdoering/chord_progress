import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../middleware/config"
import  { Request, Response } from "express";

export interface UserIDJwtPayload extends jwt.JwtPayload {
    id: string
    email: string
};

export function parseJwt (request: Request) {
    const authHeader = request.headers && request.headers.authorization;
    if (authHeader) {    
        const token = authHeader.replace(/^[Bb]earer /, "").trim();
        const user = <UserIDJwtPayload>jwt.verify(token, SECRET_KEY);
        return user;
    } else {
        throw new Error("failed to parse jwt")
    }

}


