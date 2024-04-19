"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const session_1 = require("../controllers/session");
const express_1 = require("express");
const sessionRouter = (0, express_1.Router)();
// eslint-disable-next-line @typescript-eslint/no-misused-promises
sessionRouter.get('', session_1.getAllSession);
exports.default = sessionRouter;
