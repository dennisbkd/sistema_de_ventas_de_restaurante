import { Validation } from '../utils/validations.js'

export class UserController {
  constructor ({ userModel }) {
    this.UserModel = userModel
  }

  registerUser = async (req, res) => {
    const result = Validation.registerUser(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newUser = await this.UserModel.registerUser({ input: result })
    if (newUser.error) return res.status(400).json({ error: newUser.error })

    res.status(201).json(newUser)
  }

  loginUser = async (req, res) => {
    const result = Validation.loginUser(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const logUser = await this.UserModel.loginUser({ input: result })
    res.status(200).json(logUser)
  }
}
