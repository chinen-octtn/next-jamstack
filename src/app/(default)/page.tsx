import { Top } from '@/components/Pages/Top'

// meta情報
const title = 'Create Next App'
const description = 'ページの説明'

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

export default function Page() {
  return <Top />
}
