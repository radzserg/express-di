"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// rest of the code remains same
var app = (0, express_1.default)();
var PORT = 8000;
app.get('/', function (req, res) { return res.send('Express + TypeScript Server'); });
app.listen(PORT, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at http://localhost:" + PORT);
});
