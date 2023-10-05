"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const whitelist = {
    clientOptionsLimited: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST']
    },
    clientOptionsGlobal: {
        origin: 'http://localhost:600',
    }
};
exports.default = whitelist;
