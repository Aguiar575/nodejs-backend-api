import Document from 'mongoose'

interface UserInterface extends Document {
    firstName?: string;
    lastName?: string;
    email?: string;
    fullNanme(): string;
}

export default UserInterface
