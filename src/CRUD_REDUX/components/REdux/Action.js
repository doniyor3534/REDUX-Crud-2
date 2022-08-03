import { Types } from "./Type"

export const Addfun=(data)=>{
    return{
        type:Types.add,
        payload:data
    }
}
export const Editfun=(data)=>{
    return{
        type:Types.edit,
        payload:data
    }
}
export const Delfun=(data)=>{
    return{
        type:Types.del,
        payload:data
    }
}