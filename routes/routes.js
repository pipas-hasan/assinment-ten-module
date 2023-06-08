const express = require('express');
const router = express.Router();

const formidable = require("express-formidable");

// middlewares
const { requireSigning, isAdmin } = require("../middlewares/auth.js");

// controllers
const { register, login } = require("../controller/user.js");

const {createProduct,getProducts}=require('../controller/product')


router.post("/register", register);
router.post("/login", login);
router.post("/product",createProduct);
router.get("/products", getProducts);


module.exports = router;