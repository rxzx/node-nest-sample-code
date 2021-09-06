

export class ApiResponse {
    constructor() {
        this.isSuccess = false;
        this.message = "";
    }
    
    isSuccess?: boolean;
    data?: any;
    message?: string;
}


export * from './file-dto';