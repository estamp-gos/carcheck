import React from "react";
import Head from 'next/head';
import HeaderTwo from "../src/components/HeaderTwo";
import FooterAreaTwo from "../src/components/FooterAreaTwo";

const ContactPage = () => {
    return (
        <>
            <Head>
                <title>Contact Us | Car Check Store</title>
                <meta name="description" content="Contact Car Check Store for any inquiries or support regarding our vehicle history reports." />
            </Head>

            <HeaderTwo />

            <div className="breadcumb-wrapper" style={{ backgroundImage: 'url(assets/img/bg/breadcumb-bg.jpg)', padding: '100px 0', textAlign: 'center', backgroundColor: '#1a1a2e', color: 'white' }}>
                <div className="container">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title" style={{ fontSize: '48px', fontWeight: '800', marginBottom: '10px' }}>Contact Us</h1>
                        <ul className="breadcumb-menu" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center', gap: '10px', fontSize: '16px', opacity: 0.8 }}>
                            <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
                            <li>/</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className="contact-area space" style={{ padding: '100px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contact-info-wrap" style={{ 
                                background: 'rgba(255, 255, 255, 0.05)', 
                                backdropFilter: 'blur(10px)', 
                                border: '1px solid rgba(0, 0, 0, 0.1)', 
                                borderRadius: '20px', 
                                padding: '40px',
                                height: '100%',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                            }}>
                                <h3 style={{ marginBottom: '30px', fontWeight: '700' }}>Get in Touch</h3>
                                
                                <div className="contact-info" style={{ marginBottom: '30px', display: 'flex', gap: '20px' }}>
                                    <div className="icon" style={{ 
                                        width: '50px', 
                                        height: '50px', 
                                        background: 'linear-gradient(135deg, #BE79DF 0%, #FBCFFC 100%)', 
                                        borderRadius: '12px', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                        color: 'white',
                                        flexShrink: 0
                                    }}>
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div>
                                        <h5 style={{ marginBottom: '5px', fontWeight: '600' }}>Email Us</h5>
                                        <p style={{ margin: 0, color: '#666' }}>info@historivin.store</p>
                                        <p style={{ margin: 0, color: '#666' }}>car.check.store@gmail.com</p>
                                    </div>
                                </div>

                                <div className="contact-info" style={{ marginBottom: '30px', display: 'flex', gap: '20px' }}>
                                    <div className="icon" style={{ 
                                        width: '50px', 
                                        height: '50px', 
                                        background: 'linear-gradient(135deg, #BE79DF 0%, #FBCFFC 100%)', 
                                        borderRadius: '12px', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                        color: 'white',
                                        flexShrink: 0
                                    }}>
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div>
                                        <h5 style={{ marginBottom: '5px', fontWeight: '600' }}>Our Location</h5>
                                        <p style={{ margin: 0, color: '#666' }}>2980 NE 207th St, Suite 300-189<br />Aventura, FL 33180 USA</p>
                                    </div>
                                </div>

                                <div className="contact-info" style={{ display: 'flex', gap: '20px' }}>
                                    <div className="icon" style={{ 
                                        width: '50px', 
                                        height: '50px', 
                                        background: 'linear-gradient(135deg, #BE79DF 0%, #FBCFFC 100%)', 
                                        borderRadius: '12px', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                        color: 'white',
                                        flexShrink: 0
                                    }}>
                                        <i className="fas fa-clock"></i>
                                    </div>
                                    <div>
                                        <h5 style={{ marginBottom: '5px', fontWeight: '600' }}>Office Hours</h5>
                                        <p style={{ margin: 0, color: '#666' }}>7 am - 6 pm EST<br />Monday - Friday</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="contact-form-wrap" style={{ padding: '0 40px' }}>
                                <h2 style={{ marginBottom: '20px', fontWeight: '800' }}>Send Us a Message</h2>
                                <p style={{ marginBottom: '40px', color: '#666' }}>Have questions about a report or need assistance? Fill out the form below and our team will get back to you shortly.</p>
                                
                                <form className="contact-form">
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <input type="text" className="form-control" placeholder="Your Name" style={{ 
                                                padding: '15px 20px', 
                                                borderRadius: '12px', 
                                                border: '1px solid #ddd',
                                                background: '#f9f9f9'
                                            }} />
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <input type="email" className="form-control" placeholder="Email Address" style={{ 
                                                padding: '15px 20px', 
                                                borderRadius: '12px', 
                                                border: '1px solid #ddd',
                                                background: '#f9f9f9'
                                            }} />
                                        </div>
                                        <div className="col-md-12 mb-4">
                                            <input type="text" className="form-control" placeholder="Subject" style={{ 
                                                padding: '15px 20px', 
                                                borderRadius: '12px', 
                                                border: '1px solid #ddd',
                                                background: '#f9f9f9'
                                            }} />
                                        </div>
                                        <div className="col-md-12 mb-4">
                                            <textarea className="form-control" rows="5" placeholder="Your Message" style={{ 
                                                padding: '15px 20px', 
                                                borderRadius: '12px', 
                                                border: '1px solid #ddd',
                                                background: '#f9f9f9'
                                            }}></textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <button type="submit" className="btn" style={{ 
                                                background: 'linear-gradient(135deg, #BE79DF 0%, #FBCFFC 100%)', 
                                                color: 'white', 
                                                padding: '15px 40px', 
                                                borderRadius: '50px', 
                                                fontWeight: '700',
                                                border: 'none',
                                                boxShadow: '0 10px 20px rgba(190, 121, 223, 0.3)'
                                            }}>
                                                Send Message <i className="fas fa-paper-plane ms-2"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterAreaTwo />
            
            <style jsx>{`
                .breadcumb-wrapper {
                    position: relative;
                    overflow: hidden;
                }
                .breadcumb-title {
                    font-family: 'Poppins', sans-serif;
                }
                .contact-form .form-control:focus {
                    outline: none;
                    border-color: #BE79DF;
                    box-shadow: 0 0 0 3px rgba(190, 121, 223, 0.1);
                }
            `}</style>
        </>
    );
};

export default ContactPage;
