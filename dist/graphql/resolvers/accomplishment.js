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
const accomplishmentResolver = {
    Query: {
        departmentAccomplishments: (_, args, { prisma }) => {
            const { departmentId, sessionId } = args;
            return prisma.departmentAccomplishment.findMany({
                where: {
                    departmentId,
                    sessionId
                }
            });
        },
        facultyAccomplishments: (_, args, { prisma }) => {
            const { sessionId } = args;
            return prisma.facultyAccomplishment.findMany({
                where: {
                    sessionId
                }
            });
        },
        allDepartmentAccomplishments: (_, __, { prisma }) => {
            return prisma.departmentAccomplishment.findMany({
                include: {
                    department: true
                }
            });
        },
        allFacultyAccomplishments: (_, __, { prisma }) => {
            return prisma.facultyAccomplishment.findMany();
        }
    },
    Mutation: {
        createDepartmentAccomplishment: (_, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            const { departmentId, sessionId, description, imageUrl } = args;
            return prisma.departmentAccomplishment.create({
                data: {
                    departmentId,
                    sessionId,
                    description,
                    imageUrl
                }
            });
        }),
        createFacultyAccomplishment: (_, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            const { sessionId, description, imageUrl } = args;
            return prisma.facultyAccomplishment.create({
                data: {
                    sessionId,
                    description,
                    imageUrl
                }
            });
        })
    }
};
exports.default = accomplishmentResolver;
