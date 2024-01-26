import { Box } from '@mui/material';
import { BookCard } from '@/components/BookMobileCard';
import { Book } from '@/types/schema';
import { skeletonList } from '@/components/BookMobileCard/BookCardSkeleton';

interface CardsListProps {
    books: Book[]
    isLoading: boolean
}
export const CardsList = ({ books, isLoading }: CardsListProps) => {
    if (!books?.length && !isLoading) {
        return (
            <Box>
                No books find
            </Box>
        );
    }

    let cards;

    if (isLoading) {
        cards = skeletonList;
    }

    if (!isLoading && books?.length) {
        cards = books?.map((book) => (
            <BookCard key={book.id} book={book} />
        ));
    }

    return (
        <Box display="flex" flexDirection="column" gap={2}>
            {cards}
        </Box>
    );
};
