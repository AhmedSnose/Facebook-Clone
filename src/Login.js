import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import {auth,provider} from "./firebase"

import {useStateValue} from "./StateProvider"
import {actionType} from "./reducer"

export default function Login() {

const [state , dispatch] = useStateValue();


    const signIn = ()=>{
        auth
        .signInWithPopup(provider)
        .then(result => {
            console.log(result);
            dispatch({
                type: actionType.SET_USER,
                user: result.user,
            })
        }).catch(error => alert(error.message))
    }

    
    return (
        <div className="Login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/640px-Facebook_f_logo_%282019%29.svg.png" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/640px-Facebook_Logo_%282019%29.svg.png"/>
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}
