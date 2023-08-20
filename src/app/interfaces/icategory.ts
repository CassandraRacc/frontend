import { Iarticle } from "./iarticle";

export interface Icategory {
    id:number;
    title:string;
    articles:Iarticle[];

}
