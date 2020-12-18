import { RemoteAuthentication } from '@/data/usesCases/authentication'
import { Authentication } from '@/domain/usesCases'
import { makeApiUrl } from '@/main/factories/http/api-url-factory'
import { makeAxiosHttpClient } from '@/main/factories/http/axios-http-client-factory'

export const makeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication(makeApiUrl(), makeAxiosHttpClient())
}
