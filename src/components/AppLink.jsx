import { Link } from 'react-router-dom'

export default function AppLink({ to, ...rest }) {
  const target = to.startsWith('#') ? (to === '#top' ? '/' : `/${to}`) : to
  return <Link to={target} {...rest} />
}
