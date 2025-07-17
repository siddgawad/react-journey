import { createContext } from "react";

type tagProps={
    tag:string|null;
    tagFnctn:(newTag: string)=>void;
}

export const TagContext = createContext<tagProps|null>(null);
