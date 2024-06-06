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
const index_1 = require("../../constants/index");
const sessionResolver = {
    Session: {
        departments: (_, __, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            return prisma.department.findMany();
        }),
        officials: (parent, __, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            return prisma.leadershipHistory.findMany({
                where: {
                    sessionId: parent.id,
                    level: 'EXECUTIVE',
                    positionId: {
                        not: {
                            in: [index_1.presidentId, index_1.vicePresidentId]
                        }
                    }
                },
                include: {
                    department: true,
                    position: true
                }
            });
        }),
        legislatives: (parent, __, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            return prisma.leadershipHistory.findMany({
                where: {
                    sessionId: parent.id,
                    level: 'LEGISLATIVE'
                },
                include: {
                    department: true,
                    position: true
                }
            });
        }),
        president: (parent, __, { prisma }) => {
            return prisma.leadershipHistory.findFirst({
                where: {
                    sessionId: parent.id,
                    positionId: index_1.presidentId,
                },
                include: {
                    department: true
                }
            });
        },
        vicePresident: (parent, __, { prisma }) => {
            return prisma.leadershipHistory.findFirst({
                where: {
                    sessionId: parent.id,
                    positionId: index_1.vicePresidentId,
                },
                include: {
                    department: true
                }
            });
        }
    },
    Query: {
        sessions: (_, __, { prisma }) => {
            return prisma.session.findMany();
        },
        session: (_, args, { prisma }) => {
            const { sessionId } = args;
            return prisma.session.findUnique({
                where: {
                    id: sessionId
                }
            });
        }
    },
    Mutation: {
        createSession: (_, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            const { session, status } = args;
            return prisma.session.create({
                data: {
                    session,
                    status
                }
            });
        })
    }
};
exports.default = sessionResolver;
