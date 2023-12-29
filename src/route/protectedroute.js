import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const Protected = (props) => {
    const { Components } = props;
    const navigate = useNavigate();

    useEffect(() => {
        const login = localStorage.getItem('userToken');

        console.log('Token:', login);

        if (!login) {
            navigate('/login');
        }
    
    }, [navigate]);
    

    return (
        <>
            <Components />
        </>
    );
};

 

export const Protectedvendor = (props) => {
    const { Components } = props;
    const navigate = useNavigate();

    useEffect(() => {
        const login = localStorage.getItem('userToken');

        console.log('Token:', login);

        if (!login) {
            navigate('/login');
        }
    
    }, [navigate]);
    

    return (
        <>
            <Components />
        </>
    );
};





