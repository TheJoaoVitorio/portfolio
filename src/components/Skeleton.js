import React from 'react';

const Skeleton = ({ width = 24, height = 16 }) => {
  const skeletonStyle = {
    wrapper: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px'
    },
    skeleton: {
      position: 'relative',
      background: 'rgba(15, 16, 16, 0.8)',
      overflow: 'hidden',
      borderRadius: '4px',
      width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : height,
      animation: 'pulse 1.5s ease-in-out 0.5s infinite',
      boxShadow: 'rgb(22, 22, 22) 0px 2px 8px 0px, rgba(28, 28, 28, 0.892) 0px 0px 0px 1px',
      backdropFilter: 'blur(10px)'
    },
    shimmer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(90deg, rgba(15, 16, 16, 0.6) 25%, rgba(28, 28, 28, 0.8) 50%, rgba(15, 16, 16, 0.6) 75%)',
      transform: 'translateX(-100%)',
      animation: 'shimmer 1.5s ease-in-out infinite'
    }
  };

  const keyframes = `
    @keyframes shimmer {
      100% {
        transform: translateX(100%);
      }
    }
    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.85;
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div style={skeletonStyle.wrapper}>
        <div
          style={skeletonStyle.skeleton}
          role="status"
        >
          <div style={skeletonStyle.shimmer} />
          <span className="sr-only"></span>
        </div>
      </div>
    </>
  );
};

export default Skeleton;