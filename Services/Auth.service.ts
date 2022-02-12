import { createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { auth } from "../firebase";
import User from "../Models/User.model"

class AuthenticationService {
    public login = ({ email, password }: User): Promise<UserCredential> => {
        return signInWithEmailAndPassword(auth, email, password ?? '');
    }

    public register = ({ email, password }: User): Promise<UserCredential> => {
        return createUserWithEmailAndPassword(auth, email, password ?? '');
    }
}

export const AuthService: AuthenticationService = new AuthenticationService();