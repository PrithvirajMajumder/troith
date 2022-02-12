import { auth } from "../firebase"
import User from "../Models/User.model"

export default class AuthService {
    public login = ({ email, password, displayName }: User) => {
        return auth
            .createUserWithEmailAndPassword(email, password)
            .then((authenticatedUser: any) => {
                authenticatedUser.user.update({
                    displayName,
                });
            })
    }
}