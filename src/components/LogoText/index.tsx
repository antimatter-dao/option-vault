import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Image from '../Image'

interface Props {
  logo: string | JSX.Element
  text: string
  fontWeight?: number
  fontSize?: number
  size?: 'small' | 'large'
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: (props: Props) => props.fontWeight ?? 400,
    fontSize: (props: Props) => props.fontSize ?? 16,
    '& > img, > svg': {
      marginRight: (props: Props) => (props.size === 'small' ? '4px' : '12px')
    }
  }
})

export default function LogoText(props: Props) {
  const classes = useStyles(props)
  const { logo, text, size } = props
  return (
    <div className={classes.root}>
      {typeof logo === 'string' ? <Image src={logo as string} alt={`${text} logo`} /> : logo}
      <Typography variant={size === 'small' ? 'body2' : 'inherit'}>{text}</Typography>
    </div>
  )
}
