#!/usr/bin/nodejs
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../app"));
const config_1 = __importDefault(require("../environment/config"));
const port = config_1.default.port || 3000;
app_1.default.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//# sourceMappingURL=start.js.map