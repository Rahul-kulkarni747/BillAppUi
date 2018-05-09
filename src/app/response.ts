export class ResponseBody{
    header:Header;
    body:Body;
}

export class Header{
        haserror:boolean;
		errorId:number;
		errorMessage:string;
		errorDetailsMap:any;
}

export class Body{
    payload:any;
}