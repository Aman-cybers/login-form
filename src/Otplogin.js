import React from 'react'
import './otplogin.css'

function Otplogin() {
    return (
        <div className="otplogin">
            <div className="border__form">
                <h1 className="login__name">Login</h1>
                <p className="verify">Verify with OTP</p>
                <div className="otp__div">
                    <input class="form-control" maxlength="1" />
                    <input class="form-control" maxlength="1" />
                    <input class="form-control" maxlength="1" />
                    <input class="form-control" maxlength="1" />
                </div>
                <h1 className="login__name1">Resend OTP</h1>
            </div>
        </div>
    )
}

export default Otplogin
