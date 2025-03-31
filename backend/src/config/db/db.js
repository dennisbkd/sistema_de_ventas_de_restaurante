import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config({ path: './.env/db.env' })

const USER = process.env.DB_USER
const PASSWORD = process.env.DB_PASSWORD
const HOST = process.env.DB_HOST
console.log(USER)

const db = new Sequelize(
  'Restaurante',
  USER, // Usuario
  PASSWORD, // Contraseña
  {
    host: HOST,
    dialect: 'mysql'
    // logging: false
  }
)

export default db
