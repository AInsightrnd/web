import { ApiResponse } from "../../types/Infrastructure"
import { User } from "../../types/User"
import { baseUrl, getData } from "./infrastructure/apiFunctions"

export async function createUser(
  payload: any
): Promise<ApiResponse<User>> {
  const response = await fetch(`${baseUrl}/users`, {
    method: 'POST',
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'Connection': 'keep-alive'
    },
    body: JSON.stringify({
      email: payload.email,
      password: payload.password,
      firstname: payload.firstname,
      lastname: payload.lastname,
    }),
  })

  const result = await response.json()

  return {
    status: response.status,
    message: result.message,
    data: result.data as User,
  }
}