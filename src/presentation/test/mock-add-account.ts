import { AddAccount, AddAccountParams } from '@/domain/usesCases'
import { AccountModel } from '@/domain/models'
import { mockAccountModel } from '@/domain/test'

export class AddAccountSpy implements AddAccount {
  account = mockAccountModel()
  params: AddAccountParams

  async add (params: AddAccountParams): Promise<AccountModel> {
    this.params = params
    return this.account
  }
}
