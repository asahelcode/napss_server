"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accomplishment_1 = require("../controllers/accomplishment");
const express_1 = require("express");
const accomplishmentRouter = (0, express_1.Router)();
// eslint-disable-next-line @typescript-eslint/no-misused-promises
accomplishmentRouter.get('/:sessionId', accomplishment_1.getAccomplishments);
exports.default = accomplishmentRouter;
