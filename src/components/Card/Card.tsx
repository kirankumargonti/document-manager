import React, { useState } from 'react';
import { Document } from '../../types/Document';
import './Card.css';

interface CardProps {
  document: Document;
  onClick: () => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
}

const Card: React.FC<CardProps> = React.memo(({ document, onClick, onDragStart, onDragOver, onDrop }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="card"
      onClick={onClick}
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      {!imageLoaded && <div className="spinner" />}
      <img
        src={`/src/assets/cat${(document.position % 5) + 1}.jpg`}
        alt={document.title}
        onLoad={() => setImageLoaded(true)}
        style={{ display: imageLoaded ? 'block' : 'none' }}
      />
      <h3>{document.title}</h3>
    </div>
  );
});

export default Card;