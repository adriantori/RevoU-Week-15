"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helmet_1 = __importDefault(require("./helmet"));
const logToMongo_1 = __importDefault(require("./logToMongo"));
const setRequestId_1 = __importDefault(require("./setRequestId"));
const mongoMiddleware_1 = __importDefault(require("./mongoMiddleware"));
exports.default = (app) => {
    (0, helmet_1.default)(app);
    setRequestId_1.default;
    app.use((req, res, next) => {
        (0, mongoMiddleware_1.default)(req, res, next);
        (0, logToMongo_1.default)(req);
    });
};
