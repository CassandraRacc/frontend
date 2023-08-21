import { Iarticle } from "./iarticle";
import { Ifact } from "./ifact";


export interface Ilink {
    fact_id:Ifact[];
    articles:Iarticle[];
}
