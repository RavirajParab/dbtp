export interface User{
    Username? : string,
    Email: string,
    Password: string,
    id?:number //optional
}

export interface Position{
    Symbol: string,
    Quantity : number,
    Open: boolean,
    PL : number,
    id?: number //optional
}