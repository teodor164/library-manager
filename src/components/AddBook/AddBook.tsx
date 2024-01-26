import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {
    Button, MenuItem, Theme, useMediaQuery,
} from '@mui/material';
import { BookForm, BookFormValues } from '@/components/BookForm';
import { useBooks } from '@/api/useBooks';
import { addBook } from '@/api/addBook';

export const AddBook = () => {
    const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);

    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

    const { books } = useBooks();

    const handleAddClick = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    const handleSubmit = async (values: BookFormValues) => {
        setIsLoading(true);
        try {
            await addBook({
                ...values,
                price: Number(values.price),
                id: books.length + 1,
                status: values.status || 'IN_STOCK',
                shape: values.shape || 'NEW',
            });
            handleCloseDialog();
        } catch (err) {
            setError(err as any);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {isMobile ? (
                <MenuItem onClick={handleAddClick}>
                    Add a New Book

                </MenuItem>
            ) : (
                <Button
                    color="inherit"
                    onClick={handleAddClick}
                >
                    Add a New Book
                </Button>
            )}

            <Dialog
                open={isDialogOpen}
                onClose={handleCloseDialog}
            >
                <DialogTitle>Add Book</DialogTitle>
                <DialogContent>
                    <BookForm
                        onSubmit={handleSubmit}
                        isLoading={isLoading}
                        error={error}
                    />
                </DialogContent>
            </Dialog>
        </>
    );
};
