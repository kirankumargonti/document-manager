import React, { useCallback } from 'react';
import Card from '../Card/Card';
import { Document } from '../../types/Document';
import './Grid.css';

interface GridProps {
  documents: Document[];
  onCardClick: (document: Document) => void;
  onReorder: (documents: Document[]) => void;
}

const Grid: React.FC<GridProps> = React.memo(({ documents, onCardClick, onReorder }) => {
  const handleDragStart = useCallback((e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.dataTransfer.setData('text/plain', index.toString());
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>, targetIndex: number) => {
    e.preventDefault();
    const sourceIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
    if (sourceIndex !== targetIndex) {
      const newDocuments = [...documents];
      const [removed] = newDocuments.splice(sourceIndex, 1);
      newDocuments.splice(targetIndex, 0, removed);
      onReorder(newDocuments.map((doc, index) => ({ ...doc, position: index })));
    }
  }, [documents, onReorder]);

  return (
    <div className="grid">
      {documents.map((document, index) => (
        <Card
          key={document.type}
          document={document}
          onClick={() => onCardClick(document)}
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
        />
      ))}
    </div>
  );
});

export default Grid;