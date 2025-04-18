import { Router } from 'express'
import { UserController } from '../controllers/user.js'

export const createAuthUserRouter = ({ userModel }) => {
  const AuthRouter = Router()
  const userController = new UserController({ userModel })

  AuthRouter.post('/register', userController.registerUser)
  AuthRouter.post('/login', userController.loginUser)

  return AuthRouter
}
