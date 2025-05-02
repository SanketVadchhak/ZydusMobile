import React from "react";
import "../../../Styles/SlideInPannel.css";
import Pod1 from "../../../assets/nav-podcast-1.webp"
import Pod2 from "../../../assets/nav-podcast-2.webp"
import Pod3 from "../../../assets/nav-podcast-3.webp"

const podcastsData = [
  {
    id: 1,
    title: "#LifeKaFilter - Episode 2 | Chef Vikas Khanna | Kidney Health | Zydus",
    date: "28 Mar 2025",
    duration: "26 min watch",
    thumbnail: Pod1,
  },
  {
    id: 2,
    title: "LifeKaFilter with Vikas Khanna. Ex…",
    date: "12 Jun 2024",
    duration: "12 min watch",
    thumbnail: Pod2,
  },
  {
    id: 3,
    title: "Chai ho ya Zindagi Filter to zaroori hai!",
    date: "12 Jun 2024",
    duration: "12 min watch",
    thumbnail: Pod3,
  },
];

// Inline VideoCard component
function VideoCard({ title, date, duration, thumbnail, onPlay }) {
  return (
    <div className="video-card">
      <div className="video-card-info">
        <h3 className="video-card-title">{title}</h3>
        <p className="video-card-meta">
          {date} | {duration}
        </p>
      </div>
      <div className="video-card-thumb">
        <img src={thumbnail} alt={title} />
        <button
          className="video-card-play-btn"
          onClick={onPlay}
          aria-label="Play"
        >
         play
        </button>
      </div>
    </div>
  );
}

function SlideInPodcasts({ isOpen, onClose }) {
  return (
    <div className={`slide-page-x ${isOpen ? "open" : ""}`}>
      <button className="close-button" onClick={onClose}>
        ×
      </button>
      <div className="slide-page-content">
        <div className="podcasts-title">
          <h2>Podcasts</h2>
        </div>
        <div className="podcasts-list">
          {podcastsData.map((pod) => (
            <VideoCard
              key={pod.id}
              title={pod.title}
              date={pod.date}
              duration={pod.duration}
              thumbnail={pod.thumbnail}
              onPlay={() => console.log("Play:", pod.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SlideInPodcasts;
