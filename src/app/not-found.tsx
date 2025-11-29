'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    // Create floating particles
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
        particle.style.setProperty('--ty', (Math.random() - 0.5) * 200 + 'px');
        particle.style.animationDelay = Math.random() * 5 + 's';
        particlesContainer.appendChild(particle);
      }
    }
  }, []);

  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html,
        body {
          height: 100%;
          overflow: hidden;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .bg-shapes {
          position: fixed;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
          top: 0;
          left: 0;
        }

        .shape {
          position: absolute;
          opacity: 0.1;
          animation: float 20s infinite ease-in-out;
        }

        .shape:nth-child(1) {
          width: 80px;
          height: 80px;
          background: white;
          border-radius: 50%;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .shape:nth-child(2) {
          width: 120px;
          height: 120px;
          background: white;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          top: 60%;
          left: 80%;
          animation-delay: 2s;
        }

        .shape:nth-child(3) {
          width: 100px;
          height: 100px;
          background: white;
          border-radius: 50%;
          top: 80%;
          left: 20%;
          animation-delay: 4s;
        }

        .shape:nth-child(4) {
          width: 60px;
          height: 60px;
          background: white;
          transform: rotate(45deg);
          top: 20%;
          right: 20%;
          animation-delay: 1s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
          }
        }

        .not-found-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 9999;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .container {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 2rem;
          max-width: 800px;
          animation: fadeInUp 0.8s ease-out;
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

        .error-code {
          font-size: clamp(120px, 20vw, 200px);
          font-weight: 900;
          color: white;
          text-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          margin-bottom: 1rem;
          line-height: 1;
          position: relative;
          display: inline-block;
        }

        .error-code::before {
          content: '404';
          position: absolute;
          top: 0;
          left: 0;
          color: rgba(255, 255, 255, 0.1);
          animation: glitch 3s infinite;
        }

        @keyframes glitch {
          0%,
          100% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
        }

        .not-found-container h1 {
          font-size: clamp(24px, 5vw, 42px);
          color: white;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .not-found-container p {
          font-size: clamp(16px, 3vw, 20px);
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }

        .buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 1rem 2.5rem;
          font-size: 16px;
          font-weight: 600;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          background: white;
          color: #667eea;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 640px) {
          .buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .btn {
            width: 100%;
            justify-content: center;
          }
        }

        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          opacity: 0.6;
          animation: particleFloat 10s infinite ease-in-out;
        }

        @keyframes particleFloat {
          0%,
          100% {
            transform: translate(0, 0);
            opacity: 0;
          }
          10%,
          90% {
            opacity: 0.6;
          }
          50% {
            transform: translate(var(--tx), var(--ty));
            opacity: 0.8;
          }
        }
      `}</style>

      <div className="not-found-container">
        <div className="bg-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>

        <div className="particles" id="particles"></div>

        <div className="container">
          <div className="error-code">404</div>
          <h1>Page Not Found</h1>
          <p>
            It looks like this page doesn&apos;t exist. Let&apos;s get you back
            on track!
          </p>

          <div className="buttons">
            <Link href="/" className="btn">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 3L3 9L4 10L10 5L16 10L17 9L10 3Z"
                  fill="currentColor"
                />
                <path
                  d="M4 10V17H8V13H12V17H16V10L10 5L4 10Z"
                  fill="currentColor"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
