#! /usr/bin/env ts-node
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var todos = [];
var condition = true;
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var operators;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(condition === true)) return [3 /*break*/, 10];
                return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            name: "operation",
                            type: "list",
                            message: "Select a operation what you want to do",
                            choices: ["Add Task", "View Task", "Delete Task", "Update Task", "Exit"]
                        }
                    ])];
            case 1:
                operators = _a.sent();
                if (!(operators.operation === "Add Task")) return [3 /*break*/, 3];
                return [4 /*yield*/, addTask()];
            case 2:
                _a.sent();
                return [3 /*break*/, 9];
            case 3:
                if (!(operators.operation === "View Task")) return [3 /*break*/, 5];
                return [4 /*yield*/, viewTask()];
            case 4:
                _a.sent();
                return [3 /*break*/, 9];
            case 5:
                if (!(operators.operation === "Delete Task")) return [3 /*break*/, 7];
                return [4 /*yield*/, deleteTask()];
            case 6:
                _a.sent();
                return [3 /*break*/, 9];
            case 7:
                if (!(operators.operation === "Update Task")) return [3 /*break*/, 9];
                return [4 /*yield*/, updateTask()];
            case 8:
                _a.sent();
                _a.label = 9;
            case 9: return [3 /*break*/, 0];
            case 10: return [2 /*return*/];
        }
    });
}); };
var addTask = function () { return __awaiter(void 0, void 0, void 0, function () {
    var firstTask;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                    {
                        name: "add",
                        type: "input",
                        message: "Enter your add Task?",
                    }
                ])];
            case 1:
                firstTask = _a.sent();
                todos.push(firstTask.add);
                console.log("Your Task has been Addad Successfully");
                return [2 /*return*/];
        }
    });
}); };
var viewTask = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        todos.forEach(function (task, index) {
            console.log("".concat(index + 1, ":").concat(task));
        });
        return [2 /*return*/];
    });
}); };
var deleteTask = function () { return __awaiter(void 0, void 0, void 0, function () {
    var thirdTask, newTodo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                    {
                        name: "delete",
                        type: "list",
                        message: "Select a task to delete",
                        choices: todos.map(function (item) { return item; }),
                    },
                ])];
            case 1:
                thirdTask = _a.sent();
                newTodo = todos.filter(function (val) { return val !== thirdTask.delete; });
                todos = __spreadArray([], newTodo, true);
                console.log("Your Task has been Deleted Successfully");
                return [2 /*return*/];
        }
    });
}); };
var updateTask = function () { return __awaiter(void 0, void 0, void 0, function () {
    var fourthTask;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, viewTask()];
            case 1:
                _a.sent();
                return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            name: "update",
                            type: "number",
                            message: "Enter a index no what you want to update",
                        },
                    ])];
            case 2:
                fourthTask = _a.sent();
                todos[fourthTask.update - 1] = fourthTask.add;
                console.log("Your Task ".concat(fourthTask.update, " updated successfully"));
                todos;
                return [2 /*return*/];
        }
    });
}); };
main();
