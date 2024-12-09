import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../services/supabaseClient';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    
    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
          const { data, error } = await supabase.auth.signInWithPassword({
            email: username,
            password,
          });
    
          if (error) throw error;

          console.log('Login successful:', data);
    
          if (data.session) {
            navigate('/admin/home');
          } else {
            setError('No session found after login');
          }

        } catch (err) {
          console.error('Failed to Login:', err);
          setError(err.error_description || err.message);
        }
      };

    return (
        <div className="login-container bg-black min-h-screen flex items-center justify-center">
            <div className="login-box bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md text-black" // Added text-black here
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md text-black" // Added text-black here
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>

    );
};

export default AdminLogin;