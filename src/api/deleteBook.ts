import { mutate } from 'swr';
import { api } from './axios';

export const deleteBook = async (id: number) => {
    const response = await api.delete(`/books/${id}`);

    if (response.status !== 204) {
        throw new Error('Error deleting book');
    }

    return mutate('/books');
};
