import express from 'express'
import {getProducts,  getProductById } from '../controllers/productController.js'

const router = express.Router()

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get('/', getProducts)

// @desc    Fetch a specific product by the id
// @route   GET /api/products/1
// @access  Public
router.get('/:id', getProductById)

export default router