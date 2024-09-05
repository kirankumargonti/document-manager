import React, {useState, useCallback} from 'react'
import Grid from './components/Grid/Grid'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import ImageOverlay from './components/ImageOverlay/ImageOverlay'
import {useDocuments} from './hooks/useDocuments'
import {Document} from './types/Document'
import './App.css'

const App: React.FC = () => {
  const {documents, updateDocuments, loading, saving, lastSaved} =
    useDocuments()
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(
    null
  )

  const handleCardClick = useCallback((document: Document) => {
    setSelectedDocument(document)
  }, [])

  const handleCloseOverlay = useCallback(() => {
    setSelectedDocument(null)
  }, [])

  const handleReorder = useCallback(
    (newDocuments: Document[]) => {
      updateDocuments(newDocuments)
    },
    [updateDocuments]
  )

  if (loading) {
    return <div className='spinner' />
  }

  return (
    <ErrorBoundary>
      <div className='container'>
        <h1 className='title'>Document Manager</h1>
        <Grid
          documents={documents}
          onCardClick={handleCardClick}
          onReorder={handleReorder}
        />
        <ImageOverlay
          document={selectedDocument}
          onClose={handleCloseOverlay}
        />
        <div className='status'>
          {saving
            ? 'Saving...'
            : lastSaved
            ? `Last saved: ${lastSaved.toLocaleTimeString()}`
            : ''}
        </div>
      </div>
    </ErrorBoundary>
  )
}

export default App
