import useSWR from 'swr';
import { api } from './axios';
import { Book } from '@/types/schema';

const fetcher = (url: string) => api.get(url).then((res) => res.data);
export function useBooks() {
    const { data, error, mutate } = useSWR('/books', fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    return {
        books: data as Book[],
        isLoading: !error && !data,
        isError: error,
        mutate,
    };
}
