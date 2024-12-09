import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../services/supabaseClient';


const AdminHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        navigate('/admin/login');
      }
    };

    checkSession();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
  
      if (error) throw error;
  
      // Clear any custom local state or storage
      localStorage.clear(); 
      sessionStorage.clear();
  
      console.log('Logout successful');
      navigate('/', { replace: true });

    } catch (err) {
      console.error('Error during logout:', err.message);
    }
  };

  const handleEditHome = () => {
    navigate('/editHome'); // Navigate to EditHome page
  };

  const handleEditStudio = () => {
    navigate('/editStudio'); // Navigate to EditStudio page
  };

  const handleEditProject = () => {
    navigate('/space'); // Navigate to EditProject page
  };

  return (
    <div className="admin-home bg-black min-h-screen flex flex-col items-center justify-center text-white">
      <h2 className="text-2xl font-bold mb-8">Admin Home</h2>
      <div className="flex flex-col space-y-4">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
        >
          Logout
        </button>
        <button
          onClick={handleEditHome}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Edit Home
        </button>
        <button
          onClick={handleEditStudio}
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
        >
          Edit Studio
        </button>
        <button
          onClick={handleEditProject}
          className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
        >
          Edit Project
        </button>
      </div>
    </div>
  );
};

export default AdminHome;
