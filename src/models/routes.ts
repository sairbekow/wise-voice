interface IRoute {
  title: string
  url: string
}

export const ROUTES: IRoute[] = [
  { title: 'Башкы', url: '/' },
  { title: 'Мыйзамдар', url: '/laws' },
  { title: 'Демилгелер', url: '/suggestions' },
  { title: 'Демилге кошуу', url: '/suggestions/new' },
]
