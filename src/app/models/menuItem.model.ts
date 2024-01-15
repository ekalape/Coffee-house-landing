import { ItemSizes } from 'app/utils/sizes.enum'

export interface MenuItem {
  name: string
  description: string
  price: string
  category: string
  img: string
  sizes: Sizes
  additives: Additives[]
}

export type Sizes = {
  [key in ItemSizes]: SizeAddition
}

export type SizeAddition = {
  size: string,
  "add-price": string
}

export type Additives = {
  name: string,
  "add-price": string
}
