import { AddAccountParams } from '@/domain/usesCases'
import faker from 'faker'

export const mockAddAccountParams = (): AddAccountParams => {
  const password = faker.internet.password()
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password,
    passwordConfirmation: password
  }
}
