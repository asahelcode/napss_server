"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacultyMembers = exports.FacultyPresidentAndVicePresident = void 0;
const __1 = require("..");
const constants_1 = require("../constants");
// eslint-disable-next-line @typescript-eslint/no-misused-promises
const FacultyPresidentAndVicePresident = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sessions = yield __1.prisma.session.findMany({
            include: {
                history: {
                    where: {
                        OR: [
                            { positionId: constants_1.presidentId },
                            { positionId: constants_1.vicePresidentId }
                        ],
                        level: 'FACULTY'
                    },
                    include: {
                        department: true,
                        position: true
                    }
                }
            }
        });
        sessions.map((session) => (Object.assign(Object.assign({}, session), { history: session.history.map(h => ({
                studentName: h.studentName,
                studentImage: h.studentImage,
                department: h.department.name,
                position: h.position.position
            })) })));
        res.status(200).json(sessions);
        // console.log(JSON.stringify(sessions), { depth: null })
    }
    catch (error) {
        console.error('Error fetching sessions with leadership history:', error);
        throw error;
    }
});
exports.FacultyPresidentAndVicePresident = FacultyPresidentAndVicePresident;
// eslint-disable-next-line @typescript-eslint/no-misused-promises
const FacultyMembers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { sessionId } = req.params;
    const sessionMembers = yield __1.prisma.leadershipHistory.findMany({
        where: { sessionId, level: 'FACULTY' },
        include: {
            department: true,
            position: true
        }
    });
    console.log(sessionId);
    res.status(200).json(sessionMembers);
});
exports.FacultyMembers = FacultyMembers;
