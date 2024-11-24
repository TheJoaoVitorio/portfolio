import React from 'react';

const Stepper = ({ tools = [], title = 'Ferramentas', isFeature = false }) => {
  return (
    <div className='stepperContainer'>
      <div className='stepperHeader'>
        <h1>{title}</h1>
      </div>
      <div className="stepper">
        {tools.map((tool, index) => {
          const name = isFeature ? tool.name : tool.name;
          const description = isFeature ? tool.description : tool.description;

          return (
            <div key={index} className="stepper-item">
              <div className="stepper-icon">
                {isFeature ? <tool.icon className="iconStyle" /> : tool.icon}
              </div>
              <div className="stepper-content">
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
              {index < tools.length - 1 && <div className="stepper-line"></div>}
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .stepperContainer {
          width: 70%;
          margin: 0 auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: whitesmoke;
        }
        .stepperHeader {
          width: 300px;
          font-size: clamp(10px, 15px, 20px);
          text-align: center;
          margin-bottom: 10px;
        }
        .stepper {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          max-width: 100%;
          position: relative;
          padding-top: 20px;
          animation: appear linear;
        }
        .stepper-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 40px;
          position: relative;
        }
        .stepper-icon {
          width: 48px;
          height: 48px;
          min-width: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #3b82f6;
          z-index: 2;
          background: rgba(15, 16, 16, 0.8);
          backdrop-filter: blur(10px);
          box-shadow: rgb(22, 22, 22) 0px 6px 24px 0px, rgba(28, 28, 28, 0.892) 0px 0px 0px 1px;
          transition: transform 0.3s ease-in-out;
        }
        .stepper-icon:hover {
          transform: scale(1.2);
        }
        .stepper-icon:hover svg {
          transform: rotate(360deg);
          transition: transform 0.3s ease-in-out;
        }
        .stepper-content {
          margin-left: 20px;
          flex-grow: 1;
        }
        .stepper-content h3 {
          font-size: 18px;
          font-weight: 600;
          margin: 0 0 8px 0;
        }
        .stepper-content p {
          font-size: 14px;
          color: #666;
          margin: 0;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
        .stepper-line {
          position: absolute;
          top: 48px;
          left: 24px;
          width: 2px;
          height: calc(100% - 12px);
          background-color: rgba(255, 255, 255, 0.18);
          z-index: 1;
        }
        .stepper-item:last-child {
          margin-bottom: 0;
        }
        .stepper-item:last-child .stepper-line {
          display: none;
        }
        @keyframes appear {
          from {
            opacity: 0;
            scale: 0.8;
          }
          to {
            opacity: 1;
            scale: 1;
          }
        }
        @media (min-width: 700px) {
          .stepper-content p {
            width: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default Stepper;