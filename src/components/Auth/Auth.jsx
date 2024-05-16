import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png'
import './Auth.scss';
export default function Auth() {
    return (
      <>
        
      <div className='auth-page'>
      <div className='auth-page__logo'><img className='auth-page__logo--image'  src={Logo}/> </div>
      <div className='auth-page__buttons'>
       <Link className='auth-page__button' to="login">Log in</Link>
        <Link className='auth-page__button' to="singup">Sing up</Link>
      </div>
       
       
      </div>
      </>
    );
}