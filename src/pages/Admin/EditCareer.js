import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCareersData } from '../../hooks/useCareersData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditCareer = () => {
    const { data: career, updateCareerHeader, updateCareerEmail } = useCareersData();
    const [careerHeader, setCareerHeader] = useState(''); // State for the current career header
    const [careerEmail, setCareerEmail] = useState(''); // State for the current career email
    const [newCareerHeader, setNewCareerHeader] = useState(''); // State for new header input
    const [newCareerEmail, setNewCareerEmail] = useState(''); // State for new email input

    useEffect(() => {
        if (career) {
            setCareerHeader(career.career_header)
            setCareerEmail(career.email)
        }
        // // Fetch the current career header
        // axios
        //     .get('http://localhost:3001/career/editCareer/careerHeader')
        //     .then((response) => {
        //         if (response.data?.careerHeader) {
        //             setCareerHeader(response.data.careerHeader);
        //         }
        //     })
        //     .catch((error) => {
        //         console.error('There was an error fetching the career header!', error);
        //     });

        // // Fetch the current career email
        // axios
        //     .get('http://localhost:3001/career/editCareer/careerEmail')
        //     .then((response) => {
        //         if (response.data?.careerEmail) {
        //             setCareerEmail(response.data.careerEmail);
        //         }
        //     })
        //     .catch((error) => {
        //         console.error('There was an error fetching the career email!', error);
        //     });
    }, [career]);

    // Handle new header submission
    // const handleHeaderUpdate = async () => {
    //     if (!newCareerHeader) {
    //         console.error('No new header provided');
    //         return;
    //     }

    //     try {
    //         const response = await axios.post('http://localhost:3001/career/editCareer/careerHeader', {
    //             careerHeader: newCareerHeader,
    //         });
    //         console.log('Career header updated successfully:', response.data);
    //         setCareerHeader(newCareerHeader); // Update the displayed header
    //         setNewCareerHeader(''); // Clear the input field
    //     } catch (error) {
    //         console.error('There was an error updating the career header:', error);
    //     }
    // };

    // // Handle new email submission
    // const handleEmailUpdate = async () => {
    //     if (!newCareerEmail) {
    //         console.error('No new email provided');
    //         return;
    //     }

    //     try {
    //         const response = await axios.post('http://localhost:3001/career/editCareer/careerEmail', {
    //             careerEmail: newCareerEmail,
    //         });
    //         console.log('Career email updated successfully:', response.data);
    //         setCareerEmail(newCareerEmail); // Update the displayed email
    //         setNewCareerEmail(''); // Clear the input field
    //     } catch (error) {
    //         console.error('There was an error updating the career email:', error);
    //     }
    // };

    const handleHeaderUpdate = async () => {
        if (!newCareerHeader) {
            console.error('No new header provided');
            return;
        }
        try {
          await updateCareerHeader(newCareerHeader);
          toast.success('Career header updated successfully!');
          setNewCareerHeader("");
        } catch (error) {
          toast.error('Failed to update career header');
          console.error("Error updating header:", error);
        }
      };
    
      const handleEmailUpdate = async () => {
        if (!newCareerEmail) {
            console.error('No new email provided');
            return;
        }
        try {
          await updateCareerEmail(newCareerEmail);
          toast.success('Career email updated successfully!');
          setNewCareerEmail("");
        } catch (error) {
          toast.error('Failed to update career email');
          console.error("Error updating email:", error);
        }
      };

    return (
        <div className="bg-black text-white font-montserrat min-h-screen w-full p-14 mt-14">
            <ToastContainer />
            <div className="mx-auto space-y-12">
                {/* Career Header Section */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-bold mb-4">Current Career Header</h2>
                    {careerHeader ? (
                        <p className="text-gray-300 mb-4">{careerHeader}</p>
                    ) : (
                        <p className="text-gray-400 mb-4">No career header available.</p>
                    )}

                    <h3 className="text-xl font-semibold mb-2">Update Career Header</h3>
                    <input
                        type="text"
                        value={newCareerHeader}
                        onChange={(e) => setNewCareerHeader(e.target.value)}
                        placeholder="Enter new career header"
                        className="w-full p-2 bg-gray-700 text-white rounded-md mb-4"
                    />
                    <button
                        onClick={handleHeaderUpdate}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                        disabled={!newCareerHeader}
                    >
                        Update Header
                    </button>
                </div>

                {/* Career Email Section */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Current Career Email</h2>
                    {careerEmail ? (
                        <p className="text-gray-300 mb-4">{careerEmail}</p>
                    ) : (
                        <p className="text-gray-400 mb-4">No career email available.</p>
                    )}

                    <h3 className="text-xl font-semibold mb-2">Update Career Email</h3>
                    <input
                        type="text"
                        value={newCareerEmail}
                        onChange={(e) => setNewCareerEmail(e.target.value)}
                        placeholder="Enter new career email"
                        className="w-full p-2 bg-gray-700 text-white rounded-md mb-4"
                    />
                    <button
                        onClick={handleEmailUpdate}
                        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                        disabled={!newCareerEmail}
                    >
                        Update Email
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditCareer;