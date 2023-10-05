"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simpleDelete = exports.simplePut = exports.simplePost = exports.simpleGet = void 0;
function simpleGet(req, res) {
    try {
        res.status(200).json({
            message: 'GET success'
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'GET ERROR'
        });
    }
}
exports.simpleGet = simpleGet;
function simplePost(req, res) {
    try {
        res.status(200).json({
            message: 'POST success'
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'POST ERROR'
        });
    }
}
exports.simplePost = simplePost;
function simplePut(req, res) {
    try {
        res.status(200).json({
            message: 'PUT success'
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'PUT ERROR'
        });
    }
}
exports.simplePut = simplePut;
function simpleDelete(req, res) {
    try {
        res.status(200).json({
            message: 'DELETE success'
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'DELETE ERROR'
        });
    }
}
exports.simpleDelete = simpleDelete;
