import React from 'react'
import './Signuppage.css'
import { Link } from 'react-router-dom'


function Signuppage() {
    return (
        <div className="signuppage">
            <div className='back'>
                <img className="back__img"
                    src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:cb3c99c2-c5fa-4219-a494-67f1f3524dae;revision=0?component_id=74cfb136-b16a-49d3-b582-fcce22085d24&api_key=CometServer1&access_token=1624411305_urn%3Aaaid%3Asc%3AUS%3Acb3c99c2-c5fa-4219-a494-67f1f3524dae%3Bpublic_4f12164c4b76494e31d28f11eeaea26e12028455" alt="" />
            </div>
            <div className="border__form">
                <h1 className="login__name">Sign up</h1>
                <input className="input__form1" placeholder="Full Name" type="text" />
                <select className="select__form">
                    <option value="customer">Customer</option>
                    <option value="dealer">Dealer</option>
                </select>
                <input className="input__form2" placeholder="Mobile Number" type="number" />
                <Link to="/"> <button className="continue__button">Continue</button></Link>
                <p className="login"><strong>Login</strong></p>
            </div>
        </div>
    )
}

export default Signuppage
