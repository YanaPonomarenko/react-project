export type ProductType = {
    id:number|string,
    title:string,
    count?: number,
    price:number,
    is_active?: boolean,
    image?:string,
    id_category?:number|string,
}