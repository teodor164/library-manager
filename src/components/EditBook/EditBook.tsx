import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, Theme, useMediaQuery } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { BookForm, BookFormValues } from '@/components/BookForm';
import { Book } from '@/types/schema';
import { editBook } from '@/api/editBook';

const editIconSx = {
    mr: '4px',
};

interface BookDialogProps {
    book: Book
}

export const EditBook = (props: BookDialogProps) => {
    const { book } = props;

    const [isDialogOpen, setDialogOpen] = useState(false);

    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);

    const handleEditClick = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    const handleSubmit = async (values: BookFormValues) => {
        setIsLoading(true);
        try {
            await editBook({
                ...values,
                id: book.id,
                status: values.status || 'IN_STOCK',
                shape: values.shape || 'NEW',
                price: Number(values.price),
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
            <Button
                aria-label="edit"
                onClick={handleEditClick}
                size={isMobile ? 'small' : undefined}
            >
                {!isMobile && (
                    <EditIcon sx={editIconSx} />
                )}
                Edit
            </Button>
            <Dialog
                open={isDialogOpen}
                onClose={handleCloseDialog}
            >
                <DialogTitle>Edit Book</DialogTitle>
                <DialogContent>
                    <BookForm
                        onSubmit={handleSubmit}
                        book={book}
                        isLoading={isLoading}
                        error={error}
                    />
                </DialogContent>
            </Dialog>
        </>
    );
};
