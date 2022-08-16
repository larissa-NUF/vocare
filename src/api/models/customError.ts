import { AxiosError } from "axios";

export type CustomError = AxiosError<{
    message: string,
    type: string
}>;