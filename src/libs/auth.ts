import serverCookie from 'cookie'
import clientCookie from 'js-cookie'

interface Itoken {
  token: string | undefined
}
export const getServerToken = (ctxCookies = ''): Itoken => {
  const {token} = serverCookie.parse(ctxCookies)
  return {token}
}
export const getClientToken = () => {
  const token = clientCookie.get('token')
  return {token}
}
