import express from "express";

declare global {
  namespace Express {
    interface Request {
      request_id?: string | string[]
    }
  }
}