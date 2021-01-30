import { AddAccount, AddAccountParams } from '@/domain/usesCases'
import { AccountModel } from '@/domain/models'
import { mockAccountModel } from '@/domain/test'

export class AddAccountSpy implements AddAccount {
  account = mockAccountModel()
  params: AddAccountParams
  callscount = 0

  async add (params: AddAccountParams): Promise<AccountModel> {
    this.params = params
    this.callscount++
    return this.account
  }
}
