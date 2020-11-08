import { RemoteAuthentication } from '@/data/usesCases/authentication/remote-authentication'
import { HttpPostClientSpy } from '@/data/test/mock-http-client'
import { HttpStatusCode } from '@/data/protocols/http'
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials-error'

import { mockAuthentication } from '@/domain/test/mock-authentication'
import faker from 'faker'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  it('should HttpPostClient whith correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth(mockAuthentication())
    expect(httpPostClientSpy.url).toBe(url)
  })

  it('should HttpPostClient whith correct body', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const authParams = mockAuthentication()
    await sut.auth(authParams)
    expect(httpPostClientSpy.body).toBe(authParams)
  })

  it('should throw invalidCredentialsError if HttpPostClient returns 401', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized
    }
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })
})
