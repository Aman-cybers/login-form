import { Link } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <div className='back'>
        <img className="back__img"
          src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:cb3c99c2-c5fa-4219-a494-67f1f3524dae;revision=0?component_id=74cfb136-b16a-49d3-b582-fcce22085d24&api_key=CometServer1&access_token=1624411305_urn%3Aaaid%3Asc%3AUS%3Acb3c99c2-c5fa-4219-a494-67f1f3524dae%3Bpublic_4f12164c4b76494e31d28f11eeaea26e12028455" alt="" />
      </div>
      <div className="border__form">
        <h1 className="login__name">Login</h1>
        <input className="input__form" placeholder="Mobile Number" type="number" />
        <Link to="/Otplogin"><button className="continue__button">Continue</button></Link>
        <p className="p__line">New here? <Link to="/Signuppage"><button className="register"><strong>Register</strong></button></Link></p>
      </div>
    </div>
  );
}

export default App;
