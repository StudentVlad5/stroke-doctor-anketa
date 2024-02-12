import { ReactNode, useEffect } from "react";
import {useLocation, useNavigate} from "react-router-dom";

export const CheckIdProvider = ({
    children
} : {
    children: any
}) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const application_number = localStorage.getItem('application_number')
        if (!application_number) navigate('/')

        if (application_number && location.pathname === '/') {
            navigate('/1')
        }

    }, []);

    return children;
};
