import { useContext } from "react";
import { ArticleData } from "../types/articleTypes";
import { ArticleContext } from "../contexts/ArticleContext";

export const useArticle = (): ArticleData => {
  const context = useContext(ArticleContext);
  if (!context) {
    throw new Error("useCard must be used within a CardProvider")
  }
  return context;
}