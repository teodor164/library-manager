import React, { useState } from 'react';
import {
    Card, CardContent, Typography, CardActions, Button, Chip, Box,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { Book } from '@/types/schema';
import { deleteBook } from '@/api/deleteBook';
import { EditBook } from '@/components/EditBook';

export const cardSx = {
    '.description': {
        marginTop: 2,
    },

    '.genres': {
        marginTop: '8px',
    },

    '.chip': {
        marginRight: '4px',
    },
};

interface BookMobileCardProps {
    book: Book
}
export const BookCard = ({ book }: BookMobileCardProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleDelete = (id: number) => async () => {
        setIsLoading(true);
        try {
            await deleteBook(id);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card variant="outlined" sx={cardSx}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {book.title}
                </Typography>
                <Typography color="textSecondary">
                    Author:
                    {' '}
                    {book.author}
                </Typography>
                <Typography color="textSecondary">
                    Price: $
                    {book.price.toFixed(2)}
                </Typography>
                <Typography color="textSecondary">
                    Shape:
                    {' '}
                    {book.shape}
                </Typography>
                <Typography color="textSecondary">
                    Status:
                    {' '}
                    {book.status}
                </Typography>
                <Typography variant="body2" component="p" className="description">
                    {book.description}
                </Typography>
                <Box className="genres">
                    {book.genres.map((genre, index) => (
                        <Chip key={index} label={genre} className="chip" />
                    ))}
                </Box>
            </CardContent>
            <CardActions>
                <EditBook book={book} />
                <Button size="small" onClick={handleDelete(book.id)}>
                    {isLoading ? (
                        <CircularProgress size={24} />
                    ) : (
                        <>
                            Delete
                        </>
                    )}
                </Button>
            </CardActions>
        </Card>
    );
};
