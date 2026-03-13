import React from "react";
import Head from 'next/head';
import HeaderTwo from "../src/components/HeaderTwo";
import FooterAreaTwo from "../src/components/FooterAreaTwo";

const PrivacyPolicy = () => {
    return (
        <>
            <Head>
                <title>Privacy Policy | Car Check Store</title>
                <meta name="description" content="Privacy policy for Car Check Store. Information on how we collect, use, and protect your data." />
            </Head>

            <HeaderTwo />

            <div className="breadcumb-wrapper" style={{ backgroundImage: 'url(assets/img/bg/breadcumb-bg.jpg)', padding: '100px 0', textAlign: 'center', backgroundColor: '#1a1a2e', color: 'white' }}>
                <div className="container">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title" style={{ fontSize: '48px', fontWeight: '800', marginBottom: '10px' }}>Privacy Policy</h1>
                        <ul className="breadcumb-menu" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center', gap: '10px', fontSize: '16px', opacity: 0.8 }}>
                            <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
                            <li>/</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className="space" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="privacy-content" style={{ lineHeight: '1.8', color: '#444' }}>
                                <h2 style={{ color: '#1a1a2e', marginBottom: '20px' }}>1. Information Collection</h2>
                                <p>We collect information that you provide directly to us when you use our services, such as when you request a vehicle history report. This may include your name, email address, and vehicle identifier (VIN or license plate).</p>

                                <h2 style={{ color: '#1a1a2e', marginBottom: '20px', marginTop: '40px' }}>2. Use of Information</h2>
                                <p>We use the information we collect to provide, maintain, and improve our services, to process your transactions, and to communicate with you about your orders.</p>

                                <h2 style={{ color: '#1a1a2e', marginBottom: '20px', marginTop: '40px' }}>3. Information Sharing</h2>
                                <p>We do not share your personal information with third parties except as necessary to provide our services (e.g., payment processing) or as required by law.</p>

                                <h2 style={{ color: '#1a1a2e', marginBottom: '20px', marginTop: '40px' }}>4. Data Security</h2>
                                <p>We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access. All payments are processed through secure third-party gateways.</p>

                                <h2 style={{ color: '#1a1a2e', marginBottom: '20px', marginTop: '40px' }}>5. Cookies</h2>
                                <p>We use cookies to improve your experience on our website and to analyze traffic patterns. You can choose to disable cookies in your browser settings, although this may affect some functionality.</p>

                                <h2 style={{ color: '#1a1a2e', marginBottom: '20px', marginTop: '40px' }}>6. Your Choices</h2>
                                <p>You may opt out of receiving promotional communications from us by following the instructions in those messages. If you opt out, we may still send you non-promotional communications, such as those about your account or our ongoing business relations.</p>

                                <h2 style={{ color: '#1a1a2e', marginBottom: '20px', marginTop: '40px' }}>7. Changes to Policy</h2>
                                <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

                                <h2 style={{ color: '#1a1a2e', marginBottom: '20px', marginTop: '40px' }}>8. Contact Us</h2>
                                <p>If you have any questions about this Privacy Policy, please contact us at info@historivin.store.</p>
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
                .privacy-content h2 {
                    font-family: 'Poppins', sans-serif;
                    font-weight: 700;
                }
                .privacy-content p {
                    font-family: 'Inter', sans-serif;
                    margin-bottom: 20px;
                }
            `}</style>
        </>
    );
};

export default PrivacyPolicy;
