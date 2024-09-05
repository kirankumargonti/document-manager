import {Document} from '../types/Document'

const STORAGE_KEY = 'documents'

export const fetchDocuments = async (): Promise<Document[]> => {
  const storedData = localStorage.getItem(STORAGE_KEY)
  if (storedData) {
    return JSON.parse(storedData)
  }

  const response = await fetch('/documents.json')
  const data = await response.json()
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  return data
}

export const saveDocuments = async (documents: Document[]): Promise<void> => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(documents))
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
}
