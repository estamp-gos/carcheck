import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";

const AboutTwo = () => {
  const features = [
    {
      icon: "https://epicvin.com/img2/interface-screens/webp/odometer-check-en@2x.webp",
      title: "Past Odometer Readings",
      subtitle: "Has the odometer ever been rolled back?",
      isImage: true
    },
    {
      icon: "fas fa-history",
      title: "Ownership History",
      subtitle: "Complete ownership records and transfers"
    },
    {
      icon: "fas fa-camera",
      title: "Photos on Sale",
      subtitle: "View vehicle photos from listings"
    },
    {
      icon: "fas fa-car-crash",
      title: "Damage Check",
      subtitle: "Accident and damage history"
    },
    {
      icon: "fas fa-cog",
      title: "Technical Data",
      subtitle: "Full technical specifications"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Stolen VIN Check",
      subtitle: "Verify if vehicle is reported stolen"
    }
  ];

  return (
    <div className="glass-about-section scroll-section" data-scroll="fade-up">
      <div className="about-bg-elements">
        <div className="about-gradient-orb about-orb-1"></div>
        <div className="about-gradient-orb about-orb-2"></div>
        <div className="about-gradient-orb about-orb-3"></div>
      </div>
      
      <div className="container position-relative">
        <div className="section-header text-center">
          <span className="section-badge">Why Choose Us</span>
          <h2 className="glass-section-title">
            Always Check the History of a Car Before Buying It
          </h2>
          <p className="glass-section-subtitle">
            Uncover comprehensive insights with a Vehicle History Report
          </p>
        </div>

        <div className="glass-features-grid">
          {features.map((feature, index) => (
            <div key={index} className="glass-feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="glass-feature-icon">
                {feature.isImage ? (
                  <img src={feature.icon} alt={feature.title} className="feature-img" />
                ) : (
                  <i className={feature.icon}></i>
                )}
              </div>
              <h3 className="glass-feature-title">{feature.title}</h3>
              <p className="glass-feature-subtitle">{feature.subtitle}</p>
              <div className="feature-card-glow"></div>
            </div>
          ))}
        </div>

        <div className="glass-nmvtis-section">
          <div className="row align-items-center">
            <div className="col-lg-3 text-center mb-4 mb-lg-0">
              <div className="nmvtis-logo-wrapper">
                <img 
                  src="https://epicvin.com/img2/security/png/nmvtis-logo@2x.png?v1" 
                  alt="NMVTIS Logo" 
                  className="nmvtis-logo"
                />
              </div>
            </div>
            <div className="col-lg-9">
              <h3 className="nmvtis-title">Official NMVTIS Source</h3>
              <p className="nmvtis-text">
                We are an approved NMVTIS data provider. NMVTIS is a national database 
                designed to protect consumers from fraud and unsafe vehicles, to prevent 
                stolen vehicles from being resold, and to provide users with accurate and 
                complete vehicle information.
              </p>
              <div className="nmvtis-badge">
                <i className="fas fa-check-circle"></i>
                <span>Verified Data Provider</span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-stats-section">
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="glass-stat-card">
                <div className="stat-icon-wrapper">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h4 className="stat-number">70+</h4>
                <p className="stat-label">Databases Checked</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="glass-stat-card">
                <div className="stat-icon-wrapper">
                  <i className="fas fa-search"></i>
                </div>
                <h4 className="stat-number">45k+</h4>
                <p className="stat-label">Daily VIN Searches</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="glass-stat-card">
                <div className="stat-icon-wrapper">
                  <i className="fas fa-users"></i>
                </div>
                <h4 className="stat-number">1M+</h4>
                <p className="stat-label">Trusted Users</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="glass-stat-card">
                <div className="stat-icon-wrapper">
                  <i className="fas fa-file-alt"></i>
                </div>
                <h4 className="stat-number">100%</h4>
                <p className="stat-label">Extensive History</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glass-about-section {
          padding: 100px 0;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .about-bg-elements {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .about-gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
        }

        .about-orb-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #BE79DF 0%, #FBCFFC 100%);
          top: -100px;
          right: -100px;
          animation: float 8s ease-in-out infinite;
        }

        .about-orb-2 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #FBCFFC 0%, #BE79DF 100%);
          bottom: 20%;
          left: -100px;
          animation: float 10s ease-in-out infinite reverse;
        }

        .about-orb-3 {
          width: 200px;
          height: 200px;
          background: #BE79DF;
          top: 50%;
          right: 10%;
          animation: float 12s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }

        .section-header {
          margin-bottom: 70px;
        }

        .section-badge {
          display: inline-block;
          background: linear-gradient(135deg, rgba(190, 121, 223, 0.15) 0%, rgba(251, 207, 252, 0.15) 100%);
          color: #BE79DF;
          padding: 8px 24px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
          border: 1px solid rgba(190, 121, 223, 0.3);
        }

        .glass-section-title {
          font-family: 'Poppins', sans-serif;
          font-size: 44px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .glass-section-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }

        .glass-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-bottom: 80px;
        }

        .glass-feature-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(190, 121, 223, 0.2);
          border-radius: 24px;
          padding: 35px;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .glass-feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(190, 121, 223, 0.15);
          border-color: rgba(190, 121, 223, 0.4);
        }

        .feature-card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(190, 121, 223, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .glass-feature-card:hover .feature-card-glow {
          opacity: 1;
        }

        .glass-feature-icon {
          width: 90px;
          height: 90px;
          margin: 0 auto 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #BE79DF 0%, #FBCFFC 100%);
          border-radius: 20px;
          color: white;
          font-size: 36px;
          box-shadow: 0 10px 30px rgba(190, 121, 223, 0.3);
          transition: transform 0.3s ease;
        }

        .glass-feature-card:hover .glass-feature-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .feature-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
        }

        .glass-feature-title {
          font-family: 'Poppins', sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #1a1a2e;
          margin-bottom: 12px;
        }

        .glass-feature-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #64748b;
          margin: 0;
          line-height: 1.6;
        }

        .glass-nmvtis-section {
          background: linear-gradient(135deg, rgba(190, 121, 223, 0.08) 0%, rgba(251, 207, 252, 0.08) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(190, 121, 223, 0.2);
          border-radius: 28px;
          padding: 50px;
          margin-bottom: 70px;
        }

        .nmvtis-logo-wrapper {
          background: white;
          border-radius: 20px;
          padding: 20px;
          display: inline-block;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .nmvtis-logo {
          max-width: 120px;
          height: auto;
        }

        .nmvtis-title {
          font-family: 'Poppins', sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 16px;
        }

        .nmvtis-text {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          color: #475569;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .nmvtis-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #BE79DF 0%, #FBCFFC 100%);
          color: white;
          padding: 10px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
        }

        .glass-stats-section {
          margin-top: 40px;
        }

        .glass-stat-card {
          text-align: center;
          padding: 35px 25px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(190, 121, 223, 0.15);
          border-radius: 24px;
          margin-bottom: 24px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-stat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(190, 121, 223, 0.15);
          border-color: rgba(190, 121, 223, 0.3);
        }

        .stat-icon-wrapper {
          width: 70px;
          height: 70px;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #BE79DF 0%, #FBCFFC 100%);
          border-radius: 18px;
          color: white;
          font-size: 28px;
          box-shadow: 0 8px 25px rgba(190, 121, 223, 0.25);
        }

        .stat-number {
          font-family: 'Poppins', sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #1a1a2e;
          margin: 0 0 8px;
          background: linear-gradient(135deg, #BE79DF 0%, #9b59b6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #64748b;
          margin: 0;
        }

        @media (max-width: 991px) {
          .glass-section-title {
            font-size: 34px;
          }

          .glass-nmvtis-section {
            padding: 35px;
          }

          .nmvtis-title {
            font-size: 24px;
            text-align: center;
          }

          .nmvtis-text {
            text-align: center;
          }

          .nmvtis-badge {
            display: flex;
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .glass-about-section {
            padding: 70px 0;
          }

          .glass-section-title {
            font-size: 28px;
          }

          .glass-features-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .stat-number {
            font-size: 30px;
          }

          .glass-nmvtis-section {
            padding: 25px;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutTwo;
