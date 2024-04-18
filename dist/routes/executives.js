"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const executives_1 = require("../controllers/executives");
const express_1 = require("express");
const executivesRouter = (0, express_1.Router)();
executivesRouter.get('/sessions/leaders', executives_1.FacultyPresidentAndVicePresident);
executivesRouter.get('/session/:sessionId/leaders/all', executives_1.FacultyMembers);
exports.default = executivesRouter;
