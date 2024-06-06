"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@graphql-tools/schema");
const fs_1 = require("fs");
const position_1 = __importDefault(require("./resolvers/position"));
const department_1 = __importDefault(require("./resolvers/department"));
const session_1 = __importDefault(require("./resolvers/session"));
const history_1 = __importDefault(require("./resolvers/history"));
const accomplishment_1 = __importDefault(require("./resolvers/accomplishment"));
const path_1 = __importDefault(require("path"));
const departmentType = (0, fs_1.readFileSync)(path_1.default.join(__dirname, './typedefs/department.graphql'), 'utf8');
const positionType = (0, fs_1.readFileSync)(path_1.default.join(__dirname, './typedefs/position.graphql'), 'utf8');
// const studentType = readFileSync(path.join(__dirname, './typedefs/student.graphql'), 'utf8')
const sessionType = (0, fs_1.readFileSync)(path_1.default.join(__dirname, './typedefs/session.graphql'), 'utf8');
const historyType = (0, fs_1.readFileSync)(path_1.default.join(__dirname, './typedefs/history.graphql'), 'utf8');
const accomplishmentType = (0, fs_1.readFileSync)(path_1.default.join(__dirname, './typedefs/accomplishment.graphql'), 'utf8');
const typeDefs = [departmentType, positionType, sessionType, historyType, accomplishmentType];
const resolvers = [department_1.default, position_1.default, session_1.default, history_1.default, accomplishment_1.default];
const schema = (0, schema_1.makeExecutableSchema)({
    typeDefs,
    resolvers
});
exports.default = schema;
