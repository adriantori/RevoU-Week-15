"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
class MongoDBStream extends stream_1.Writable {
    constructor(collection, options) {
        super(options);
        this.collection = collection;
    }
    _write(chunk, encoding, callback) {
        const logEntry = JSON.parse(chunk.toString());
        this.collection.insertOne(logEntry, (error, result) => {
            if (error) {
                console.error('Error inserting data:', error);
            }
            callback();
        });
    }
}
exports.default = MongoDBStream;
