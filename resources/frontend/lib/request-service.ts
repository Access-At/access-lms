import {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  isAxiosError,
} from "axios"

import { axiosApi as axios } from "./axios"
import { sleep } from "./utils"
import { z } from "zod"

interface IRequestServiceOptions {
  url: string
  method?: "GET" | "POST" | "PUT" | "DELETE"
  data?: object
  schema?: z.ZodType
  encryptDataOpt?: boolean
  isDataFile?: boolean
}

// type FormFileValue = {
//   [key: string]: FileList
// }

/**
 * Created by Fadhil
 * GitHub: github.com/thefanaticid
 *
 * Demonstrate passion and commitment to your work.
 * If you are not satisfied with your current position,
 * consider seeking a new opportunity that aligns with your career goals.
 * Strive to excel in your role and seek out opportunities to enhance your skills and knowledge.
 *
 * Please do not break what I have created.
 * It is better for you to be confused because your knowledge is not sufficient than for you to be angry because someone wrote poor code.
 * I have created this because I do not want you to experience the same frustration I have.
 *
 * Please follow my pattern. If you find a pattern that is more effective than mine, you are welcome to improve it.
 * However, please do not make it worse. I will be disappointed if this project is handed over to you.
 *
 * @template T - The type of the response data.
 */
export class RequestService<T> {
  private _url: string
  private _method: "GET" | "POST" | "PUT" | "DELETE"
  private _data: object | null
  private _schema: z.ZodType | null
  //   private _isDataFile: boolean

  private _responseData: T | null = null
  private _config: AxiosRequestConfig

  /**
   * Creates an instance of RequestService.
   * @param {IRequestServiceOptions} options - The options for configuring the request.
   */
  constructor(options: IRequestServiceOptions) {
    const {
      url,
      method = "GET",
      data = null,
      schema = null,
      //   isDataFile = false,
    } = options

    this._url = url
    this._method = method
    this._data = data
    this._schema = schema
    // this._isDataFile = isDataFile

    // Initialize the Axios request configuration
    this._config = {
      url: this._url,
      method: this._method,
      ...(this._data && { data: this._data }),
    }
  }

  /**
   * Gets the response data.
   * @throws Will throw an error if the response data is null.
   * @returns {T} The response data.
   */
  get responseData(): T {
    if (!this._responseData) throw new Error("Response data is null")
    return this._responseData
  }

  /**
   * Sends the HTTP request.
   * @returns {Promise<T>} The response data.
   * @throws Will throw an error if the request fails.
   */
  async sendRequest(): Promise<T> {
    // Handle pre-request tasks
    // this.handleBeforeRequest()
    try {
      // Send the HTTP request using Axios
      const response = await axios.request(this._config)
      // Handle post-request tasks
      const responseData = this.handleAfterRequest(response)
      return responseData
    } catch (error) {
      // Handle Axios errors
      if (isAxiosError(error)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const axiosError = error as AxiosError<any>
        console.error("Error in RequestService:", axiosError)

        // Handle authentication errors
        if (
          axiosError.response?.status === 401 &&
          (axiosError.response.data.message === "Unauthenticated." ||
            axiosError.response.data.message === "Token has expired")
        ) {
          await sleep(250)
          alert(
            `Please log in again as your ${axiosError.response.data.message}`,
          )
          localStorage.removeItem("auth")
          window.location.href = `/auth?redirect=${window.location.pathname}`
        }
        throw axiosError
      } else {
        // Handle non-Axios errors
        console.error("Non-Axios error in RequestService:", error)
        throw error
      }
    }
  }

  /**
   * Handles tasks after receiving the response.
   * @param {AxiosResponse} response - The response from the request.
   * @returns {T} The processed response data.
   * @throws Will throw an error if the response validation fails.
   */
  /**
   * Handles tasks after receiving the response.
   * @param {AxiosResponse} response - The response from the request.
   * @returns {T} The processed response data.
   * @throws Will throw an error if the response validation fails.
   */
  private handleAfterRequest(response: AxiosResponse): T {
    let responseData = {
      ...response.data,
    }

    // Validate response data with schema if provided
    responseData = this._schema
      ? this._schema.parse(responseData)
      : responseData

    return (this._responseData = responseData)
  }
}
