import { HttpPostClientParams, HttpResponse, HttpPostClient } from '@/data/protocols/http'
import axios from 'axios'

export class AxiosHttpClient implements HttpPostClient<unknown, unknown> {
  async post (params: HttpPostClientParams<unknown>): Promise<HttpResponse<unknown>> {
    const httpResponse = await axios.post(params.url, params.body)
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data
    }
  }
}
