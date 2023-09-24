import { create } from 'zustand'
import { $api } from '@/utils/axios'
import { IArticleState } from '@/models'

export const useArticle = create<IArticleState>((set, get) => ({
  articles: [],
  currentArticle: undefined,
  comments: [],
  filter: '',
  search: '',
  loading: false,
  error: null,
  fetchArticles: async () => {
    try {
      set({ loading: true })
      const result = await $api.get<any, any>('/Articles/GetAll')
      console.log("Articles", result)
      set({ articles: result.data })
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
      else set({ error: 'Uknown error!' })
    } finally {
      set({ loading: false })
    }
  },
  getArticle: async (id: number) => {
    try {
      set({ loading: true })
      const result = await $api.get<any, any>(`/Articles/Get?id=${id}`)
      console.log('current law', result)
      set({ currentArticle: result.data })
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
      else set({ error: 'Uknown error!' })
    } finally {
      set({ loading: false })
    }
  },
  addArticle: async () => {},
  likeArticle: async (
    userId: number,
    articlesId: number,
    likeOrUnlike: boolean
  ) => {
    try {
      const result = await $api.post<any, any>('/Articles/Like', {
        userId,
        articlesId,
        likeOrUnlike,
      })
      console.log('article liked', result)
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
      else set({ error: 'Uknown error!' })
    }
  },
}))
