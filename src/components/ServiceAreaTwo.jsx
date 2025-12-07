
import React from "react";

const ServiceAreaTwo = () => {
  const scrollToPricing = () => {
    const pricingSection = document.querySelector('#pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const vehicleCategories = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2"/>
          <circle cx="7" cy="17" r="2"/>
          <circle cx="17" cy="17" r="2"/>
        </svg>
      ),
      title: "Cars",
      description: "Complete history reports"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 18V6a2 2 0 00-2-2H4a2 2 0 00-2 2v11a1 1 0 001 1h2"/>
          <path d="M14 6h3.28a2 2 0 011.56.77l2.44 3.06a2 2 0 01.44 1.25V16a2 2 0 01-2 2h-1"/>
          <circle cx="7" cy="18" r="2"/>
          <circle cx="17" cy="18" r="2"/>
        </svg>
      ),
      title: "Trucks",
      description: "Detailed truck inspection"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M27,17c-0.2,0-0.4,0-0.6,0.1l-0.6-1.9C26.2,15,26.6,15,27,15c0.7,0,1.4,0.1,2.1,0.3c0.5,0.2,1.1-0.1,1.3-0.6 c0.2-0.5-0.1-1.1-0.6-1.3C28.9,13.1,27.9,13,27,13c-0.6,0-1.3,0.1-1.9,0.2l-2.2-6.5C22.8,6.3,22.4,6,22,6h-4c-0.6,0-1,0.4-1,1 s0.4,1,1,1h3.3l0.7,2H17c-0.4,0-0.7,0.2-0.9,0.5l-0.4,0.6c-1.4,2.3-4,3.4-6.6,2.9c0,0,0,0,0,0c-1.2-0.6-2.7-1-4.1-1 c-0.6,0-1,0.4-1,1s0.4,1,1,1c3.9,0,7,3.1,7,7c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1c0-2.7,1.6-5.1,3.9-6.2l0.6,1.9 C23,18.6,22,20.2,22,22c0,2.8,2.2,5,5,5s5-2.2,5-5S29.8,17,27,17z" fill="currentColor" stroke="none"/>
          <path d="M5,17c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S7.8,17,5,17z" fill="currentColor" stroke="none"/>
        </svg>
      ),
      title: "Motorcycles",
      description: "Bike history check"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 -30.88 122.88 122.88" fill="currentColor">
          <path d="M65.22,0h26.54h6.63c0.38,0,0.52,0.34,0.68,0.68l2.66,5.53c0.16,0.34-0.31,0.68-0.68,0.68H55.93 C52.98,6.9,58.02,0,65.22,0L65.22,0z M23.83,45.74v3.74h3.74C27.12,47.65,25.67,46.19,23.83,45.74L23.83,45.74z M27.57,51.93h-3.74 v3.74C25.67,55.22,27.12,53.77,27.57,51.93L27.57,51.93z M21.39,55.67v-3.74h-3.74C18.1,53.77,19.55,55.22,21.39,55.67L21.39,55.67 z M17.64,49.49h3.74v-3.74C19.55,46.2,18.1,47.65,17.64,49.49L17.64,49.49z M90.05,45.74v3.74h3.74 C93.34,47.65,91.89,46.19,90.05,45.74L90.05,45.74z M93.79,51.93h-3.74v3.74C91.89,55.22,93.34,53.77,93.79,51.93L93.79,51.93z M87.61,55.67v-3.74h-3.74C84.31,53.77,85.76,55.22,87.61,55.67L87.61,55.67z M83.86,49.49h3.74v-3.74 C85.76,46.2,84.31,47.65,83.86,49.49L83.86,49.49z M89.66,12.77h3.52c5.08,0.23,7.17,0.05,9.19,1.59 c2.5,1.91,3.48,10.35,4.52,14.25c0.07,0.26-0.23,0.5-0.5,0.5H90.88c-0.27,0-0.47-0.22-0.5-0.5l-1.22-15.35 C89.14,13,89.39,12.77,89.66,12.77L89.66,12.77z M66.09,12.86h-11.5c-5.25,0-13.89,8.63-16.15,15.61 c-0.11,0.34,0.29,0.65,0.65,0.65h25.18c0.36,0,0.6-0.29,0.65-0.65l1.83-14.96C66.78,13.15,66.44,12.86,66.09,12.86L66.09,12.86z M71.07,12.8h14.07c0.27,0,0.48,0.23,0.5,0.5l1.07,15.32c0.02,0.27-0.23,0.5-0.5,0.5H69.24c-0.27,0-0.53-0.23-0.5-0.5l1.83-15.32 C70.6,13.02,70.79,12.8,71.07,12.8L71.07,12.8z M22.61,40.31c5.74,0,10.4,4.66,10.4,10.4c0,5.74-4.66,10.4-10.4,10.4 c-5.74,0-10.4-4.66-10.4-10.4C12.21,44.97,16.87,40.31,22.61,40.31L22.61,40.31z M1.81,40.78c0.53-0.24,1.11-0.35,1.74-0.34 c-0.03-3.28,0.19-6.14,0.95-8.17c0.28-1.17,0.79-2.02,1.47-2.64c2.14-1.91,21.25-3.59,25.28-4.11c4.95-4.84,10.46-9.27,16.33-13.46 c1.63-1.38,3.96-2.06,6.9-2.13l46.41-0.04c3.51-0.02,6.21,1.48,7.93,4.85l3.87,11.15l0.88-0.24v-4.34 c-0.16-1.45,0.41-2.17,1.52-2.35h5.2c1.43,0.06,2.44,0.78,2.6,2.85v15.42c0.01,1.59-0.57,2.63-2.04,2.85h-4.83 c-0.48,0.11-0.33,0.48-0.37,0.99v5.26c-0.35,3.88-1.41,6.88-4.52,7.27h-9.41c0.2-4.56-0.66-8.29-2.75-11.08 c-7.59-10.14-24.06-4.1-22.95,11.11H35.58c0.34-4.86-0.58-8.55-2.59-11.2c-7.57-9.99-25.18-4.6-23.1,11.51H3.64 C-0.13,53.94-1.36,42.19,1.81,40.78L1.81,40.78z M88.83,40.31c5.74,0,10.4,4.66,10.4,10.4c0,5.74-4.66,10.4-10.4,10.4 c-5.74,0-10.4-4.66-10.4-10.4C78.43,44.97,83.08,40.31,88.83,40.31L88.83,40.31z"/>
        </svg>
      ),
      title: "SUVs",
      description: "SUV verification reports"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 64 41" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M55.2,34H60c1.1,0,2-0.9,2-2V2c0-1.1-0.9-2-2-2H30c-1.1,0-2,0.9-2,2v31.7"/>
          <path d="M29,8H14c-1.1,0-2,2-2,2L7,20l-5,1c-1.1,0-2,1.9-2,3v8c0,1.1,0.9,2,2,2h6.8"/>
          <path d="M20,34h24"/>
          <path d="M0.3,30H7"/>
          <path d="M21,23h3"/>
          <path d="M31,6h29"/>
          <path d="M31,14h29"/>
          <path d="M31,22h29"/>
          <circle cx="49.5" cy="33.5" r="5.5"/>
          <circle cx="14.5" cy="33.5" r="5.5"/>
          <path d="M25,19c0,0.6-0.4,1-1,1H13c-0.6,0-1-0.4-1-1l3-6c0,0,0.4-1,1-1h8c0.6,0,1,0.4,1,1V19L25,19z"/>
        </svg>
      ),
      title: "RVs",
      description: "Recreational vehicles"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 1000 1000" fill="currentColor">
          <path d="M153.69,505.96c0,0,12.89,16.05,27.25,41.65c37.995-7.681,110.338-5.278,181.938,0.15 c3.524,0.267,6.498,2.718,7.456,6.121c0.016,0.057,0.032,0.115,0.048,0.172c1.579,5.617-2.921,11.095-8.739,10.652 c-43.569-3.311-80.823-4.986-111.242-4.986c-25.86,0-46.381,1.22-61.11,3.64c17.22,34.49,33.42,80.72,29.41,127.74 c-0.41,4.9,3.39,9.12,8.3,9.12h549.62c-11.51-10.13-23.67-19.46-36.311-27.84c-5.29-3.51-10.21-6.54-14.609-9.02 c-13.609-7.673-27.423-14.902-41.423-21.676c-5.484-2.653-6.413-10.049-1.764-13.986c0.048-0.041,0.097-0.082,0.145-0.122 c2.523-2.126,6.076-2.58,9.047-1.146c14.326,6.914,28.44,14.289,42.335,22.12c5.08,2.86,10.36,6.15,15.66,9.66 c18.63,12.35,36,26.44,51.939,42.01h39.731c4.08,0,6.39-4.67,3.93-7.92l-7.45-9.81c-24.58-32.39-54.26-60.61-88.149-83.06 c-5.3-3.52-10.58-6.8-15.66-9.66c-92.7-52.28-195.47-84.15-301.38-94.65C312.84,483.24,153.69,473.56,153.69,505.96z M576.3,581.93 c5.17-10.08,15.681-16.99,27.771-16.99c17.199,0,31.19,13.99,31.19,31.19c0,1.93-0.18,3.81-0.51,5.64 c-1.06,5.79-3.731,11.02-7.51,15.23c-5.71,6.34-13.98,10.33-23.17,10.33c-16.391,0-29.87-12.71-31.11-28.78 c-0.06-0.8-0.09-1.61-0.09-2.42C572.87,591.02,574.11,586.19,576.3,581.93z M493.42,562.34c4.48-11.74,15.86-20.09,29.15-20.09 c17.199,0,31.19,13.99,31.19,31.19c0,0.73-0.029,1.46-0.08,2.18c-0.41,5.93-2.479,11.41-5.76,15.97 c-5.67,7.89-14.92,13.04-25.35,13.04c-15.19,0-27.891-10.92-30.641-25.32c-0.37-1.9-0.56-3.86-0.56-5.87 C491.37,569.53,492.09,565.79,493.42,562.34z M409.88,568.8c0.12-6.12,2.01-11.82,5.19-16.59c5.59-8.42,15.16-13.98,26-13.98 c13.38,0,24.83,8.48,29.239,20.34c1.261,3.39,1.95,7.04,1.95,10.86c0,2.23-0.229,4.4-0.689,6.5c-2.99,14.09-15.53,24.69-30.5,24.69 c-17.2,0-31.2-13.99-31.2-31.19C409.87,569.22,409.87,569.01,409.88,568.8z"/>
          <path d="M517.03,360.32L489.48,400l-61.5,1.4c-5.37,0.12-10.261,3.1-12.841,7.8l-32.149,58.58 c-1.42,2.57,0.279,5.75,3.21,6c15.359,1.3,31.42,2.77,48.14,4.43c54.09,5.36,107.601,16.24,159.04,32.35 c37.21,11.64,73.49,26.06,108.36,43.07c2.94,1.43,6.279-1.05,5.77-4.29L687.35,421.3l78.341-12.63c4.069-0.66,7.42-3.53,8.699-7.44 l10.21-31.22c2.32-7.11-2.97-14.41-10.449-14.41H526.06C522.46,355.6,519.08,357.36,517.03,360.32z M530.63,427.6l5.69,36.13 c0.449,2.82-2.09,5.2-4.88,4.59c-31.16-6.81-62.79-11.84-94.631-14.99c-3.47-0.34-6.93-0.68-10.359-1.01 c-2.91-0.28-4.57-3.44-3.17-5.99l9.88-18.02c0.7-1.27,2.02-2.07,3.47-2.1l47.73-1.08l42.17-0.96 C528.56,424.12,530.31,425.59,530.63,427.6z"/>
          <path d="M742.39,574.96c13.34,7.519,25.15,14.7,35.5,21.59l-12.95-82.25l-2-12.71 c-1.17-7.44-7.66-12.86-15.19-12.69l-32.431,0.74L724.3,546.7c0.91,5.77-0.601,11.609-4.16,16.189 C727.63,566.8,735.05,570.819,742.39,574.96z"/>
          <path d="M617.119,319.479l23.49-3.79c1.22-0.19,2.22-1.05,2.61-2.23l3.06-9.36 c0.69-2.13-0.89-4.319-3.14-4.319h-74.38c-1.08,0-2.101,0.529-2.71,1.42l-8.26,11.89l-2.15,3.1c-0.271,0.38-0.44,0.78-0.521,1.19 c-1.17,5.33-2.449,10.64-4.829,15.55l-2.75,5.67h50.359l7.771-17.27L617.119,319.479z"/>
          <path d="M736.449,319.479l23.49-3.79c1.22-0.19,2.22-1.05,2.61-2.23l3.06-9.36 c0.7-2.13-0.89-4.319-3.13-4.319h-74.39c-1.08,0-2.09,0.529-2.71,1.42l-8.261,11.89l-2.149,3.1c-0.26,0.38-0.43,0.78-0.521,1.19 c-1.159,5.33-2.439,10.64-4.819,15.55l-2.75,5.67h50.35l7.78-17.27L736.449,319.479z"/>
          <path d="M441.07,583.62c6.39,0,11.81-4.25,13.58-10.08c0.399-1.3,0.609-2.68,0.609-4.11 c0-7.83-6.37-14.2-14.189-14.2c-7.83,0-14.2,6.37-14.2,14.2c0,0.34,0.01,0.67,0.04,1C427.42,577.79,433.58,583.62,441.07,583.62z"/>
          <path d="M522.57,587.63c1.83,0,3.58-0.35,5.18-0.98c5.269-2.07,9.01-7.21,9.01-13.21 c0-0.71-0.05-1.42-0.149-2.1c-1.021-6.84-6.931-12.09-14.04-12.09c-4.95,0-9.31,2.54-11.851,6.39c-1.489,2.24-2.35,4.91-2.35,7.8 c0,3.82,1.51,7.28,3.97,9.83C514.92,585.96,518.56,587.63,522.57,587.63z"/>
          <path d="M604.07,610.33c1.279,0,2.51-0.17,3.69-0.49c6.04-1.63,10.5-7.16,10.5-13.71c0-0.17,0-0.34-0.01-0.51 c-0.269-7.59-6.53-13.68-14.18-13.68c-4.4,0-8.34,2.01-10.95,5.16c-2.03,2.45-3.25,5.6-3.25,9.03c0,3.23,1.08,6.22,2.92,8.61 C595.38,608.13,599.47,610.33,604.07,610.33z"/>
        </svg>
      ),
      title: "Boats",
      description: "Marine vessel history"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="3" width="15" height="13"/>
          <path d="M16 8h4l3 3v5h-7V8z"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
      title: "Trailers",
      description: "Trailer inspection"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: "Heavy Equipment",
      description: "Construction reports"
    }
  ];

  return (
    <section className="services-glass scroll-section" data-scroll="fade-up" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-glass">
          <span className="section-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
            Vehicle Categories
          </span>
          <h2 className="section-title">
            Get Reports for <span className="text-gradient">Any Vehicle</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive history reports for cars, trucks, motorcycles, boats, and more
          </p>
        </div>
      </div>
      
      {/* Marquee Container */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...vehicleCategories, ...vehicleCategories].map((category, index) => (
            <div 
              key={index} 
              className="category-card-glass"
              onClick={scrollToPricing}
            >
              <div className="category-icon-wrapper">
                {category.icon}
              </div>
              <h4 className="category-name">{category.title}</h4>
              <p className="category-desc">{category.description}</p>
              <div className="card-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-glass {
          padding: 100px 0;
          background: linear-gradient(180deg, #FFFFFF 0%, #faf8fc 50%, #FFFFFF 100%);
          position: relative;
          overflow: hidden;
        }

        .services-glass::before {
          content: '';
          position: absolute;
          top: 50%;
          left: -200px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(190, 121, 223, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .services-glass::after {
          content: '';
          position: absolute;
          top: 30%;
          right: -200px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(251, 207, 252, 0.2) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Section Header */
        .section-header-glass {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
          z-index: 2;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(190, 121, 223, 0.2);
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          color: #BE79DF;
          margin-bottom: 20px;
        }

        .section-badge svg {
          opacity: 0.8;
        }

        .section-title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 16px;
        }

        .text-gradient {
          background: linear-gradient(135deg, #BE79DF 0%, #9a5cbf 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: #7a7a96;
          max-width: 500px;
          margin: 0 auto;
        }

        /* Marquee */
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          padding: 20px 0;
        }

        .marquee-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: marquee 30s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Category Cards */
        .category-card-glass {
          flex-shrink: 0;
          width: 200px;
          padding: 28px 20px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 20px;
          text-align: center;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }

        .category-card-glass::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #BE79DF, #FBCFFC);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .category-card-glass:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 20px 40px rgba(190, 121, 223, 0.2);
          border-color: rgba(190, 121, 223, 0.3);
        }

        .category-card-glass:hover::before {
          transform: scaleX(1);
        }

        .category-icon-wrapper {
          width: 72px;
          height: 72px;
          margin: 0 auto 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(190, 121, 223, 0.15) 0%, rgba(251, 207, 252, 0.15) 100%);
          border-radius: 16px;
          color: #BE79DF;
          transition: all 0.3s ease;
        }

        .category-card-glass:hover .category-icon-wrapper {
          background: linear-gradient(135deg, #BE79DF 0%, #FBCFFC 100%);
          color: white;
          transform: scale(1.1) rotate(5deg);
        }

        .category-name {
          font-size: 1rem;
          font-weight: 600;
          color: #1a1a2e;
          margin: 0 0 8px 0;
        }

        .category-desc {
          font-size: 0.85rem;
          color: #7a7a96;
          margin: 0;
          line-height: 1.4;
        }

        .card-arrow {
          position: absolute;
          bottom: 16px;
          right: 16px;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(190, 121, 223, 0.1);
          border-radius: 50%;
          color: #BE79DF;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
        }

        .category-card-glass:hover .card-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .services-glass {
            padding: 80px 0;
          }

          .category-card-glass {
            width: 170px;
            padding: 24px 16px;
          }

          .category-icon-wrapper {
            width: 60px;
            height: 60px;
          }

          .category-icon-wrapper svg {
            width: 36px;
            height: 36px;
          }

          .card-arrow {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default ServiceAreaTwo;
