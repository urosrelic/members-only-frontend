import './LoginPage.css';
import { Link } from 'react-router';

function LoginPage() {
  return (
    <main className='login'>
      <div className='login__content'>
        <header className='login__text'>
          <h1>Welcome back</h1>
          <p>Log in to read what the club is saying</p>
        </header>
        <form className='login__form'>
          <div className='login__input'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='your username'
            />
          </div>
          <div className='login__input'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='your password'
            />
          </div>
          <button className='login__btn' type='submit'>
            Log in
          </button>
          <div className='login__redirect'>
            <p>
              No account? <Link to={'/signup'}>Sign up</Link>
            </p>
          </div>
        </form>
      </div>
      <div className='login__hint'>
        <p>
          New here? Sign up, then enter the secret passcode to join the club and
          see who wrote what.
        </p>
      </div>
    </main>
  );
}

export default LoginPage;
