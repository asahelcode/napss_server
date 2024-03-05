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
const departmentResolver = {
    Query: {
        departmentsPresidentAndVicePresident: (_, __, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            return prisma.department.findMany({
                include: {
                    history: {
                        where: {
                            positionId: {
                                in: ['c85e2fb9-827e-46a7-9cae-498fec337cf7', '74fd8ba6-ddb8-439d-ba8a-aff060c40987']
                            },
                            level: 'DEPARTMENT'
                        },
                        include: {
                            session: true
                        }
                    }
                }
            });
        })
    },
    Mutation: {
        createDepartment: (_, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            const { name } = args;
            return prisma.department.create({
                data: {
                    name
                }
            });
        })
    }
};
exports.default = departmentResolver;
