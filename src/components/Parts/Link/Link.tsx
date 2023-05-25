import styles from './Link.module.scss'

type LinkProps = {
  text: string,
  url: string
}

export const Link = (props: LinkProps) => {
  return (
    <a href={props.url} className={styles.link}>{props.text}</a>
  )
}