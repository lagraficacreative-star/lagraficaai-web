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
            <div style={{
                position: 'relative',
                width: '100%',
                paddingTop: '56.25%', // 16:9 ratio
                overflow: 'hidden'
            }}>
                <video
                    src="/images/video_mirades.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>
        </section>
    );
};

export default VideoSection;
