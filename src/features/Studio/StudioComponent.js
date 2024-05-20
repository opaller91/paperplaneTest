import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { SlClose } from "react-icons/sl";

class StudioComponent extends Component {
    render() {
        return (
            <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'black', color: 'white', padding: '40px', minWidth: '100vw' }}>
                {/* Left Navigation Bar - Already existing */}
                {/* This part is assumed to be already created and included in the parent component */}

                {/* Right Content Section */}
                <div style={{ marginLeft: '200px', flexGrow: 1 , marginTop: '30px'}}>
                    {/* Top Header with Company Name and Close Icon */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <h2 style={{ fontFamily: 'Montserrat', fontSize: '24px', fontWeight: 400, textAlign: 'center', flex: 1 }}>PAPER PLANE PROJECT STUDIO</h2>
                        <SlClose style={{ cursor: 'pointer', fontSize: '24px', color: 'white' }} />
                    </div>

                    {/* Main Content Area */}
                    <div style={{ display: 'flex', marginTop: '41px', flexWrap: 'wrap' }}>
                        {/* Left Content Section (Header and Main Content) */}
                        <div style={{ display: 'flex', flexDirection: 'column', marginRight: '30px', flex: '1 1 600px' }}>
                            {/* Header */}
                            <header style={{ marginBottom: '40px', width: '100%', maxWidth: '666px' }}>
                                <h1 style={{ fontFamily: 'Montserrat', fontSize: '64px', fontWeight: 400, lineHeight: '78.02px', textAlign: 'left' }}>
                                    Bring your vision into being
                                </h1>
                            </header>

                            {/* Main Content */}
                            <div style={{ flexGrow: 1, fontFamily: 'Montserrat', fontSize: '16px', fontWeight: 400, lineHeight: 1.5, textAlign: 'left', width: '100%', maxWidth: '654px' }}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et laoreet nulla.
                                    Praesent ultricies, leo vel convallis mollis, ante nunc interdum sapien, id fringilla augue justo ut dui.
                                    Curabitur tempor, libero non egestas ultricies, ex lacus rutrum odio, id hendrerit justo neque congue leo.
                                    Suspendisse gravida mi ut sem vulputate, et luctus tortor lobortis. Etiam vulputate at leo nec maximus.
                                    Integer facilisis urna ac lectus tempor lobortis vitae at ante. Integer semper non magna at sodales.
                                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                    In lobortis volutpat augue eget porta. Phasellus imperdiet cursus aliquam.
                                </p>
                                <p>
                                    Sed laoreet maximus dolor. Donec lacinia imperdiet ultricies. Nam mauris est,
                                    ultricies at tortor vitae, luctus interdum lorem. Proin et interdum risus.
                                    Proin id turpis eget dui dictum dictum. Pellentesque commodo lectus ante, pulvinar sagittis sapien luctus a.
                                    Pellentesque sed dolor rutrum, malesuada augue in, pellentesque eros.
                                    Nullam ac mattis arcu, sed dignissim tellus. Nullam sit amet risus semper urna maximus bibendum.
                                    Aliquam mollis convallis risus et ultricies. Nulla facilisi.
                                </p>
                                <p>
                                    Nullam imperdiet neque purus, non hendrerit eros pellentesque id.
                                    Ut sed leo sed justo dignissim faucibus. Morbi vel orci vel urna ultricies pretium.
                                    Aliquam luctus sollicitudin massa, eget sollicitudin justo tincidunt pellentesque.
                                    Etiam in mauris a ligula accumsan faucibus. Nulla feugiat enim ac metus hendrerit,
                                    ac commodo ligula rutrum. Etiam ultricies nibh at turpis tristique,
                                    ac posuere ante pharetra. Fusce eget sapien et turpis suscipit elementum.
                                    Nam diam urna, scelerisque nec purus nec, semper suscipit arcu.
                                    Etiam molestie rutrum nisi, quis ullamcorper orci fringilla vitae. Duis quis consequat arcu.
                                    Aliquam maximus maximus justo.
                                </p>
                            </div>
                        </div>

                        {/* Right Gray Box (Studio Picture) */}
                        <div style={{
                            flex: '1 1 600px',
                            width: '100%',
                            maxWidth: '913px',
                            height: '885px',
                            backgroundColor: '#d3d3d3',
                            marginRight: '40px'
                        }}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudioComponent;
