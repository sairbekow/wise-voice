interface IRoute {
  title: string
  url: string
}

export const ROUTES: IRoute[] = [
  { title: 'Башкы', url: '/' },
  { title: 'Мыйзамдар', url: '/laws' },
  { title: 'Мыйзам кошуу', url: '/laws/new' },
]
