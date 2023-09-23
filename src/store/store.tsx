import { ILaw, ILawState } from '@/models'
import { create } from 'zustand'
import { $api } from '@/utils/axios'

export const useLaw = create<ILawState>((set, get) => ({
  laws: [],
  currentLaw: undefined,
  loading: false,
  error: null,
  fetchLaws: async () => {
    try {
      set({ loading: true })
      const result = await $api.get<ILaw[], any>('/Suggestions/GetAll')
      console.log(result)
      set({ laws: result.data })
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
      else set({ error: 'Uknown error!' })
    } finally {
      set({ loading: false })
    }
  },
  getLaw: async (id) => {
    try {
      set({ loading: true })
      const result = await $api.get<ILaw, any>(
        `/Suggestions/Get?id=${id}&userId=${7}`
      )
      console.log('current law', result)
      set({ currentLaw: result.data })
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
      else set({ error: 'Uknown error!' })
    } finally {
      set({ loading: false })
    }
  },
  addLaw: async (userId, title, content) => {
    try {
      set({ loading: true })
      const result = await $api.post<any, any>('/Suggestions/Add', {
        id: 0,
        title,
        content,
        viewed: 0,
        authorId: 7,
      })
      console.log('added law', result)
      set({
        laws: [
          ...get().laws,
          {
            authorId: userId,
            title,
            content,
            liked: false,
            likes: 0,
            viewed: 0,
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
  removeLaw: (id) => {
    set({ laws: [...get().laws.filter((law) => law.id !== id)] })
  },
  like: async (userId, lawId) => {
    try {
      const result = await $api.post<ILaw, any>('/Suggestions/Like', {
        suggestionId: lawId,
        userId,
      })
      console.log('current law', result)
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
      else set({ error: 'Uknown error!' })
    }
  },
  vote: (id) => null,
}))
