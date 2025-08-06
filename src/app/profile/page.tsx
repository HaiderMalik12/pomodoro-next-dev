'use client'
import { fetchWithAuth } from "@/lib/api";
import { useEffect, useState } from "react";

const ProfilePage = () => {
 const [email, setEmail] = useState('');

  useEffect(() => {
    fetchWithAuth(`${process.env.NEXT_PUBLIC_API_URL}/auth/profile`)
      .then((data) => setEmail(data.email))
      .catch(() => setEmail('Not authenticated'));
  }, []);


  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <div className="mb-6 text-center text-2xl font-bold text-gray-800">Profile</div>
        {/* Profile content goes here */}
        <div className="text-gray-700">
          <p className="mb-4">Email: {email}</p>
          {/* Add more profile details as needed */}    
          </div>
      </div>
    </div>
  );
}

export default ProfilePage;