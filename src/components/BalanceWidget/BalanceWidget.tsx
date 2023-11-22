import classes from './BalanceWidget.module.scss'

type Props = {
  children:string,
  title:string
}

export default function BalanceWidget({children, title}: Props) {
  return (

    <div className={classes.BalanceWidget}>
      <span>{title}</span>
      <span>{children}</span>
    </div>
  )
}