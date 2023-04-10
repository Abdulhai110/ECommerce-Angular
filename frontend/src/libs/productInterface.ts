interface images{
  id:number
  secure_url:string
}
export interface ProductInterface {
  id: number
  name: string
  price: number
  brand: string
  quantity: number
  description: string
  ratings: number
  categoryId: number
  Category: string
  ProductPhotos:Array<images>
}

export interface productCategory{
  id:number
  name: string
}

