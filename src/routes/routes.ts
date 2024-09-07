import { lazy, LazyExoticComponent } from 'react'
import NoLazyLoad from '../01-lazyload/pages/NoLazy';
type JSXComponent = () => JSX.Element

interface Route {
  to: string;
  path: string;
  Component:  LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout= lazy(/*"LazyPage1" */ () => import('../01-lazyload/layout/LazyLayout'))

export const routes: Route[] = [
  {
    path: '/lazy-layout/*',
    to: 'lazy-layout',
    Component: LazyLayout,
    name: 'lazy-layout',
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazyLoad,
    name: 'no-lazy',
  },
  
]
