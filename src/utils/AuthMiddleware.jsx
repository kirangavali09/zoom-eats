import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthMiddleware = ({children}) => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.auth.userInfo[0]);

    useEffect(() => {
        if(user?.uid && children.type.name == 'SignIn'){
            navigate('/');
        } else if(!user?.uid) {
            navigate('/sign-in')
        }
    },[children.type.name, user?.uid])

    return children;
}

export default AuthMiddleware;