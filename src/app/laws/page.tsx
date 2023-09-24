'use client'
import DocumentCard from '@/components/DocumentCard'
import { useDocument } from '@/store/useDocment'
import React, { useEffect } from 'react'

const Laws = () => {
  const { documents, fetchDocuments } = useDocument()
  useEffect(() => {
    fetchDocuments()
  }, [])

  return (
    <div>
      {documents.map((doc) => (
        <DocumentCard {...doc} key={doc.id} />
      ))}
    </div>
  )
}

export default Laws
