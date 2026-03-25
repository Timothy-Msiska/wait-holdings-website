import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.wait-mlimifert.com/',
      lastModified: new Date(),
    },
    {
      url: 'https://www.wait-mlimifert.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://www.wait-mlimifert.com/services',
      lastModified: new Date(),
    },
  ]
}