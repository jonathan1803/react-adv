import styles from "../styles/styles.module.css";
import  noImage from '../assets/no-image.jpg';
import { useContext } from "react";
import { ProductContext } from "./ProductCard";

export const ProductImage = ({image=''})=> {
    let imgToshow : String
    
      const {product} = useContext(ProductContext)
      if(image){
        imgToshow = image
      }else if(product.image)
      {
        imgToshow = product.image
      }else{
        imgToshow = noImage
      }
    
      
      return (
        <img className={styles.productImg} src= {image ? image : noImage } alt="no image" />
      )

    }