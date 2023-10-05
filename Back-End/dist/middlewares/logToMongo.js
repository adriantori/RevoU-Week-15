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
const morgan_1 = __importDefault(require("morgan"));
function logToMongo(req, app) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const db = req.db;
            if (!db) {
                console.error('Database instance not available.');
                return;
            }
            const morganLogsCollection = db.collection('morganLogs');
            const morganStream = {
                write: (logData) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        const parsedLogData = JSON.parse(logData);
                        const logEntry = { log: parsedLogData }; // Modify this based on your log data structure
                        yield morganLogsCollection.insertOne(logEntry);
                    }
                    catch (error) {
                        console.error('Error parsing or logging Morgan log data:', error);
                    }
                })
            };
            app.use((0, morgan_1.default)('combined', { stream: morganStream }));
        }
        catch (error) {
            console.error('Error setting up Morgan for logging to MongoDB:', error);
        }
    });
}
exports.default = logToMongo;
