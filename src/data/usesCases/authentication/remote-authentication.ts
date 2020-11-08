import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { HttpStatusCode } from '@/data/protocols/http'
import { AuthenticationParams } from '@/domain/usesCases/authentication'
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials-error'
export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient // Injeção de dependencia pelo construtor
  ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError()
      default:
    }
  }
}
