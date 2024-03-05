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
const sessionResolver = {
    Query: {
        sessions: (_, __, { prisma }) => {
            return prisma.session.findMany();
        },
        sessionFacultyAndDeptPresident: (_, __, { prisma }) => {
            return prisma.session.findMany({
                include: {
                    history: {
                        where: {
                            level: {
                                in: ['FACULTY', 'DEPARTMENT']
                            },
                            positionId: 'c85e2fb9-827e-46a7-9cae-498fec337cf7'
                        },
                        include: {
                            department: true,
                            position: true
                        }
                    }
                }
            });
        },
        sessionFacultyPresidentAndVice: (_, __, { prisma }) => {
            return prisma.session.findMany({
                include: {
                    history: {
                        where: {
                            level: 'FACULTY',
                            positionId: {
                                in: ['c85e2fb9-827e-46a7-9cae-498fec337cf7', '74fd8ba6-ddb8-439d-ba8a-aff060c40987']
                            }
                        },
                        include: {
                            department: true,
                            position: true
                        }
                    }
                }
            });
        },
        sessionDepartmentPresidentAndVice: (_, __, { prisma }) => {
            return prisma.session.findMany({
                include: {
                    history: {
                        where: {
                            level: 'DEPARTMENT',
                            positionId: {
                                in: ['c85e2fb9-827e-46a7-9cae-498fec337cf7', '74fd8ba6-ddb8-439d-ba8a-aff060c40987']
                            }
                        },
                        include: {
                            position: true,
                            department: true,
                            session: true
                        }
                    }
                }
            });
        },
        getSessionFacultyPresidentAndVice: (_, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            const { sessionId } = args;
            return prisma.session.findUnique({
                where: {
                    id: sessionId
                },
                include: {
                    history: {
                        where: {
                            level: 'FACULTY',
                            positionId: {
                                in: ['c85e2fb9-827e-46a7-9cae-498fec337cf7', '74fd8ba6-ddb8-439d-ba8a-aff060c40987']
                            }
                        },
                        include: {
                            department: true,
                            position: true
                        }
                    }
                }
            });
        }),
        getSessionFacultyAndDeptPresident: (_, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            const { sessionId } = args;
            return prisma.session.findMany({
                where: {
                    id: sessionId
                },
                include: {
                    history: {
                        where: {
                            level: {
                                in: ['FACULTY', 'DEPARTMENT']
                            },
                            positionId: 'c85e2fb9-827e-46a7-9cae-498fec337cf7'
                        },
                        include: {
                            department: true,
                            position: true
                        }
                    }
                }
            });
        }),
        getSessionDepartmentPresidentAndVice: (_, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
            const { sessionId } = args;
            return prisma.session.findMany({
                where: {
                    id: sessionId
                },
                include: {
                    history: {
                        where: {
                            level: 'DEPARTMENT',
                            positionId: {
                                in: ['c85e2fb9-827e-46a7-9cae-498fec337cf7', '74fd8ba6-ddb8-439d-ba8a-aff060c40987']
                            }
                        },
                        include: {
                            department: true,
                            position: true,
                            session: true
                        }
                    }
                }
            });
        }),
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
