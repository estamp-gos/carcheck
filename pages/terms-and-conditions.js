import React from "react";
import Head from 'next/head';
import HeaderTwo from "../src/components/HeaderTwo";
import FooterAreaTwo from "../src/components/FooterAreaTwo";

const TermsAndConditions = () => {
    return (
        <>
            <Head>
                <title>Terms & Conditions | Car Check Store</title>
                <meta name="description" content="Terms and conditions for using Car Check Store services." />
            </Head>

            <HeaderTwo />

            <div className="breadcumb-wrapper" style={{ backgroundImage: 'url(assets/img/bg/breadcumb-bg.jpg)', padding: '100px 0', textAlign: 'center', backgroundColor: '#1a1a2e', color: 'white' }}>
                <div className="container">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title" style={{ fontSize: '48px', fontWeight: '800', marginBottom: '10px' }}>Terms & Conditions</h1>
                        <ul className="breadcumb-menu" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center', gap: '10px', fontSize: '16px', opacity: 0.8 }}>
                            <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
                            <li>/</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className="space" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="terms-content" style={{ lineHeight: '1.8', color: '#444' }}>
                                <h2 style={{ color: '#1a1a2e', marginBottom: '20px' }}>1. Introduction</h2>
                                <p>Welcome to Car Check Store. These Terms & Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.</p>

                                <h2 style={{ color: '#1a1a2e', marginBottom: '20px', marginTop: '40px' }}>2. Services Provided</h2>
                                <p>Car Check Store provides vehicle history reports and VIN check services based on data collected from various sources. While we strive for accuracy, we do not guarantee the completeness or absolute correctness of the data provided.</p>

                                <h2 style={{ color: '#1a1a2e', marginBottom: '20px', marginTop: '40px' }}>3. User Responsibilities</h2>
                                <p>Users are responsible for providing correct VIN or license plate information. Any misuse of the reports or unauthorized distribution is strictly prohibited.</p>

                                <h2 style={{ color: '#1a1a2e', marginBottom: '20px', marginTop: '40px' }}>4. Payment and Refunds</h2>
                                <p>Payments for reports are processed securely. Please refer to our Refund Policy for information regarding cancellations and refunds.</p>

                                <h2 style={{ color: '#1a1a2e', marginBottom: '20px', marginTop: '40px' }}>5. Limitation of Liability</h2>
                                <p>Car Check Store shall not be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use our services.</p>

                                <h2 style={{ color: '#1a1a2e', marginBottom: '20px', marginTop: '40px' }}>6. Changes to Terms</h2>
                                <p>We reserve the right to modify these terms at any time. Continued use of the service after such changes constitutes acceptance of the new terms.</p>

                                <h2 style={{ color: '#1a1a2e', marginBottom: '20px', marginTop: '40px' }}>7. Contact Us</h2>
                                <p>If you have any questions about these Terms & Conditions, please contact us at info@historivin.store.</p>
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
                .terms-content h2 {
                    font-family: 'Poppins', sans-serif;
                    font-weight: 700;
                }
                .terms-content p {
                    font-family: 'Inter', sans-serif;
                    margin-bottom: 20px;
                }
            `}</style>
        </>
    );
};

export default TermsAndConditions;
