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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoConnection_1 = __importDefault(require("../configs/mongoConnection"));
function mongoMiddleware(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const uri = 'mongodb+srv://adriantori:adri123@cluster0.3u5txct.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB URI
        const dbName = 'RevoU_w15'; // Replace with your actual database name
        try {
            yield mongoConnection_1.default.connect(uri, dbName);
            req.app.locals.db = mongoConnection_1.default.getDb(); // Store db in app.locals
            next();
        }
        catch (error) {
            next(error);
        }
    });
}
exports.default = mongoMiddleware;
