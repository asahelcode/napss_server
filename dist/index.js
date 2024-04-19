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
const client_1 = require("@prisma/client");
const executives_1 = __importDefault(require("./routes/executives"));
const session_1 = __importDefault(require("./routes/session"));
const accomplishment_1 = __importDefault(require("./routes/accomplishment"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
exports.prisma = new client_1.PrismaClient();
app.use('/api/faculty', executives_1.default);
app.use('/api/sessions', session_1.default);
app.use('/api/accomplishments', accomplishment_1.default);
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    app.listen({ port: 4005 }, () => {
        console.log('dev server up');
    });
});
main().catch((err) => {
    console.error(err);
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
}).finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.prisma.$disconnect();
}));
