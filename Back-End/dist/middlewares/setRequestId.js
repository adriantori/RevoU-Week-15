"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const setRequestId = () => {
    return (req, res, next) => {
        console.log("inside setRequestId");
        if (req.headers['x-request-id']) {
            res.setHeader("x-request-id", req.headers['x-request-id']);
            req.request_id = req.headers['x-request-id'];
            console.log(req.request_id);
        }
        else {
            const uuid = (0, uuid_1.v4)();
            res.setHeader("x-request-id", uuid);
            req.request_id = uuid;
            console.log(req.request_id);
        }
        next();
    };
};
exports.default = setRequestId;
