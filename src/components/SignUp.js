import React from 'react';
import './SignUp.css';


const SignUp = (props) => {
    let inputRefUserName = null;
    let inputRefPassword = null;
    let inputRefConfPassword = null;
    let inputRefSubmitButton = null;


    const onKeyUp = (current, e) => {
        if(e.keyCode === 13){
            switch (current) {
                case 'userName':
                    inputRefPassword.focus();
                    break;
                case 'password':
                    inputRefConfPassword.focus();
                    break;
                case 'confirmPassword':
                    inputRefSubmitButton.focus();
                    break;
                case 'submit':
                    props.handleSignUp()
                    break;
                default:
                    inputRefUserName.focus();
                    break;
            }
        }
    }

    return (
        <form className="signup-form">
            <div className="form-input">
                <label htmlFor="userName">User Name :</label>
                <input type="text" name="userName"
                placeholder="Username" 
                ref={(input)=>{inputRefUserName=input}}
                onKeyUp={onKeyUp.bind(this, 'userName')}/>
            </div>
            <div className="form-input">
                <label htmlFor="password">Password :</label>
                <input type="password" name="password" 
                placeholder="Password"
                ref={(input)=>{inputRefPassword=input}}
                onKeyUp={onKeyUp.bind(this, 'password')}/>
            </div>
            <div className="form-input">
                <label htmlFor="confirmPassword">Confirm Password :</label>
                <input type="password" name="confirmPassword" 
                placeholder="Confirm Password"
                ref={(input)=>{inputRefConfPassword=input}}
                onKeyUp={onKeyUp.bind(this, 'confirmPassword')}/>
            </div>
            <input className="signup-button" type="button" value="SignUp" 
            ref={(input)=>{inputRefSubmitButton=input}}
            onKeyUp={onKeyUp.bind(this, 'submit')}
            onClick={() => props.handleSignUp()} />
        </form>

    )
}

export default SignUp