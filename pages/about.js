import React from "react";
import Head from 'next/head';
import HeaderTwo from "../src/components/HeaderTwo";
import FooterAreaTwo from "../src/components/FooterAreaTwo";
import AboutTwo from "../src/components/AboutTwo";

const AboutPage = () => {
    return (
        <>
            <Head>
                <title>About Us | Car Check Store</title>
                <meta name="description" content="Learn more about Car Check Store and how we provide comprehensive vehicle history reports." />
            </Head>

            <HeaderTwo />

            <div className="breadcumb-wrapper" style={{ backgroundImage: 'url(assets/img/bg/breadcumb-bg.jpg)', padding: '100px 0', textAlign: 'center', backgroundColor: '#1a1a2e', color: 'white' }}>
                <div className="container">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title" style={{ fontSize: '48px', fontWeight: '800', marginBottom: '10px' }}>About Us</h1>
                        <ul className="breadcumb-menu" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center', gap: '10px', fontSize: '16px', opacity: 0.8 }}>
                            <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
                            <li>/</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
            </div>

            <AboutTwo />

            <FooterAreaTwo />
            
            <style jsx>{`
                .breadcumb-wrapper {
                    position: relative;
                    overflow: hidden;
                }
                .breadcumb-title {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
        </>
    );
};

export default AboutPage;
