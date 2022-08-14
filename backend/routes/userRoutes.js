import express from 'express'
const router = express.Router()
import { authUser, getUserProfile } from '../controllers/userController.js'
import {protect} from '../middleware/authMiddleware.js'

// @desc    Authenticate user & get token
// @route   POST /api/users/login
// @access  Public
router.post('/login', authUser)

// @desc    Get the user profile
// @route   GET /api/users/profile
// @access  Private
router.route('/profile').get(protect, getUserProfile)
export default router