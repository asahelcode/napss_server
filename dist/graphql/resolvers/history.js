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
const historyResolver = {
    Query: {
        histories: (_, __, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            return prisma.leadershipHistory.findMany({
                include: {
                    position: true,
                    session: true
                }
            });
        }),
        searchOfficials: (_, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            const { name } = args;
            return prisma.leadershipHistory.findMany({
                where: {
                    studentName: {
                        contains: name,
                        mode: 'insensitive'
                    }
                },
                include: {
                    department: true,
                    position: true,
                    session: true
                }
            });
        }),
        departmentOfficials: (_, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            const { departmentId, sessionId } = args;
            return prisma.leadershipHistory.findMany({
                where: {
                    departmentId,
                    sessionId,
                    level: 'DEPARTMENT'
                },
                include: {
                    position: true
                }
            });
        }),
        facultyOfficials: (_, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            const { sessionId } = args;
            return prisma.leadershipHistory.findMany({
                where: {
                    sessionId,
                    level: 'FACULTY'
                },
                include: {
                    department: true,
                    position: true
                }
            });
        })
    },
    Mutation: {
        createHistory: (_, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            const { sessionId, studentName, level, positionId, departmentId, studentImage } = args;
            return prisma.leadershipHistory.create({
                data: {
                    sessionId,
                    studentName,
                    positionId,
                    departmentId,
                    studentImage,
                    level
                }
            });
        })
    }
};
exports.default = historyResolver;
