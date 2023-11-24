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
const mongoose_1 = __importDefault(require("mongoose"));
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../../app");
it("returns a 404 if the provided id does not exist", () => __awaiter(void 0, void 0, void 0, function* () {
    const id = new mongoose_1.default.Types.ObjectId().toHexString();
    yield (0, supertest_1.default)(app_1.app)
        .put(`/api/tickets/${id}`)
        .set("Cookie", global.signin())
        .send({
        title: "asdf",
        price: 20,
    });
    expect(404);
}));
it("returns a 401 if the user is not authenticated", () => __awaiter(void 0, void 0, void 0, function* () {
    const id = new mongoose_1.default.Types.ObjectId().toHexString();
    yield (0, supertest_1.default)(app_1.app).put(`/api/tickets/${id}`).send({
        title: "asdf",
        price: 20,
    });
    expect(401);
}));
it("returns a 401 if the user does not own the ticket", () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, supertest_1.default)(app_1.app)
        .post("/api/tickets")
        .set("Cookie", global.signin())
        .send({
        title: "asdf",
        price: 20,
    });
    yield (0, supertest_1.default)(app_1.app)
        .put(`/api/tickets/${response.body.id}`)
        .set("Cookie", global.signin())
        .send({
        title: "aaaa",
        price: 1000,
    })
        .expect(401);
}));
it("returns a 400 if the user provides an invalid title or price", () => __awaiter(void 0, void 0, void 0, function* () {
    const cookie = global.signin();
    const response = yield (0, supertest_1.default)(app_1.app)
        .post("/api/tickets")
        .set("Cookie", cookie)
        .send({
        title: "asdf",
        price: 20,
    });
    yield (0, supertest_1.default)(app_1.app)
        .put(`/api/tickets/${response.body.id}`)
        .set("Cookie", cookie)
        .send({
        title: "",
        price: 20,
    })
        .expect(400);
    yield (0, supertest_1.default)(app_1.app)
        .put(`/api/tickets/${response.body.id}`)
        .set("Cookie", cookie)
        .send({
        title: "",
        price: -10,
    })
        .expect(400);
}));
it("updates the ticket provided valid inputs", () => __awaiter(void 0, void 0, void 0, function* () {
    const cookie = global.signin();
    const response = yield (0, supertest_1.default)(app_1.app)
        .post("/api/tickets")
        .set("Cookie", cookie)
        .send({
        title: "asdf",
        price: 20,
    });
    yield (0, supertest_1.default)(app_1.app)
        .put(`/api/tickets/${response.body.id}`)
        .set("Cookie", cookie)
        .send({
        title: "new title",
        price: 100,
    })
        .expect(200);
    const ticketResponse = yield (0, supertest_1.default)(app_1.app)
        .get(`/api/tickets/${response.body.id}`)
        .send();
    expect(ticketResponse.body.title).toEqual("new title");
    expect(ticketResponse.body.price).toEqual(100);
}));
