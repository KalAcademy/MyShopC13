import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin user',
    email: 'admin@myshop.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true
  },
  {
    name: 'Fred F',
    email: 'fred@myshop.com',
    password: bcrypt.hashSync('123456'),
  },
  {
    name: 'Wilma F',
    email: 'wilma@myshop.com',
    password: bcrypt.hashSync('123456'),
  },
]

export default users