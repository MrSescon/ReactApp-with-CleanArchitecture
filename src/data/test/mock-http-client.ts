import { HttpPostClient, HttpPostClientParams } from '@/data/protocols/http'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: Record<string, unknown>

  async post (params: HttpPostClientParams): Promise<void> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve()
  }
}
