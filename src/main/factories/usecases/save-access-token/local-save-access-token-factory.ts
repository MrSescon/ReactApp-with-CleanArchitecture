import { SaveAccessToken } from '@/domain/usesCases'
import { LocalSaveAccessToken } from '@/data/usesCases/save-access-token/local-save-access-token'
import { makeLocalStorageAdapter } from '@/main/factories/cache/local-storage-adapter-factory'

export const makeLocalSaveAccessToken = (): SaveAccessToken => {
  return new LocalSaveAccessToken(makeLocalStorageAdapter())
}
