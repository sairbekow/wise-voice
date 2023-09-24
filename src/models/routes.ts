export enum Routes {
  HOME = '/',
  ARTICLES = '/articles',
  SUGGESTIONS = '/suggestions',
  SUGGESTIONS_CREATE = '/suggestions/create',
}

interface IRoute {
  title: string
  url: Routes
}

export const NavRoutes: IRoute[] = [
  { title: 'Башкы', url: Routes.HOME },
  { title: 'Талкуулар', url: Routes.ARTICLES },
  { title: 'Демилгелер', url: Routes.SUGGESTIONS },
  { title: 'Демилге кошуу', url: Routes.SUGGESTIONS_CREATE },
]
