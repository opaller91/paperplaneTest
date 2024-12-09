import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../services/supabaseClient';

const PrivateRoute = ({ children }) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    };

    getSession();

    const { data: subscription } = supabase.auth.onAuthStateChange(() => {
      getSession();
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default PrivateRoute;
