import { IDocument, IDocumentState } from '@/models'
import { create } from 'zustand'
import { $api } from '@/utils/axios'

export const useDocument = create<IDocumentState>((set, get) => ({
  documents: [],
  currentDocument: undefined,
  commentsUnderCurrentDocument: [],
  filter: '',
  search: '',
  votes: 0,
  loading: false,
  error: null,
  fetchDocuments: async () => {
    try {
      set({ loading: true })
      const result = await $api.get<IDocument[], any>(
        `/Documents/GetAll?userId=${7}`
      )
      console.log('docs', result)
      set({ documents: result.data })
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
      else set({ error: 'Uknown error!' })
    } finally {
      set({ loading: false })
    }
  },
  getVotes: async (docId) => {
    try {
      set({ loading: true })
      const result = await $api.get<IDocument[], any>(
        `/Documents/GetVotes?documentId=${docId}`
      )
      console.log('votes', result.data.length)
      set({ votes: result.data.length })
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
      else set({ error: 'Uknown error!' })
    } finally {
      set({ loading: false })
    }
  },
  getDocument: async (id) => {
    try {
      set({ loading: true })
      const result = await $api.get<IDocument, any>(
        `/Documents/Get?id=${id}&userId=${7}`
      )
      console.log('current law', result)
      set({ currentDocument: result.data })
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
      else set({ error: 'Uknown error!' })
    } finally {
      set({ loading: false })
    }
  },
  addDocument: async (userId, titleKg, contentKg) => {
    try {
      set({ loading: true })
      const result = await $api.post<IDocument, any>('/Documents/Add', {
        id: 0,
        titleKg,
        contentKg,
        viewed: 0,
        authorId: 7,
      })
      console.log('added law', result)
      set({
        documents: [
          ...get().documents,
          {
            id: 0,
            authorId: userId,
            titleKg,
            contentKg,
            viewed: 0,
            isReadyForVote: false,
          },
        ],
      })
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
      else set({ error: 'Uknown error!' })
    } finally {
      set({ loading: false })
    }
  },
  addInitiator: async (
    contactDetail: string,
    documentId: number,
    userId: number
  ) => {
    try {
      set({ loading: true })
      console.log(contactDetail)
      const result = await $api.post<IDocument, any>(
        '/Documents/AddInitiator',
        {
          userId,
          documentId,
          contactDetail,
        }
      )
      console.log('added law', result)
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
      else set({ error: 'Uknown error!' })
    } finally {
      set({ loading: false })
    }
  },
  getInitiators: async (documentId) => {
    try {
      set({ loading: true })
      const result = await $api.get<IDocument, any>(
        `/Documents/GetInitiators?documentId=${documentId}`
      )
      console.log('current law', result)
      set({ currentDocument: result.data })
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
      else set({ error: 'Uknown error!' })
    } finally {
      set({ loading: false })
    }
  },
  like: async (userId, docId) => {
    try {
      const result = await $api.post<IDocument, any>('/Documents/Like', {
        documentId: docId,
        userId,
      })
      console.log('current law', result)
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
      else set({ error: 'Uknown error!' })
    }
  },
  getAllComments: async (id) => {
    try {
      const result = await $api.get<IDocument, any>(
        `/Documents/GetComments?documentId=${id}`
      )
      set({ commentsUnderCurrentDocument: result.data })
      console.log('comments', result)
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
      else set({ error: 'Uknown error!' })
    }
  },
  addComment: async (authorId, docId, text) => {
    try {
      const data = {
        id: 0,
        authorId,
        documentId: docId,
        text,
      }
      const result = await $api.post<IDocument, any>(
        '/Documents/AddComment',
        data
      )
      console.log(result)
      set({
        commentsUnderCurrentDocument: [
          ...get().commentsUnderCurrentDocument,
          data,
        ],
      })
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
      else set({ error: 'Uknown error!' })
    }
  },
  setFilter: (filter) => {
    set({ filter })
  },
  setSearch: (search) => {
    set({ search })
  },
  voteForDocument: async (docId, userId, isSupported) => {
    console.log(docId, userId, isSupported)
    try {
      const result = await $api.post<IDocument, any>(
        '/Documents/VoteForDocument',
        {
          userId,
          documentId: docId,
          isSupported,
        }
      )
      console.log('vote', result)
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
      else set({ error: 'Uknown error!' })
    }
  },
}))
