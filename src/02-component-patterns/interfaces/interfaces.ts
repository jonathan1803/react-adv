import { ReactElement } from "react";

  export interface Product {
    id: string;
    title: string;
    image?: string;
  }
  export interface ProductContextProps {
    increaseBy:  (value: number) => void;
    counter: number;
    product: Product;
  }