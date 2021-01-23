import { HttpPostClient } from '@/data/protocols/http'
import { AccountModel } from '@/domain/models'
import { AddAccount, AddAccountParams } from '@/domain/usesCases'

export class RemoteAddAccount implements AddAccount {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AddAccountParams, AccountModel>
  ) {}

  async add (params: AddAccountParams): Promise<AccountModel> {
    await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    return null
  }
}
