export enum Routes {
  HOME = '/',
  LAWS = '/laws',
  ARTICLES = '/articles',
  SUGGESTIONS = '/suggestions',
  SUGGESTIONS_CREATE = '/suggestions/create',
  SIGN_IN_CHOOSE_OPERATOR = '/sign-in/choose-operator',
  SIGN_IN = '/sign-in',
}

interface IRoute {
  title: string
  url: Routes
}

export const NavRoutes: IRoute[] = [
  { title: 'Башкы', url: Routes.HOME },
  { title: 'Мыйзамдар', url: Routes.LAWS },
  { title: 'Талкуулар', url: Routes.ARTICLES },
  { title: 'Демилгелер', url: Routes.SUGGESTIONS },
  { title: 'Демилге кошуу', url: Routes.SUGGESTIONS_CREATE },
]
