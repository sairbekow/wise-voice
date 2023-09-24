export interface IUser {
  id: number
  name: string
  patronomyc: string
  phoneNumber: string
  pin: number
  role: 1 | 2
  surname: string
  walletAddress: string
}

export interface ILaw {
  id?: number
  authorId: number
  author?: IUser
  title: string
  content: string
  liked: boolean
  likes: number
  viewed: number
  createdAt?: string
}

export interface IDocument {
  id: number
  titleRu?: string
  titleKg: string
  contentRu?: string
  contentKg: string
  viewed: number
  authorId: number
  isReadyForVote: false
  initiators?: []
  author?: IUser
  createdAt?: string
}

export interface IComment {
  id: number
  author?: IUser
  authorId: number
  suggestionId?: number
  documentId?: number
  text: string
}

export interface ILawState {
  laws: ILaw[]
  currentLaw: ILaw | undefined
  commentsUnderCurrentLaw: IComment[]
  loading: boolean
  filter: 'likes' | 'views' | 'oldest' | 'newest' | ''
  search: string
  error: string | null
  fetchLaws: () => void
  getLaw: (id: number) => void
  addLaw: (userId: number, title: string, content: string) => void
  removeLaw: (id: number) => void
  like: (userId: number, lawId: number) => void
  getAllComments: (id: number) => void
  addComment: (authorId: number, lawId: number, text: string) => void
  setFilter: (filter: '' | 'likes' | 'views' | 'newest' | 'oldest') => void
  setSearch: (search: string) => void
  vote: (id: number) => void
}

export interface IDocumentState {
  documents: IDocument[]
  currentDocument: IDocument | undefined
  commentsUnderCurrentDocument: IComment[]
  loading: boolean
  votes: number
  filter: 'likes' | 'views' | 'oldest' | 'newest' | ''
  search: string
  error: string | null
  fetchDocuments: () => void
  getVotes: (docId: number) => void
  getDocument: (id: number) => void
  addDocument: (userId: number, title: string, content: string) => void
  addInitiator: (email: string, documentId: number, userId: number) => void
  getInitiators: (documentId: number) => void
  like: (userId: number, docId: number) => void
  getAllComments: (id: number) => void
  addComment: (authorId: number, docId: number, text: string) => void
  setFilter: (filter: '' | 'likes' | 'views' | 'newest' | 'oldest') => void
  setSearch: (search: string) => void
  voteForDocument: (docId: number, userId: number, isSupported: boolean) => void
}
