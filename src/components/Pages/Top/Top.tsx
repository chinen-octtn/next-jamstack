import styles from './Top.module.scss'
import { Button } from '@/components/Parts/Button'
import Link from 'next/link'

type Props = {
  data: {
    id: string
    title: string
  }[]
}

export const Top = (props: Props) => {
  return (
    <main className={`${styles.Top} m-24`}>
      <h1 className="text-3xl text-center">ニュースSample</h1>

      <h2 className="text-xl mt-16">CMS連携</h2>

      <p className="mt-4">/news/以下でCMSの記事へリンク</p>

      <ul className="grid gap-y-4 w-full mt-8 border-t-2">
        {props.data.map((item) => (
          <li key={item.id}>
            <Link href={`/news/${item.id}`} className="p-4 block border-b-2">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="text-xl mt-16">静的ページ</h2>

      <p className="mt-4">/news/以下で静的に設置したファイルへリンク</p>

      <ul className="grid gap-y-4 w-full mt-8 border-t-2">
        <li>
          <a href="/news/test1/" className="p-4 block border-b-2">
            静的ページテスト1
          </a>
        </li>
        <li>
          <a href="/news/test1/index.html" className="p-4 block border-b-2">
            静的ページテスト1：index.htmlあり
          </a>
        </li>
        <li>
          <a href="/news/test2/" className="p-4 block border-b-2">
            静的ページテスト2
          </a>
        </li>
        <li>
          <a href="/news/test2/index.html" className="p-4 block border-b-2">
            静的ページテスト2：index.htmlあり
          </a>
        </li>
        {/* <li>
          <Link href="/about">About</Link>
        </li> */}
      </ul>

      <h2 className="text-xl mt-16">/news-old/ディレクトリ</h2>
      <ul className="grid gap-y-4 w-full mt-8 border-t-2">
        <li>
          <Link href="/news-old/test1/" className="p-4 block border-b-2">
            静的ページテスト1
          </Link>
        </li>
      </ul>

      {/* <Button text="サンプルボタン" /> */}
    </main>
  )
}
