import { ReactNode } from "react";

import { ArticleContext } from "../contexts/ArticleContext";

import { ArticleData } from "../types/articleTypes";

export const ArticleProvider = ({
  value,
  children,
}: {
  value: ArticleData;
  children: ReactNode;
}) => {
  return <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>;
};