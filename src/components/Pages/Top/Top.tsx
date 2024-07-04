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
    <main
      className={`${styles.Top} flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <h2>ニュース</h2>
      <ul className="grid gap-x-4">
        {props.data.map((item) => (
          <li key={item.id}>
            <Link href={`/news/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <ul className="grid gap-x-4">
        <li>
          <Link href="/news/test1/">静的ページテスト1</Link>
        </li>
        <li>
          <Link href="/news/test1/index.html">
            静的ページテスト1：index.htmlあり
          </Link>
        </li>
        <li>
          <Link href="/news/test2/">静的ページテスト2</Link>
        </li>
        <li>
          <Link href="/news/test2/index.html">
            静的ページテスト2：index.htmlあり
          </Link>
        </li>
        {/* <li>
          <Link href="/about">About</Link>
        </li> */}
      </ul>

      <Button text="サンプルボタン" />
    </main>
  )
}
