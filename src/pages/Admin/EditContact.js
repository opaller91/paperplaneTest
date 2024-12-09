import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useContactData } from '../../hooks/useContactData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditContact = () => {
    const { data: contact, updateContactHeader, updateContactLocation, updateContactTel, updateContactEmail, updateContactDescription } = useContactData();
    const [contactHeader, setContactHeader] = useState(''); // State for the current contact header
    const [contactLocation, setContactLocation] = useState(''); // State for the current contact location
    const [contactTel, setContactTel] = useState(''); // State for the current contact telephone
    const [contactEmail, setContactEmail] = useState(''); // State for the current contact email
    const [contactDescription, setContactDescription] = useState(''); // State for the current contact description

    // States for new input
    const [newContactHeader, setNewContactHeader] = useState('');
    const [newContactLocation, setNewContactLocation] = useState('');
    const [newContactTel, setNewContactTel] = useState('');
    const [newContactEmail, setNewContactEmail] = useState('');
    const [newContactDescription, setNewContactDescription] = useState('');

    useEffect(() => {
        if (contact) {
            setContactHeader(contact.contact_header);
            setContactLocation(contact.location);
            setContactTel(contact.telephone);
            setContactEmail(contact.email);
            setContactDescription(contact.description);
        }
    }, [contact]);

    const handleUpdateContactHeader = async () => {
        if (!newContactHeader) {
            console.error('Please enter a new contact header');
            return;
        }
        try {
          await updateContactHeader(newContactHeader);
          setContactHeader(newContactHeader);
          setNewContactHeader('');
          toast.success('Contact header updated successfully!');
        } catch (error) {
          toast.error('Failed to update contact header');
          console.error('Error updating contact header:', error);
        }
      };
    
    const handleUpdateContactLocation = async () => {
        if (!newContactLocation) {
            console.error('Please enter a new contact location');
            return;
        }
        try {
          await updateContactLocation(newContactLocation);
          setContactLocation(newContactLocation);
          setNewContactLocation('');
          toast.success('Contact location updated successfully!');
        } catch (error) {
          toast.error('Failed to update contact location');
          console.error('Error updating contact location:', error);
        }
      };

    const handleUpdateContactTel = async () => {
        if (!newContactTel) {
            console.error('Please enter a new contact telephone');
            return;
        }
        try {
          await updateContactTel(newContactTel);
          setContactTel(newContactTel);
          setNewContactTel('');
          toast.success('Contact telephone updated successfully!');
        } catch (error) {
          toast.error('Failed to update contact telephone');
          console.error('Error updating contact telephone:', error);
        }
      };

    const handleUpdateContactEmail = async () => {
        if (!newContactEmail) {
            console.error('Please enter a new contact email');
            return;
        }
        try {
          await updateContactEmail(newContactEmail);
          setContactEmail(newContactEmail);
          setNewContactEmail('');
          toast.success('Contact email updated successfully!');
        } catch (error) {
          toast.error('Failed to update contact email');
          console.error('Error updating contact email:', error);
        }
      };
    
    const handleUpdateContactDescription = async () => {
        if (!newContactDescription) {
            console.error('Please enter a new contact description');
            return;
        }
        try {
          await updateContactDescription(newContactDescription);
          setContactDescription(newContactDescription);
          setNewContactDescription('');
          toast.success('Contact description updated successfully!');
        } catch (error) {
          toast.error('Failed to update contact description');
          console.error('Error updating contact description:', error);
        }
    };

    return (
        <div className="bg-black text-white font-montserrat min-h-screen w-full p-14 mt-14">
            <ToastContainer />
            <div className=" mx-auto space-y-12">
                {/* Contact Header Section */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-bold mb-4">Current Contact Header</h2>
                    <p className="text-gray-300 mb-4">{contactHeader || 'No contact header available.'}</p>
                    <input
                        type="text"
                        value={newContactHeader}
                        onChange={(e) => setNewContactHeader(e.target.value)}
                        placeholder="Update contact header"
                        className="w-full p-2 bg-gray-700 text-white rounded-md mb-4"
                    />
                    <button
                        onClick={handleUpdateContactHeader}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                        Update Header
                    </button>
                </div>

                {/* Contact Location Section */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-bold mb-4">Current Contact Location</h2>
                    <p className="text-gray-300 mb-4">{contactLocation || 'No contact location available.'}</p>
                    <input
                        type="text"
                        value={newContactLocation}
                        onChange={(e) => setNewContactLocation(e.target.value)}
                        placeholder="Update contact location"
                        className="w-full p-2 bg-gray-700 text-white rounded-md mb-4"
                    />
                    <button
                        onClick={handleUpdateContactLocation}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                        Update Location
                    </button>
                </div>

                {/* Contact Telephone Section */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-bold mb-4">Current Contact Telephone</h2>
                    <p className="text-gray-300 mb-4">{contactTel || 'No contact telephone available.'}</p>
                    <input
                        type="text"
                        value={newContactTel}
                        onChange={(e) => setNewContactTel(e.target.value)}
                        placeholder="Update contact telephone"
                        className="w-full p-2 bg-gray-700 text-white rounded-md mb-4"
                    />
                    <button
                        onClick={handleUpdateContactTel}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                        Update Telephone
                    </button>
                </div>

                {/* Contact Email Section */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-bold mb-4">Current Contact Email</h2>
                    <p className="text-gray-300 mb-4">{contactEmail || 'No contact email available.'}</p>
                    <input
                        type="email"
                        value={newContactEmail}
                        onChange={(e) => setNewContactEmail(e.target.value)}
                        placeholder="Update contact email"
                        className="w-full p-2 bg-gray-700 text-white rounded-md mb-4"
                    />
                    <button
                        onClick={handleUpdateContactEmail}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                        Update Email
                    </button>
                </div>

                {/* Contact Description Section */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-bold mb-4">Current Contact Description</h2>
                    <p className="text-gray-300 mb-4">{contactDescription || 'No contact description available.'}</p>
                    <textarea
                        value={newContactDescription}
                        onChange={(e) => setNewContactDescription(e.target.value)}
                        placeholder="Update contact description"
                        className="w-full p-2 bg-gray-700 text-white rounded-md mb-4"
                        rows={5}
                    />
                    <button
                        onClick={handleUpdateContactDescription}
                        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                    >
                        Update Description
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditContact;