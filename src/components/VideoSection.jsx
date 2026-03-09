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
                paddingTop: '56.25%', // 16:9 Aspect Ratio
                overflow: 'hidden'
            }}>
                <iframe
                    src="https://www.youtube.com/embed/HSdQ3KVa2pY?autoplay=1&mute=1&loop=1&playlist=HSdQ3KVa2pY&controls=1&rel=0"
                    title="Reproductor de vídeo de YouTube"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-view; web-share"
                    allowFullScreen
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none'
                    }}
                ></iframe>
            </div>
        </section>
    );
};

export default VideoSection;
