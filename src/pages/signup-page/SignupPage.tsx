import './SignupPage.css';
import { Link } from 'react-router';

function SignupPage() {
  return (
    <main className='signup'>
      <div className='signup__content'>
        <header className='signup__text'>
          <h1>Create your account</h1>
          <p>One step now, one secret passcode later.</p>
        </header>
        <form className='signup__form'>
          <div className='signup__form-group'>
            <div className='signup__input'>
              <label htmlFor='firstName'>First name</label>
              <input
                type='text'
                name='firstName'
                id='firstName'
                placeholder='John'
              />
            </div>

            <div className='signup__input '>
              <label htmlFor='lastName'>Last name</label>
              <input
                type='text'
                name='lastName'
                id='lastName'
                placeholder='John'
              />
            </div>
          </div>
          <div className='signup__input'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='enter your email'
            />
          </div>
          <div className='signup__input'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='choose a username'
            />
          </div>
          <div className='signup__input'>
            <label htmlFor='password'>Password</label>
            <input
              type='text'
              name='password'
              id='password'
              placeholder='password'
            />
          </div>
          <div className='signup__input'>
            <label htmlFor='passwordConfirm'>Confirm password</label>
            <input
              type='text'
              name='passwordConfirm'
              id='passwordConfirm'
              placeholder='confirm password'
            />
          </div>
          <button className='signup__btn' type='submit'>
            Create account
          </button>
        </form>
      </div>
      <div className='signup__redirect'>
        <p>
          Already have an account? <Link to='/login'>Log in</Link>
        </p>
      </div>
    </main>
  );
}

export default SignupPage;
