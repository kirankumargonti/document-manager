import {useState, useEffect, useCallback} from 'react'
import {Document} from '../types/Document'
import {fetchDocuments, saveDocuments} from '../services/api'

export const useDocuments = () => {
  const [documents, setDocuments] = useState<Document[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [saving, setSaving] = useState<boolean>(false)
  const [lastSaved, setLastSaved] = useState<Date | null>(null)

  useEffect(() => {
    const loadDocuments = async () => {
      const data = await fetchDocuments()
      setDocuments(data)
      setLoading(false)
    }
    loadDocuments()
  }, [])

  const updateDocuments = useCallback((newDocuments: Document[]) => {
    setDocuments(newDocuments)
  }, [])

  useEffect(() => {
    let saveTimeout: ReturnType<typeof setTimeout>
    if (!loading) {
      saveTimeout = setTimeout(async () => {
        setSaving(true)
        await saveDocuments(documents)
        setSaving(false)
        setLastSaved(new Date())
      }, 5000)
    }
    return () => clearTimeout(saveTimeout)
  }, [documents, loading])

  return {documents, updateDocuments, loading, saving, lastSaved}
}
