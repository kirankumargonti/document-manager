import React, {useEffect, useCallback} from 'react'
import {Document} from '../../types/Document'
import './ImageOverlay.css'

interface ImageOverlayProps {
  document: Document | null
  onClose: () => void
}

const ImageOverlay: React.FC<ImageOverlayProps> = React.memo(
  ({document, onClose}) => {
    const handleKeyDown = useCallback(
      (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose()
        }
      },
      [onClose]
    )

    useEffect(() => {
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }, [handleKeyDown])

    if (!document) return null

    return (
      <div className='overlay'>
        <button className='close-button' onClick={onClose}>
          &times;
        </button>
        <img
          src={`/images/cat${(document.position % 5) + 1}.jpg`}
          alt={document.title}
        />
      </div>
    )
  }
)

export default ImageOverlay
