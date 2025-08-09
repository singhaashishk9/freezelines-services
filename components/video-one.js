import React, { Fragment, useState } from "react";
import { VideoOneData } from "@/data";

const VideoOne = () => {
  const { title, id } = VideoOneData;
  const [isOpen, setOpen] = useState(false);
  return (
    <Fragment>
      <section className="video_promotion_area text-center">
        <div className="overlay">
          <a
            onClick={(e) => {
              e.preventDefault();
              setOpen(true);
            }}
            href="#"
            className="video-img"
            title="Play Icon"
            id="videolink"
          >
            <span className="video-play">
              <i className="fa fa-play"></i>
            </span>
          </a>
          <h1>{title}</h1>
        </div>
      </section>
      {/* Custom Video Modal */}
      {isOpen && (
        <div 
          className="video-modal-overlay"
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div 
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '800px',
              aspectRatio: '16/9',
              backgroundColor: '#000'
            }}
          >
            <button
              onClick={() => setOpen(false)}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '24px',
                cursor: 'pointer',
                zIndex: 10000
              }}
              aria-label="Close video"
            >
              ✕
            </button>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/8DP4NgupAhI?autoplay=1&rel=0`}
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default VideoOne;
