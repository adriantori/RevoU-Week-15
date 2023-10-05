"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const whitelist = {
    clientOptionsLimited: {
        origin: ['https://adriantori-w15-a.vercel.app', 'https://adriantori-w15-b.vercel.app'],
        methods: ['GET', 'POST']
    },
    clientOptionsGlobal: {
        origin: 'https://adriantori-w15-b.vercel.app',
    }
};
exports.default = whitelist;
