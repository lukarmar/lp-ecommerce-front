import {
  useCallback,
  useState,
  createContext,
  ReactNode,
  useContext,
} from "react";

import api from 'api'


import { PropsDataInputsProduct } from 'types/index'
import { RenderDataProducts } from "types/index";

interface PropsDataProducts {
  changeProductFavorite: (parameter: number, dataFavorite: boolean) => void;
  getDataProducts: () => void;
  products: RenderDataProducts[];
  isLoading: boolean;
}

const DataProducts = createContext<PropsDataProducts>({} as PropsDataProducts);

const RequestDataProducts = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<RenderDataProducts[]>([]);
  const [isLoading, setIsLoading] = useState(false)

  const formatPricePercentageDiscont = (data: number, percentage: number) => {
    const priceFormated = data - (data * (percentage/100));

    return priceFormated.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })
  }

  const formatPrice = (data: number) => {
    return data.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })
  }

  const getDataProducts = useCallback(() => {
    setIsLoading(true)

      api.get<PropsDataInputsProduct[]>("/products")
      .then(res => {
        setProducts(res.data.map(product => ({
          productId: product.productId,
          title: product.title,
          brand: product.brand,
          category: product.category,
          defaultPrice: formatPrice(product.price),
          discountPrice: formatPricePercentageDiscont(product.price, product.discountPercentage),
          percentage: `${product.discountPercentage}%`,
          rating: product.rating,
          isFavorite: product.isFavorite,
          images: product.images

        })))
        
      setIsLoading(false)        
    })
  }, [])

  const changeProductFavorite = useCallback(async (productId: number, dataFavorite: boolean) => {
    api.put<PropsDataInputsProduct>(`/products/${productId}`, {isFavorite: dataFavorite})
      .then(res => {})
  }, [])

  return (
    <DataProducts.Provider value={{ getDataProducts, isLoading, products, changeProductFavorite }}>
      {children}
    </DataProducts.Provider>
  );
};

function useDataProducts(): PropsDataProducts {
  const context = useContext(DataProducts);

  if (!context) {
    throw new Error("useDataProducts must be used within an DataProducts");
  }

  return context;
}

export { RequestDataProducts, useDataProducts };