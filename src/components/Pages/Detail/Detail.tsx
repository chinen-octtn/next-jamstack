import styles from './Detail.module.scss'
import Link from 'next/link'

type Props = {
  data: {
    id: string
    title: string
  }
}

export const Detail = (props: Props) => {
  return (
    <main
      className={`${styles.Top} flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <h1>{props.data.title}</h1>
      <p>ニュース詳細</p>
    </main>
  )
}
