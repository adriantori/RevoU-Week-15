"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const fs_1 = __importDefault(require("fs"));
exports.default = (app) => {
    app.use((0, morgan_1.default)('combined', { stream: fs_1.default.createWriteStream('./access.log', { flags: 'a' }) } //create file
    //{db.insertOne} //push database
    ));
    app.use((0, morgan_1.default)('dev'));
};
