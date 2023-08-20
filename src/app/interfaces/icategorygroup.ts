import { Iarticle } from "./iarticle";
import { Icategory } from "./icategory";

export interface Icategorygroup {
    id:number;
    category: Icategory;
    articles: Iarticle[];


}
