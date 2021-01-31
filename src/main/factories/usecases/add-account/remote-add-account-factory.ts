import { RemoteAddAccount } from '@/data/usesCases/add-account/remote-add-account'
import { AddAccount } from '@/domain/usesCases'
import { makeApiUrl } from '../../http/api-url-factory'
import { makeAxiosHttpClient } from '../../http/axios-http-client-factory'

export const makeRemoteAddAccount = (): AddAccount => {
  return new RemoteAddAccount(makeApiUrl('/signup'), makeAxiosHttpClient())
}
