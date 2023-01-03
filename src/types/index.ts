import { Dispatch, SetStateAction } from "react";

export interface PropsDataInputsProduct {
  productId: number,
  title: string,
  brand: string,
  category: string,
  price: number,
  discountPercentage: number,
  rating: number,
  isFavorite: boolean,
  images: string[],
  thumbnail: string,
}

export interface RenderDataProducts {
  productId: number,
  title: string,
  brand: string,
  category: string,
  percentage: string,
  defaultPrice: string,
  discountPrice: string;
  rating: number,
  isFavorite: boolean,
  images: string[],
}

export interface PropsDataResponse {
  dataResponse?: Response;
  setDataResponse?: Dispatch<SetStateAction<Response>>;
}
