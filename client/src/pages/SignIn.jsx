import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function SignIp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative">
          <img
            src="https://i.postimg.cc/hjH0FvdV/Picsart-23-11-05-16-25-55-767.jpg"
            alt="img"
            className="w-[390px] h-[550px] hidden rounded-r-2xl rounded-l-2xl md:block object-cover"/>
        </div>
      <div
        className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Welcome!</span>
          <span className="font-light text-gray-400 mb-8">
            Sign In Please enter your details
          </span>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <input
        type='email'
        placeholder='Email'
        className='border p-3 rounded-lg'
        id='email'
        onChange={handleChange}
      />
      <input
        type='password'
        placeholder='Password'
        className='border p-3 rounded-lg'
        id='password'
        onChange={handleChange}
      />

      <button
        disabled={loading}
        className='bg-black text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
      >
        {loading ? 'Loading...' : 'Sign In'}
      </button>
      
    </form>
          <button
            className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-slate-600"
          >
            <img src="https://www.salesforceben.com/wp-content/uploads/2021/03/google-logo-icon-PNG-Transparent-Background-2048x2048.png" alt="img" className="w-6 h-6 inline mr-2" />
            Sign in with Google
          </button>
          <div className='flex gap-2 mt-5'>
      <p>Do not have an account?</p>
      <Link to={'/sign-up'}>
        <span className='text-slate-800  hover:text-blue-500'>Sign Up</span>
      </Link>
    </div>
        </div>

    {error && <p className='text-red-500 mt-5'>{error}</p>}
  </div>
          </div>
     
  );
}