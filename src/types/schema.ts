import { predefinedGenres } from '@/const/generes';

export type BookStatus = 'RESERVED' | 'IN_STOCK' | 'RENTED'

export type BookShape = 'NEW' | 'LIKE_NEW' | 'USED' | 'OLD'

export type Genre = typeof predefinedGenres[number]

export interface Book {
    id: number
    title: string;
    author: string;
    genres: Genre[];
    description: string;
    status: BookStatus;
    price: number;
    shape: BookShape;
}
