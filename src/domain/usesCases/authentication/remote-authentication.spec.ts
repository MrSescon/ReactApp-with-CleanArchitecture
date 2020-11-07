import { HttpPostClient } from 'domain/data/protocols/http/http-post-client'
import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClientSpy } from '../../data/test/mock-http-client'

describe('RemoteAuthentication', () => {
  it('should HttpPostClient whith correct URL', async () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toEqual(url)
  })
})
