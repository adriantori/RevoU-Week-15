import express from "express";
import { Db } from "mongodb";

declare global {
  namespace Express {
    interface Request {
      request_id?: string | string[],
      db: Db
    }
  }
}