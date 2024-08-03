// pages/wip.tsx
import React from 'react';
import Head from 'next/head';

const WIP: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Work in Progress</title>
      </Head>
      <div className="content">
        <h1 className="title">Work in Progress</h1>
        <p className="description">
          We're currently working on something awesome. Stay tuned!
        </p>
        <div className="spinner"></div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 1rem;
          box-sizing: border-box;
        }
        .content {
          max-width: 600px;
          width: 100%;
          text-align: center;
        }
        .title {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .description {
          font-size: 1.25rem;
          margin-bottom: 2rem;
        }
        .spinner {
          margin: 2rem auto;
          width: 50px;
          height: 50px;
          border: 4px solid #eaeaea;
          border-top: 4px solid #0070f3;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default WIP;