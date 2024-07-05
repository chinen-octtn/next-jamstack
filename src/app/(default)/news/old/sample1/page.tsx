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
  return (
    <>
      <h1>静的ファイルテスト1</h1>
      <p>静的HTMLコンテンツ</p>
    </>
  )
}
