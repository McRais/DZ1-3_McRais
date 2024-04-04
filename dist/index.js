"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("./settings");
const port = process.env.PORT || 3003;
settings_1.app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
/*
const mongoURI = process.env.MONGO_URL || 'mongodb://0.0.0.0:27017'

console.log(process.env.MONGO_URL)
//output - mongodb+srv://a:a@ava.epzello.mongodb.net/?retryWrites=true&w=majority

 */
