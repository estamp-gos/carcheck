import React from "react";
import Head from 'next/head';
import HeaderTwo from "../src/components/HeaderTwo";
import FooterAreaTwo from "../src/components/FooterAreaTwo";

const RefundPolicy = () => {
    return (
        <>
            <Head>
                <title>Refund Policy | Car Check Store</title>
                <meta name="description" content="Refund policy for Car Check Store services." />
            </Head>

            <HeaderTwo />

            <div className="breadcumb-wrapper" style={{ backgroundImage: 'url(assets/img/bg/breadcumb-bg.jpg)', padding: '100px 0', textAlign: 'center', backgroundColor: '#1a1a2e', color: 'white' }}>
                <div className="container">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title" style={{ fontSize: '48px', fontWeight: '800', marginBottom: '10px' }}>Refund Policy</h1>
                        <ul className="breadcumb-menu" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center', gap: '10px', fontSize: '16px', opacity: 0.8 }}>
                            <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
                            <li>/</li>
                            <li>Refund Policy</li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className="space" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="refund-content" style={{ lineHeight: '1.8', color: '#444' }}>
                                <h2 style={{ color: '#1a1a2e', marginBottom: '20px' }}>1. Refund Eligibility</h2>
                                <p>We want you to be satisfied with our service. You may be eligible for a refund if:</p>
                                <ul>
                                    <li>The report was not delivered to your email within the specified timeframe (usually 12-24 hours).</li>
                                    <li>The report contains significant technical errors that prevent it from being read.</li>
                                    <li>You were charged multiple times for the same report.</li>
                                </ul>

                                <h2 style={{ color: '#1a1a2e', marginBottom: '20px', marginTop: '40px' }}>2. Non-Refundable Situations</h2>
                                <p>Refunds will not be issued in the following cases:</p>
                                <ul>
                                    <li>The vehicle has no records in our database. A "No Records Found" report is still a valid report.</li>
                                    <li>You provided an incorrect VIN or license plate number.</li>
                                    <li>You changed your mind after the report has been generated and delivered.</li>
                                </ul>

                                <h2 style={{ color: '#1a1a2e', marginBottom: '20px', marginTop: '40px' }}>3. How to Request a Refund</h2>
                                <p>To request a refund, please email us at info@historivin.store with your order details and the reason for the request. We will review your request and get back to you within 2-3 business days.</p>

                                <h2 style={{ color: '#1a1a2e', marginBottom: '20px', marginTop: '40px' }}>4. Process</h2>
                                <p>Once a refund is approved, it will be processed back to your original payment method. Please note that it may take 5-10 business days for the funds to appear in your account depending on your bank.</p>
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
                .refund-content h2 {
                    font-family: 'Poppins', sans-serif;
                    font-weight: 700;
                }
                .refund-content p, .refund-content li {
                    font-family: 'Inter', sans-serif;
                    margin-bottom: 10px;
                }
                .refund-content ul {
                    margin-bottom: 20px;
                }
            `}</style>
        </>
    );
};

export default RefundPolicy;
