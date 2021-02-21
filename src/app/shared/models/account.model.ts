// Account related models

export interface RegisterRequest {
    userName: string;
    emailAddress: string;
    password: string;
    appName: string;
}

export function emptyRegisterRequest(): RegisterRequest {
    return {
        userName: '',
        emailAddress: '',
        password: '',
        appName: ''
    }
}

export interface RegisterResponse {
    tenantId: string;
    userName: string;
    name: string;
    surname: string;
    email: string;
    emailConfirmed: boolean;
    phoneNumber: string;
    phoneNumberConfirmed: boolean;
    lockoutEnabled: boolean;
    lockoutEnd: any;
    concurrencyStamp: string;
    isDeleted: boolean;
    deleterId: string;
    deletionTime: Date;
    lastModificationTime: Date;
    lastModifierId: string;
    creationTime: Date;
    creatorId: string;
    id: string;
    extraProperties: {
        additionalProp1: any;
        additionalProp2: any;
        additionalProp3: any;
    }
}

export function emptyRegisterResponse(): RegisterResponse {
    return {
        tenantId: '',
        userName: '',
        name: '',
        surname: '',
        email: '',
        emailConfirmed: false,
        phoneNumber: '',
        phoneNumberConfirmed: false,
        lockoutEnabled: false,
        lockoutEnd: {},
        concurrencyStamp: '',
        isDeleted: false,
        deleterId: '',
        deletionTime: new Date(),
        lastModificationTime: new Date(),
        lastModifierId: '',
        creationTime: new Date(),
        creatorId: '',
        id: '',
        extraProperties: {
            additionalProp1: {},
            additionalProp2: {},
            additionalProp3: {},
        }
    }
}
