"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helmet_1 = __importDefault(require("./helmet"));
const logToMongo_1 = __importDefault(require("./logToMongo"));
const setRequestId_1 = __importDefault(require("./setRequestId"));
exports.default = (app) => {
    (0, helmet_1.default)(app);
    setRequestId_1.default;
    (0, logToMongo_1.default)(app);
};
