import { ApiResponse } from "../../types/Infrastructure"
import { User } from "../../types/User"
import { baseUrl, getData } from "./infrastructure/apiFunctions"

export async function createUser(
  payload: any
): Promise<ApiResponse<User>> {
  const response = await fetch(`${baseUrl}/users`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  return {
    status: response.status,
    message: 'Successfully retrieved jobs',
    data: await getData<User>(response),
  }
}