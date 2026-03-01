import React from 'react';

const VideoSection = () => {
    return (
        <section style={{
            width: '100%',
            background: '#ffffff', // White background as requested
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0' // Removed padding to touch previous section
        }}>
            <video
                src="/images/video_mirades.mp4"
                controls
                autoPlay
                muted
                loop
                style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '80vh',
                    objectFit: 'cover'
                }}
            >
                Tu navegador no soporta el elemento de video.
            </video>
        </section>
    );
};

export default VideoSection;
