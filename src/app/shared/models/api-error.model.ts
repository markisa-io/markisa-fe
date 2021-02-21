export interface ErrorResponse {
    code: string;
    message: string;
    details: string;
    data: [];
}

export interface ValidationErrors {
    message: string;
    members: string[];
}

export interface ApiErrorResponse {
    error: ErrorResponse;
    validationErrors: ValidationErrors;
}

export function emptyApiErrorResponse(): ApiErrorResponse {
    return {
        error: {
            code: '',
            message: '',
            details: '',
            data: []
        },
        validationErrors: {
            message: '',
            members: []
        },
    }
}