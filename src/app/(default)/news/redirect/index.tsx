'use client'
import { useRouter } from 'next/navigation'

type Props = {
  id: string
}

export default function Redirect(props: Props) {
  const router = useRouter()

  router.push(`/news/old/${props.id}/`)

  return null
}
