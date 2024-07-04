import { Detail } from '@/components/Pages/Detail'
import { getDetail } from '@/utils/microCMS/client'

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

export default async function Page({
  params: { id },
}: {
  params: { id: string }
}) {
  console.log('id')
  console.log(id)
  const post = await getDetail(id, {
    fields: 'id,title',
  })

  console.log('post')
  console.log(post)

  const data = {
    id: '1',
    title: 'test',
  }

  return <Detail data={post} />
}
