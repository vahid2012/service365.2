import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://service365.ir';

  // لیست شهرها برای ساخت صفحات داینامیک
  const cities = ['semnan', 'shahroud', 'garmsar', 'damghan', 'mehdishahr', 'varamin', 'pishva', 'qarchak', 'pakdasht'];

  // تولید خودکار آدرس صفحات شهرها
  const cityUrls = cities.map((city) => ({
    url: `${baseUrl}/services/amdad-khodro/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pharmacy`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...cityUrls, // اضافه کردن صفحات شهرها به نقشه سایت
  ]
}
