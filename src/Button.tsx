import styles from './button.module.sass';
type buttonProps = Readonly<{
    children?: string;
}>;
function Button(props: buttonProps) {
  return (
    <button className={styles.Button}>
      {props.children}
    </button>
  )
}

export { Button }