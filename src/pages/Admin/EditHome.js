import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHomeData } from '../../hooks/useHomeData';
import { setImagesCarousel } from '../../features/image-carousel/imageCarouselActions';
import { setLogosCarousel } from '../../features/logo-carousel/logoCarouselActions';
import { setHomeDescription } from '../../features/home-slice/homeSliceActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './EditHome.css';  // Scoped CSS

const EditHome = () => {
    const dispatch = useDispatch();
    const { data: homepage,
            images, 
            logos, 
            addImage, 
            removeImage, 
            updateDescription, 
            addLogo, 
            removeLogo 
    } = useHomeData();
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedLogo, setSelectedLogo] = useState(null);
    const [newDescription, setNewDescription] = useState("");
    const imageInputRef = useRef(null);
    const logoInputRef = useRef(null);

    useEffect(() => {
        if (homepage) {
            dispatch(setImagesCarousel(homepage.carousel_images))
            dispatch(setLogosCarousel(homepage.carousel_logos))
            dispatch(setHomeDescription(homepage.description))
        }
    }, [homepage, dispatch]);

    const handleImageChange = (e) => {
        setSelectedImage(e.target.files[0]);
    };

    const handleLogoChange = (e) => {
        setSelectedLogo(e.target.files[0]);
    };

    const handleAddImage = async () => {
        try {
            if (selectedImage) {
                await addImage(selectedImage);
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

    const handleRemoveImage = async (image) => {
        try {
            await removeImage(image);
            toast.success('Image removed successfully!');
        } catch (err) {
            toast.error('Failed to remove image.');
        }
    };

    const handleAddLogo = async () => {
        try {
            if (selectedLogo) {
                await addLogo(selectedLogo);
                toast.success('Logo added successfully!');
                setSelectedLogo(null);
                logoInputRef.current.value = '';
            } else {
                toast.error('Please select a logo!');
            }
        } catch (err) {
            toast.error('Failed to add logo.');
        }
    };

    const handleRemoveLogo = async (logo) => {
        try {
            await removeLogo(logo);
            toast.success('Logo removed successfully!');
        } catch (err) {
            toast.error('Failed to remove logo.');
        }
    };

    const handleUpdateDescription = async () => {
        try {
            await updateDescription(newDescription);
            toast.success('Home description updated successfully!');
            setNewDescription("");
        } catch (err) {
            toast.error('Failed to update home description.');
        }
    };

    return (
        <div className="bg-black text-white font-montserrat min-h-screen w-full p-14 mt-14">
            <ToastContainer />
            <div className="space-y-12">
                {/* Image Carousel Section */}
                <div>
                    <h2 className="text-3xl font-bold mb-6">Image Carousel</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {images.map((image, index) => (
                            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg relative">
                                <img
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-40 object-cover rounded-md"
                                />
                                <button
                                    onClick={() => handleRemoveImage(image)}
                                    className="absolute top-1 right-2 font-medium text-red-500"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4">
                        <input
                            type="file"
                            ref={imageInputRef}
                            onChange={handleImageChange}
                            className="pl-6 py-1.5 border border-gray-700 bg-gray-800 text-white rounded-lg"
                        />
                        <button
                            onClick={handleAddImage}
                            className="ml-4 p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200"
                        >
                            Add Image
                        </button>
                    </div>
                </div>

                {/* Logo Carousel Section */}
                <div>
                    <h2 className="text-3xl font-bold mb-6">Logo Carousel</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {logos.map((logo, index) => (
                            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg relative">
                                <img
                                    src={logo}
                                    alt={`Logo ${index + 1}`}
                                    className="w-full h-40 object-cover rounded-md"
                                />
                                <button
                                    onClick={() => handleRemoveLogo(logo)}
                                    className="absolute top-1 right-2 font-medium text-red-500"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4">
                        <input
                            type="file"
                            ref={logoInputRef}
                            onChange={handleLogoChange}
                            className="pl-6 py-1.5 border border-gray-700 bg-gray-800 text-white rounded-lg"
                        />
                        <button
                            onClick={handleAddLogo}
                            className="ml-4 p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200"
                        >
                            Add Logo
                        </button>
                    </div>
                </div>

                {/* Home Description Section */}
                <div>
                     <h3 className="text-xl font-semibold mb-2">Update Home Description</h3>
                    <textarea
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        placeholder="Enter new home description here"
                        className="w-full p-2 bg-gray-700 text-white rounded-md mb-4"
                        rows={5}
                    />
                    <button
                        onClick={handleUpdateDescription}
                        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                        disabled={!newDescription}
                    >
                        Update Details
                    </button>
                </div>
            </div>
        </div>

    );
};



export default EditHome;