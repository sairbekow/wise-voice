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

export interface ILawState {
  laws: ILaw[]
  currentLaw: ILaw | undefined
  loading: boolean
  error: string | null
  fetchLaws: () => void
  getLaw: (id: number) => void
  addLaw: (userId: number, title: string, content: string) => void
  removeLaw: (id: number) => void
  like: (userId: number, lawId: number) => void
  vote: (id: number) => void
}
