import {getClientToken} from '^libs/auth'

interface FetchOptions {
  body?: any
  json?: object
  mode?: string
  params?: object
  headers?: object
  isPrivate?: boolean
  local?: boolean
}
export class MainService {
  _method = 'GET'

  getToken = (): string | undefined => {
    const {token} = getClientToken()
    return token
  }

  // api = async (
  //   path: string = '/',
  //   method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH' = 'GET',
  //   {
  //     mode,
  //     body,
  //     json,
  //     params,
  //     headers,
  //     isPrivate = true,
  //     local = false,
  //     ...opts
  //   }: FetchOptions = {}
  // ) => {
  //   const search = params ? encode(params, '?') : ''

  //   if (isPrivate) {
  //     const token = this.getToken()

  //     if (token) {
  //       headers = {
  //         ...headers,
  //         Authorization: `Bearer ${token}`,
  //       }
  //     }
  //   }

  //   try {
  //     const resp = await fetch(
  //       `${constants.API_ENDPOINT}${constants.API_ENDPOINT_VERSION}${path}${search}`,
  //       {
  //         method,
  //         headers: {
  //           ...(json && {'content-type': 'application/json'}),
  //           Accept: 'application/json',
  //           ...headers,
  //         },
  //         ...opts,
  //         // wrap body
  //         body: body || (json ? JSON.stringify(json) : null),
  //         // credentials: 'include', // disabled
  //       }
  //     )

  //     if (resp?.statusText === 'No Content') {
  //       // bypass when it is csrf-cookie request
  //       return await Promise.resolve({})
  //     }

  //     let jsonBody = await resp?.json()
  //     if (!resp?.ok) {
  //       return await Promise.reject(jsonBody)
  //     }
  //     const responseBody = {
  //       ...jsonBody,
  //     }

  //     if (resp.headers.get('token')) {
  //       responseBody.meta = {
  //         token: resp.headers.get('token'),
  //         refreshToken: resp.headers.get('refresh-token'),
  //       }
  //     }
  //     return await Promise.resolve(responseBody)
  //   } catch (err) {
  //     // deal with network error / CORS error
  //     if (err.name === 'TypeError' && err.message === 'Failed to fetch') {
  //       console.error('failed to get proper response from api server', err)
  //     }

  //     // get response
  //     if (typeof err.json === 'function') {
  //       const data = await err.json()
  //       err.response = {data}
  //     }
  //     if (typeof err?.response?.json === 'function') {
  //       const data = await err.response.json()
  //       err.response = {data}
  //     }

  //     if (err.code === 500) {
  //       const customErr = {
  //         ...err,
  //         message: `We seem to be experiencing a problem right now. Please wait a few minutes to try again. If you continue to experience the same issue please contact support@vtrconnect.com' with full details so we can help you.`,
  //       }
  //       return await Promise.reject(customErr)
  //     }

  //     return await Promise.reject(err)
  //   }
  // }
}
