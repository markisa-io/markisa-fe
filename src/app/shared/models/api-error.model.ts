
export interface ApiErrorResponse {
    error: {
        code: string,
        message: string,
        details?: string,
        data?: any,
        validationErrors?: any
    }
}
export function emptyApiErrorResponse(): ApiErrorResponse {
    return {
        error: {
            code: '',
            message: '',
            details: '',
            data: null,
            validationErrors: null
        }
    }
}