import {
  HttpPostClient,
  HttpPostClientParams,
  HttpResponse,
  HttpStatusCode
} from '@/data/protocols/http'
export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: Record<string, unknown>
  response: HttpResponse = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostClientParams): Promise<HttpResponse> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}
