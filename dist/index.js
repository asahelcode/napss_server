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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const apollo_server_express_1 = require("apollo-server-express");
const client_1 = require("@prisma/client");
const schema_1 = __importDefault(require("./graphql/schema"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
exports.prisma = new client_1.PrismaClient();
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const server = new apollo_server_express_1.ApolloServer({
        schema: schema_1.default,
        context: { prisma: exports.prisma },
        introspection: true
    });
    yield server.start().then(() => { console.log('successfully start graphql server'); });
    server.applyMiddleware({ app, path: '/graphql' });
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield startServer();
    app.listen({ port: 4000 }, () => {
        console.log('dev server up');
    });
});
main().catch((err) => {
    console.error(err);
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
}).finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.prisma.$disconnect();
}));
