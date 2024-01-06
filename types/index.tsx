import { MouseEventHandler } from "react"

export interface customButtonProps {
    label:string
    iconURL?:string
    backgroundColor?:string
    textColor?:string
    borderColor?:string
    fullWidth?:boolean
}

export interface ShoeCardProps {
    imgURL: any,
    bigShoeImg: any,
    changeBigShoe: (shoe: any) => void,
    changeBigShoeImage: ({ bigShoe }: { bigShoe: any }) => void
}


export interface ReviewCardProps {
    imgURL:any,
    customerName:string,
    rating:number,
    feedback:string

}

export interface ServiceCardProps {
    imgURL : any
    label:string
    subtext: string
    
}

export interface PopularProductCardProps {
    imgURL?:any,
    name:string,
    price?: number | string
}