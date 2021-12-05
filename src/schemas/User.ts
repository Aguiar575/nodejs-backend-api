import { Schema, model } from 'mongoose'
import UserInterface from '../interfaces/UserInterface'

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String
},
{
  timestamps: true
})

UserSchema.methods.fullNanme = function (): string {
  return `${this.firstName} ${this.lastName}`
}

export default model<UserInterface>('User', UserSchema)
