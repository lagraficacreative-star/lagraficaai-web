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
                autoPlay
                muted
                loop
                playsInline
                style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    maxHeight: '90vh',
                    objectFit: 'cover'
                }}
            />
        </section>
    );
};

export default VideoSection;
