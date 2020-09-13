export interface User{
    Username? : string,
    Email: string,
    Password: string,
    id?:number //optional
}

export interface Position{
    Symbol: string,
    Quantity : number,
    BP: number,
    SP?: number,
    Open: boolean,
    PL : number,
    Username? : string,
    id?: number //optional
}