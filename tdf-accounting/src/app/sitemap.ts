import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tdfaccounting.com'
  
  const routes = [
    '',
    '/about',
    '/contact',
    '/blog',
    '/services/accounting',
    '/services/business-accounts',
    '/services/incorporation',
    '/services/tax'
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
