import invariant from 'invariant';
import db, { User } from './db'
import jwt from 'jsonwebtoken'

const createAuthToken = (user: Pick<User, 'id'>): string => {
  invariant(process.env.JWT_SECRET, 'JWT_SECRET not set');
  return jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN});
}

const verifyAuthToken = async( authToken: string): Promise<User> => {
  invariant(process.env.JWT_SECRET, 'JWT_SECRET not set');
  const {userId} =  jwt.verify(authToken, process.env.JWT_SECRET) as { userId: string };
  return db.user.findUniqueOrThrow({ where: { id: userId } })
}

const Auth = {
  createAuthToken,
  verifyAuthToken
}

export default Auth