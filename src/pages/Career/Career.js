import 'bootstrap/dist/css/bootstrap.min.css';
import './Career.css';
import { MdOutlineCloudUpload } from "react-icons/md";
import { SlArrowRight } from "react-icons/sl";
import React, { useState, useEffect, Component } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Placeholder } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveButtons } from '../../features/navbar/navbarSliceActions';
import { toggleMenu } from '../../features/navbar/navbarSliceReducer';
import axios from 'axios';
import { useCareersData } from '../../hooks/useCareersData';


function Career() {
    const dispatch = useDispatch();
    const isMenuOpen = useSelector((state) => state.navbar.isMenuOpen);
    const activeButtons = useSelector((state) => state.navbar.activeButtons);
    const { data: career } = useCareersData();
    const [careerHeader, setCareerHeader] = useState([]);// State for the current career header
    const [careerEmail, setCareerEmail] = useState('');// State for the current career Email

    // Fetch data when the component is mounted
    useEffect(() => {
        // Fetch career header
        if (career) {
            setCareerHeader(career.career_header)
            setCareerEmail(career.email)
        }

        // axios
        //     .get('http://localhost:3001/career/editCareer/careerHeader')
        //     .then((response) => {
        //         if (response.data?.careerHeader) {
        //             const header = response.data.careerHeader;
        //             // If it's a string, split it into an array by words
        //             const headerLines = Array.isArray(header) ? header : splitTextIntoLines(header);
        //             setCareerHeader(headerLines);
        //         }
        //     })
        //     .catch((error) => {
        //         console.error('There was an error fetching studio Detail!', error);
        //     });
        
        // // Fetch career email from the backend
        // axios
        //     .get('http://localhost:3001/career/editCareer/careerEmail')
        //     .then((response) => {
        //         if (response.data?.careerEmail) {
        //             setCareerEmail(response.data.careerEmail);
        //         }
        //     })
        //     .catch((error) => {
        //         console.error('There was an error fetching studio Detail!', error);
        //     });
    }, [career]);

    // Split career header text into lines for display
    const splitTextIntoLines = (text, wordsPerLine = 5) => {
        const words = text.split(' ');
        const lines = [];

        for (let i = 0; i < words.length; i += wordsPerLine) {
            lines.push(words.slice(i, i + wordsPerLine).join(' '));
        }

        return lines;
    };

    // State with object destructuring
    const [formData, setFormData] = useState({
        name: '',
        tel: '',
        mail: '',
        tellUs: '',
        portfolio: null
    });

    const [file, setFile] = useState(null); // This is correct

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (event) => {
        if (event.target.files[0]) { // Ensure there's at least one file
            setFile(event.target.files[0]);
        }
    };

    const handleFileClick = () => {
        document.getElementById('fileInput').click();
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Create a form data object to send the file
        //const data = new FormData();
        if (!file) {
            alert("Please upload a portfolio before submitting.");
            return;
        }

        if (file.size > 10 * 1024 * 1024) {
            alert("File size exceeds the 10MB limit. Please upload a smaller file.");
            return;
        }

        // Append other data
        // data.append("name", formData.name);
        // data.append("tel", formData.tel);
        // data.append("mail", formData.mail);
        // data.append("tellUs", formData.tellUs);


        // Send email
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "paperplaneproject24@gmail.com",
            Password : "8FEB2FB1AD2020C919D79F92D98CAAE22095",
            To: "paperplaneproject24@gmail.com",
            From: "paperplaneproject24@gmail.com",
            Subject: "Test Email",
            Body: "This is a test email from localhost.",
        }).then((message) => console.log("Email sent:", message))
          .catch((error) => console.error("Error sending email:", error));
        
        // const reader = new FileReader();
        // reader.onload = function () {
        //     Email.send({
        //         Host : "smtp.elasticemail.com",
        //         Username : "paperplaneproject24@gmail.com",
        //         Password : "8FEB2FB1AD2020C919D79F92D98CAAE22095",
        //         To: "paperplaneproject24@gmail.com", // Default fallback email
        //         // To: careerEmail || "company_email@example.com", // Default fallback email
        //         From: "paperplaneproject24@gmail.com", //sender email
        //         Subject: "New Career Application",
        //         Body: `
        //             <p><strong>Name:</strong> ${formData.name}</p>
        //             <p><strong>Tel:</strong> ${formData.tel}</p>
        //             <p><strong>Email:</strong> ${formData.mail}</p>
        //             <p><strong>Message:</strong> ${formData.tellUs}</p>
        //         `,
        //         Attachments: [
        //             {
        //                 name: file.name,
        //                 data: reader.result,
        //             },
        //         ],
        //     })
        //         .then((message) => {
        //             alert("Your application has been submitted successfully!");
        //             setFormData({
        //                 name: '',
        //                 tel: '',
        //                 mail: '',
        //                 tellUs: '',
        //             });
        //             setFile(null);
        //         })
        //         .catch((error) => {
        //             console.error("Error sending email:", error);
        //             alert("There was an error submitting your application. Please try again later.");
        //         });
        // };

        // reader.readAsDataURL(file);
    };

    useEffect(() => {
        if (!isMenuOpen) {
          dispatch(toggleMenu());
        }
        if (!activeButtons.includes('CAREER')) {
          dispatch(setActiveButtons('CAREER'));
        }
      }, [dispatch, isMenuOpen, activeButtons]);

    return (
        <div className="bg-black text-white font-montserrat max-h-screen min-w-screen p-5 mt-[3.5rem]">
            <div>
                {/* Career Header Display */}
                <div className="block w-2/4 text-[2vw] leading-normal mb-4">
                    {/* {careerHeader.map((line, index) => (
                        <p key={index} className="mb-[-0.5vw]">{line}</p>
                    ))} */}
                    <p className="mb-[-0.5vw]">{careerHeader}</p>
                    <a href={`mailto:${careerEmail}`} className="email-link">{careerEmail}</a>
                </div>
                <div className='space-height'></div>
                <form onSubmit={handleSubmit}>
                    <hr />
                    <Row>
                        <Col md={6} className="vertical-divider remove-right-padding">
                            <Row className="mb-3 align-items-center add-input-right-padding">
                                <Col sm={2}>
                                    <label htmlFor="name" className="form-label mt-2">Name</label>
                                </Col>
                                <Col sm={10}>
                                    <input type="text" className="form-control mt-2" id="name" name="name" value={formData.name} onChange={handleChange} />
                                </Col>
                            </Row>
                            <hr />
                            <Row className="mb-3 align-items-center add-input-right-padding">
                                <Col sm={2}>
                                    <label htmlFor="tel" className="form-label mt-2">Tel</label>
                                </Col>
                                <Col sm={10}>
                                    <input type="text" className="form-control mt-2" id="tel" name="tel" value={formData.tel} onChange={handleChange} />
                                </Col>
                            </Row>
                            <hr />
                            <Row className="mb-3 align-items-center add-input-right-padding">
                                <Col sm={2}>
                                    <label htmlFor="mail" className="form-label mt-2">Mail</label>
                                </Col>
                                <Col sm={10}>
                                    <input type="email" className="form-control mt-2" id="mail" name="mail" value={formData.mail} onChange={handleChange} />
                                </Col>
                            </Row>
                            <hr />
                            <Row className="mb-4 add-input-right-padding">
                                <Col sm={12}>
                                    <label htmlFor="tellUs" className="form-label mt-2">Anything to tell us?</label>
                                    <textarea type="text" className="form-control" style={{ height: '176.61px', resize: 'none'}} id="tellUs" name="tellUs" value={formData.tellUs} onChange={handleChange} />
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> {/* Second column also half the screen */}
                            <Row className="mb-3">
                                <Col md={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <Button onClick={handleFileClick} className="btn-upload" variant="none">
                                        + {/* Using a simple text "+" as the button content */}
                                    </Button>
                                    <label htmlFor="fileInput" className="form-label mt-3">Portfolio (Max 10Mb)</label>
                                    <input
                                        type="file"
                                        id="fileInput"
                                        onChange={handleFileChange}
                                        style={{ display: 'none' }} // Hide the actual input element
                                        required
                                    />
                                    {file && <span className="file-name">{file.name}</span>}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <hr />
                    <button type="submit" className="btn-submit float-end mt-4" variant="none">
                        <span className="ml-6">SUBMIT</span><SlArrowRight className="icon-right" />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Career;