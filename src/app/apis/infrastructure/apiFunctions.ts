import { ApiResponse } from '../../../types/Infrastructure'
import { statusCodes } from './statusCodes'

export const baseUrl = 'https://0dmjqc0xyd.execute-api.ap-northeast-2.amazonaws.com/dev'
export const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

export async function getData<T>(response: Response) {
  const body = await response.json()
  return (body as { data: T }).data
}

export async function POST<TResponse>(
  path: string,
  body?: any,
  ): Promise<ApiResponse<TResponse>> {
  try {
    const httpResponse = await fetch(`${baseUrl}${path}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers
    })

    const response = await httpResponse.json()

    return {
      status: httpResponse.status,
      message: response.message,
      data: response.data,
    }

  } catch (error) {
    return {
      status: statusCodes.INTERNAL_SERVER_ERROR,
      message: 'Something went wrong. Please try again later.',
    }
  }
}

export async function DELETE(
  path: string,
  ): Promise<ApiResponse<undefined>> {
  try {
    const httpResponse = await fetch(`${baseUrl}${path}`, {
      method: 'DELETE',
      headers,
    })

    const response = await httpResponse.json()

    return {
      status: httpResponse.status,
      message: response.message,
    }

  } catch (error) {
    return {
      status: statusCodes.INTERNAL_SERVER_ERROR,
      message: 'Something went wrong. Please try again later.',
    }
  }
}
