import React, { Component } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import Space from '../pages/work/Space';
import Studio from '../features/Studio/StudioComponent';
import Career from '../features/Career/CareerComponent';
import ContactUs from '../features/ContactUs/ContactUsComponent';
import { motion, AnimatePresence } from "framer-motion";


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            whiteLogo: '/images/navbar/logo/logo-white.png',
            blackLogo: '/images/navbar/logo/logo-home.png',
            buttons: [
                'About',
                'Selected Works',
                'Careers',
                'Contact'
            ],
            selectedWorks: [
                'Space',
                'Object'
            ],
            selectedIndex: null,
            selectedWorksIndex: null,
            underlineY: 0,
            prevSelectedIndex: null,
            modalVariants: {
                hidden: {
                    y: '-100vh',
                },
                visible: {
                    y: 0,
                    transition: {
                        type: 'tween',
                        duration: 1,
                    },
                },
                exit: {
                    y: '-100vh',
                    transition: {
                        type: 'tween',
                        duration: 1,
                        delay: 0,
                    },
                },
            }
        };
        this.buttonRefs = [];
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        const { selectedIndex } = this.state;
        if (selectedIndex !== null) {
            this.updateUnderlinePosition(selectedIndex);
        }
    };

    toggleOpen = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen,
            selectedIndex: null,
            underlineY: 0,
            prevSelectedIndex: null
        }));
    };

    handleButtonClick = (index) => {
        if (this.state.selectedIndex === index) {
            return;
        }

        this.setState(prevState => ({
            selectedIndex: index,
            prevSelectedIndex: prevState.selectedIndex,
            selectedWorksIndex: index === 1 ? 0 : null
        }), () => {
            if (index === 1) {
                this.updateUnderlinePosition(0, true);
            } else {
                this.updateUnderlinePosition(index);
            }
        });
    };

    handleSelectedWorksClick = (index) => {
        if (this.state.selectedWorksIndex === index) {
            return;
        }

        this.setState(prevState => ({
            selectedWorksIndex: index,
            prevSelectedIndex: prevState.selectedIndex,
        }), () => {
            this.updateUnderlinePosition(index, true);
        });
    };

    updateUnderlinePosition = (index, isSubItem = false) => {
        const button = isSubItem ? this.buttonRefs['works-' + index] : this.buttonRefs[index];
        if (button) {
            const underlineY = button.offsetTop + button.clientHeight - 2;
            this.setState({ underlineY });
        }
    };

    closeToggle = () => {
        this.setState({ isOpen: false });
    };


    render() {
        const { isOpen, whiteLogo, blackLogo, buttons, selectedIndex, underlineY, selectedWorks, selectedWorksIndex, modalVariants } = this.state;
        return (
            <div>
                <section id='nav-home'>
                    <div className='h-28'>
                        <nav className='fixed flex flex-wrap justify-between items-center z-20 w-full ml-6 my-4 pr-9'>
                            <a href='http://localhost:3000/' className='inline-block'>
                                <img src={isOpen ? whiteLogo : blackLogo} alt='Home Logo' className='max-w-58px max-h-80px' />
                            </a>
                            <p className={`font-montserrat font-size-nav-bar font-normal m-0 ${isOpen ? 'text-white' : 'text-black'}`}>PAPER PLANE PROJECT STUDIO</p>
                            <div className='z-10'><Hamburger toggled={isOpen} size={20} toggle={this.toggleOpen} color={isOpen ? 'white' : 'black'} /></div>
                        </nav>
                    </div>
                    <div style={{ color: isOpen ? 'white' : 'black' }}>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div variants={modalVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit" className='fixed flex top-0 w-full h-full bg-black z-10'>
                                    <ul className={`relative flex flex-col space-y-4 font-montserrat font-size-nav-bar font-normal pl-6 pt-36 `}>
                                        {buttons.map((buttonLabel, index) => (
                                            <li key={index} className="relative">
                                                {selectedIndex === index && (
                                                    <span
                                                        className="block absolute h-[2px] bg-white ease transition-all w-52 duration-700"
                                                        style={{
                                                            transform: `translateY(${underlineY}px)`,
                                                        }}
                                                    ></span>
                                                )}
                                                <button
                                                    ref={el => this.buttonRefs[index] = el}
                                                    onClick={() => this.handleButtonClick(index)}
                                                    className={`relative cursor-pointer transition-all ease-in-out 
                                                    before:transition-[width] before:ease-in-out before:duration-700 
                                                    before:absolute before:bg-white before:origin-left before:h-[2px] 
                                                    before:w-0 hover:before:w-52 before:bottom-0 before:left-0
                                                    `}
                                                >
                                                    {buttonLabel}
                                                </button>
                                                {selectedIndex === 1 && index === 1 && (
                                                    <div className="flex flex-col mt-3 ml-12 space-y-4">
                                                        {selectedWorks.map((workLabel, workIndex) => (
                                                            <div key={workIndex} className="relative">
                                                                {(selectedWorksIndex === workIndex) && (
                                                                    <span
                                                                        className="block absolute h-[2px] bg-white ease transition-all w-52 duration-700"
                                                                        style={{
                                                                            transform: `translateY(${underlineY}px)`,
                                                                        }}
                                                                    ></span>
                                                                )}
                                                                <button
                                                                    ref={el => this.buttonRefs['works-' + workIndex] = el}
                                                                    onClick={() => this.handleSelectedWorksClick(workIndex)}
                                                                    className={`relative cursor-pointer transition-all ease-in-out 
                                                                    before:transition-[width] before:ease-in-out before:duration-700 
                                                                    before:absolute before:bg-white before:origin-left before:h-[2px] 
                                                                    before:w-0 hover:before:w-52 before:bottom-0 before:left-0
                                                                    `}
                                                                    
                                                                >
                                                                    {workLabel}
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                    <div>
                                        {selectedWorksIndex === 0 && (
                                          
                                                <div className='absolute left-80 top-36'>
                                                    <Space closeToggle={this.closeToggle} />
                                                </div>
  
                                        )}
                                        {selectedIndex === 0 && (
                                            
                                                <div className='absolute left-80 top-36'>
                                                    <Studio />
                                                </div>
                                           
                                        )}
                                        {selectedIndex === 2 && (
                                            
                                                <div className='absolute left-80 top-36'>
                                                    <Career />
                                                </div>
                                           
                                        )}
                                        {selectedIndex === 3 && (
                                          
                                                <div className='absolute left-80 top-36'>
                                                    <ContactUs />
                                                </div>
                                            
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </section>
            </div>
        );
    }
}

export default NavBar;
