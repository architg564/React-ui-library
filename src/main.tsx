type Props = Readonly<{
  children: string
}>;
function Button(props: Props) {
  return (
    <button>{props.children}</button>
  )
}

export { Button }