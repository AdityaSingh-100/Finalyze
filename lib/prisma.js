import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient

if(process.env.NODE_ENV !== "production"){
    globalThis.prisma = db;
}


// globalThis.prisma : This global Variable ensures that the Prisma Client instance is 
// reused across hot reloads during development. Without this, each time your application
// reloads a new instance of the Prisma client would be creted , potentially leading 
// to connection issues.