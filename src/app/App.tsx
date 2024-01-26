import { Box, Theme, useMediaQuery } from '@mui/material';
import { Appbar } from '@/components/Appbar';
import { BooksTable } from '@/components/BooksTable';
import { useBooks } from '@/api/useBooks';
import { CardsList } from '@/components/CardsList';

const layoutSx = {
    minHeight: 'calc(100vh - 64px)',
    padding: '3rem',

    '@media (max-width: 600px)': {
        padding: '2rem',
        minHeight: 'calc(100vh - 80px)',
    },
};

const App = () => {
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

    const {
        books,
        isLoading,
    } = useBooks();

    return (
        <>
            <Appbar />
            <Box sx={layoutSx}>
                {isMobile ? (
                    <CardsList
                        books={books}
                        isLoading={isLoading}
                    />
                ) : (
                    <BooksTable
                        books={books}
                        isLoading={isLoading}
                    />
                )}
            </Box>
        </>
    );
};

export default App;
