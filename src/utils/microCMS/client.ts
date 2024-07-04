import { createClient } from 'microcms-js-sdk'
import type { MicroCMSQueries, MicroCMSDate } from 'microcms-js-sdk'

// ニュースの型定義
export type News = {
  id: string
  title: string
} & MicroCMSDate

export const client = createClient({
  serviceDomain: process.env.MICROCMS || '',
  apiKey: process.env.MICROCMS_API_KEY || '',
})

export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  const detailData = await client.getListDetail<News>({
    endpoint: 'news',
    contentId,
    queries,
  })

  return detailData
}
