import { Top } from '@/components/Pages/Top'
import { client } from '@/utils/microCMS/client'

// meta情報
const title = 'TOPページ'
const description = 'TOPページです。'

export const metadata = {
  title: title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
  },
}

export default async function Page() {
  const news = await client.get({
    endpoint: 'news',
  })

  return <Top data={news.contents} />
}
