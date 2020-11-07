import { HttpPostClient } from 'data/protocols/http/http-post-client'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient // Injeção de dependencia pelo construtor
  ) {}

  async auth (): Promise<void> {
    await this.httpPostClient.post({
      url: this.url
    })
  }
}
