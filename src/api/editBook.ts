import { mutate } from 'swr';
import { Book } from '@/types/schema';
import { api } from '@/api/axios';

export const editBook = async (book: Book) => {
    const response = await api.put(`/books/${book.id}`, book);

    if (response.status !== 200) {
        throw new Error('Error updating book');
    }

    return mutate('/books');
};
