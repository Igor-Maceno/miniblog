import{
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth';

import { useState, useEffect } from 'react';

export const useAuthentication = () =>{
    const [error, setError] = useState(null);
    const [loading, serLoading] = useState(null);

    //cleanuo
    //deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCanceled(){
        if(cancelled){
            return;
        }
    }
}