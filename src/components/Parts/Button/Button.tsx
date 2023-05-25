import styles from './Button.module.scss'

type ButtonProps = {
  text: string
}

export const Button = (props: ButtonProps) => {
  return (
    <button className={styles.Button}>
      {props.text}
    </button>
  )
}