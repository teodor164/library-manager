import React, { useState } from 'react';
import {
    Box,
    TableCell, TableRow as MuiTableRow,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CircularProgress from '@mui/material/CircularProgress';
import { EditBook } from '@/components/EditBook';
import { deleteBook } from '@/api/deleteBook';
import { Book } from '@/types/schema';

interface TableRowProps {
    book: Book
}

export const TableRow = ({ book }: TableRowProps) => {
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
        <MuiTableRow
            className="row"
        >
            <TableCell component="th" scope="row">
                {book.id}
            </TableCell>
            <TableCell align="right">{book.title}</TableCell>
            <TableCell align="right">{book.author}</TableCell>
            <TableCell align="right">{book.status}</TableCell>
            <TableCell align="right">{book.shape}</TableCell>
            <TableCell align="right">{book.price}</TableCell>
            <TableCell align="right">{book.genres.join(', ')}</TableCell>
            <TableCell align="right">{book.description}</TableCell>
            <TableCell>
                <Box className="actions-cell">
                    <EditBook book={book} />
                    <IconButton aria-label="delete" onClick={handleDelete(book.id)}>
                        {isLoading ? (
                            <CircularProgress size={24} />
                        ) : (
                            <DeleteIcon />
                        )}
                    </IconButton>
                </Box>
            </TableCell>
        </MuiTableRow>
    );
};
