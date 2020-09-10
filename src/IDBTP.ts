export interface User{
    Username : string,
    Email: string,
    Password: string
}

export interface Position{
    Symbol: string,
    Quantity : number,
    Open: boolean,
    PL : number,
    id?: number
}