import React, { useState } from 'react';
import './App.css';



const Form = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [cnfPassword, setCnfPassword] = useState('');

const handleSubmit = (e) => {
e.preventDefault();

if (password !== cnfPassword) {
alert('Please re-type the password and confirm password must be same');
return;
}

alert('Thank you for Sign-Up!');
};

return (
<>
<div className='form'>
<form onSubmit={handleSubmit}>
<label>Email</label>
<br />
<input
type='text'
className='email'
placeholder='Enter Email'
onChange={(e) => setEmail(e.target.value)}
required
/>
<br />
<label>Password</label>
<br />
<input
type='password'
className='password'
placeholder='Enter Password'
onChange={(e) => setPassword(e.target.value)}
required
/>
<br />
<label>Confirm Password</label>
<br />
<input
type='password'
className='cnfPassword'
placeholder='Enter Confirm Password'
onChange={(e) => setCnfPassword(e.target.value)}
required
/>
<br />
<button type='submit' className='btn'>Signup</button>
</form>
</div>
</>
);
};

export default Form;
