/* Account related models */

export interface RegisterRequest {
    userName: string;
    emailAddress: string;
    password: string;
    appName: string;
    companyName: string;
    phoneNumber: string;
    name: string;
    surName: string;
}

export function emptyRegisterRequest(): RegisterRequest {
    return {
        userName: '',
        emailAddress: '',
        password: '',
        appName: '',
        companyName: '',
        phoneNumber: '',
        name: '',
        surName: ''
    }
}

export interface RegisterResponse1 {
    tenantId?: any;
    userName: string;
    name: string;
    surname: string;
    email: string;
    emailConfirmed: boolean;
    phoneNumber?: any;
    companyName?: any;
    phoneNumberConfirmed: boolean;
    lockoutEnabled: boolean;
    lockoutEnd?: any;
    concurrencyStamp: string;
    isDeleted: boolean;
    deleterId?: any;
    deletionTime?: any;
    lastModificationTime: Date;
    lastModifierId?: any;
    creationTime: Date;
    creatorId?: any;
    id: string;
    extraProperties: any;
}

export interface RegisterResponse {
    tenantId?:any;
    userName:string;
    name:string;
    surname:string;
    email:string;
    emailConfirmed:boolean;
    phoneNumber?:any;
    companyName?:any;
    phoneNumberConfirmed:boolean;
    lockoutEnabled:boolean;
    lockoutEnd?:any;
    concurrencyStamp:string;
    isDeleted:boolean;
    deleterId?:any;
    deletionTime?:any;
    lastModificationTime:string;
    lastModifierId?:any;
    creationTime:string;
    creatorId?:any;
    id:string;
    extraProperties:{ }
}

export function emptyRegisterResponse(): RegisterResponse {
    return {
        tenantId: null,
        userName: '',
        name: '',
        surname: '',
        email: '',
        emailConfirmed: false,
        phoneNumber: null,
        companyName: null,
        phoneNumberConfirmed: false,
        lockoutEnabled: false,
        lockoutEnd: null,
        concurrencyStamp: '',
        isDeleted: false,
        deleterId: null,
        deletionTime: null,
        lastModificationTime:'',
        lastModifierId: '',
        creationTime: '',
        creatorId: null,
        id: '',
        extraProperties: { }
    }
}
