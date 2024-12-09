import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useStudioData } from '../../hooks/useStudioData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditStudio = () => {
    const { data: studio, updateDetail, updateImage } = useStudioData();
    const imageInputRef = useRef(null);
    const [studioImage, setStudioImage] = useState(null); // State for the current studio image
    const [studioDetail, setStudioDetail] = useState(''); // State for current studio details
    const [newStudioDetail, setNewStudioDetail] = useState(''); // State for new details input
    const [selectedImage, setSelectedImage] = useState(null); // For image upload

    // Fetch data when the component is mounted
    useEffect(() => {
        if (studio) {
            setStudioImage(studio.image);
            setStudioDetail(studio.detail);
        }
        // Fetch studio image from the backend
        // axios
        //     .get('http://localhost:3001/studio/editStudio/image')
        //     .then((response) => {
        //         if (response.data?.image) {
        //             setStudioImage(response.data.image);
        //         }
        //     })
        //     .catch((error) => {
        //         console.error('There was an error fetching studio Image!', error);
        //     });

        // // Fetch studio detail from the backend
        // axios
        //     .get('http://localhost:3001/studio/editStudio/detail')
        //     .then((response) => {
        //         if (response.data?.details) {
        //             setStudioDetail(response.data.details);
        //         }
        //     })
        //     .catch((error) => {
        //         console.error('There was an error fetching studio Detail!', error);
        //     });
    }, [studio]);

    // Handle image change
    const handleImageChange = (e) => {
        setSelectedImage(e.target.files[0]);
    };

    // Handle uploading the new image
    const handleImageUpload = async () => {
        try {
            if (selectedImage) {
                await updateImage(selectedImage);
                toast.success('Image added successfully!');
                setSelectedImage(null);
                imageInputRef.current.value = '';
            } else {
                toast.error('Please select an image!');
            }
        } catch (err) {
            toast.error('Failed to add image.');
        }
    };

    // Handle new detail submission
    const handleDetailUpdate = async () => {
        if (!newStudioDetail) {
            console.error('No new detail provided');
            return;
        }
        try {
            await updateDetail(newStudioDetail);
            toast.success('Studio detail updated successfully!');
            setNewStudioDetail("");
        } catch (err) {
            toast.error('Failed to update studio detail.');
        }
    };


    return (
        <div className="bg-black text-white font-montserrat max-h-screen min-w-screen p-14 mt-14">
            <ToastContainer />
            <div className="container mx-auto">
                {/* Image Section */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg py-8 mr-4">
                    <h2 className="text-2xl font-bold mb-4">Current Studio Image</h2>
                    {studioImage ? (
                        <div className="mt-4">
                            <img
                                src={studioImage}
                                alt="Studio"
                                className="w-64 h-64 object-cover rounded-lg border border-gray-500"
                            />
                        </div>
                    ) : (
                        <p className="text-gray-400">No image available.</p>
                    )}
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-2">Upload New Image</h3>
                        <input type="file" ref={imageInputRef} onChange={handleImageChange} className="block mb-4" />
                        <button
                            onClick={handleImageUpload}
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                            disabled={!selectedImage}
                        >
                            Upload Image
                        </button>
                    </div>
                </div>

                {/* Detail Section */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Current Studio Details</h2>
                    {studioDetail ? (
                        <p className="text-gray-300 mb-4">{studioDetail}</p>
                    ) : (
                        <p className="text-gray-400 mb-4">No details available.</p>
                    )}

                    <h3 className="text-xl font-semibold mb-2">Update Studio Details</h3>
                    <textarea
                        value={newStudioDetail}
                        onChange={(e) => setNewStudioDetail(e.target.value)}
                        placeholder="Enter new studio details here"
                        className="w-full p-2 bg-gray-700 text-white rounded-md mb-4"
                        rows={5}
                    />
                    <button
                        onClick={handleDetailUpdate}
                        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                        disabled={!newStudioDetail}
                    >
                        Update Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditStudio;