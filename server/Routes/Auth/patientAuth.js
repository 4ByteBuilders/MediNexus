const express = require("express");
const { catchAsync } = require("../../catchAsync");

const router = express.Router();

router.post("/login", catchAsync((req, res, next) => {
    const {} = req.body;
}));