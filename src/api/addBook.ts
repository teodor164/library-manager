import { mutate } from 'swr';
import { Book } from '@/types/schema';
import { api } from './axios';

export const addBook = async (newBook: Book) => {
    const response = await api.post('/books', newBook);

    if (response.status !== 201) {
        throw new Error('Error adding book');
    }

    return mutate('/books');
};
