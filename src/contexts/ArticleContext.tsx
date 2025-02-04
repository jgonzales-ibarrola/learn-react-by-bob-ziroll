// 1). import essential hooks for creating context
// - 

// 2). Define Context Type
// - 

// 3). Create Context
// - 

// 4). Provider Component
// - 

// 5). Custom Hook for consuming context
// - 

import { createContext } from 'react';

import { ArticleData } from '../types/articleTypes';

export const ArticleContext = createContext<ArticleData | null>(null);