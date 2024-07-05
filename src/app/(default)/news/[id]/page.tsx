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
  const post = await getDetail(id, {
    fields: 'id,title',
  })

  return <Detail data={post} />
}
