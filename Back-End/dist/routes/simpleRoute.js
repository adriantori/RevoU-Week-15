"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.simpleRoute = void 0;
const express_1 = require("express");
const cors_1 = __importDefault(require("cors"));
const simpleController_1 = require("../controllers/simpleController");
const whitelist_1 = __importDefault(require("../middlewares/whitelist"));
exports.simpleRoute = (0, express_1.Router)();
exports.simpleRoute.get('/get', (0, cors_1.default)(whitelist_1.default.clientOptionsLimited), simpleController_1.simpleGet);
exports.simpleRoute.post('/post', (0, cors_1.default)(whitelist_1.default.clientOptionsLimited), simpleController_1.simplePost);
exports.simpleRoute.options('/put', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal));
exports.simpleRoute.options('/delete', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal));
exports.simpleRoute.put('/put', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal), simpleController_1.simplePut);
exports.simpleRoute.delete('/delete', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal), simpleController_1.simpleDelete);
