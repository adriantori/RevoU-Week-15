"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoConnection_1 = require("../configs/mongoConnection");
function mongoMiddleware(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const uri = 'mongodb+srv://adriantori:adri123@cluster0.3u5txct.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB URI
        const dbName = 'RevoU_w15'; // Replace with your actual database name
        try {
            yield (0, mongoConnection_1.connect)(uri, dbName);
            const db = (0, mongoConnection_1.getDb)(); // Get the database instance
            // Set the database instance on req for use in the next middleware
            req.db = db;
            next();
        }
        catch (error) {
            next(error);
        }
    });
}
exports.default = mongoMiddleware;
