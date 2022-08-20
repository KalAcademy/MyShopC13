import express from 'express'
const router = express.Router()
import { authUser, getUserProfile, updateUserProfile, registerUser } from '../controllers/userController.js'
import {protect} from '../middleware/authMiddleware.js'

// @desc    Authenticate user & get token
// @route   POST /api/users/login
// @access  Public
router.post('/login', authUser)

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
router.route('/').post(registerUser)

// @desc    Get the user profile
// @route   GET /api/users/profile
// @access  Private
router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
export default router