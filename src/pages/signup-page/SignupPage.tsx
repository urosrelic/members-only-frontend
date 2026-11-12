import { useState } from 'react';
import { Link } from 'react-router';
import './SignupPage.css';
import type { CreateUserRequest } from '../../types/user.types';

function SignupPage() {
  const [formData, setFormData] = useState<CreateUserRequest>({
    profile_picture: undefined,
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, type } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type,
    }));
  }

  function onSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <main className='signup'>
      <div className='signup__content'>
        <header className='signup__text'>
          <h1>Create your account</h1>
          <p>One step now, one secret passcode later.</p>
        </header>
        <form className='signup__form' onSubmit={onSubmit}>
          <div className='signup__form-group'>
            <div className='signup__input'>
              <label htmlFor='firstName'>First name</label>
              <input
                type='text'
                name='firstName'
                id='firstName'
                placeholder='John'
                onChange={handleInputChange}
              />
            </div>

            <div className='signup__input '>
              <label htmlFor='lastName'>Last name</label>
              <input
                type='text'
                name='lastName'
                id='lastName'
                placeholder='John'
                onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
          </div>
          <div className='signup__input'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='choose a username'
              onChange={handleInputChange}
            />
          </div>
          <div className='signup__input'>
            <label htmlFor='password'>Password</label>
            <input
              type='text'
              name='password'
              id='password'
              placeholder='password'
              onChange={handleInputChange}
            />
          </div>
          <div className='signup__input'>
            <label htmlFor='passwordConfirm'>Confirm password</label>
            <input
              type='text'
              name='passwordConfirm'
              id='passwordConfirm'
              placeholder='confirm password'
              onChange={handleInputChange}
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
