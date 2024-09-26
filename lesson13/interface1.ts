
export interface User {
    name: string;
    age: number;
    occupation?: string;
    car?: string;
    children?: number;
}
 export interface Admin extends User {
    role: string;
}
