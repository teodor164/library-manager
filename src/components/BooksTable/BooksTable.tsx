import {
    Box,
    Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow as MuiTableRow,
} from '@mui/material';
import { TableRow } from '@/components/BooksTable/TableRow';
import { skeletonRows } from '@/components/BooksTable/SkeletonRow';
import { Book } from '@/types/schema';

const tableSx = {
    '.table': {
        minWidth: 650,
    },

    '.row:last-child td, .row:last-child th': {
        border: 0,
    },

    '.actions-cell': {
        display: 'flex',
        gap: '12px',
    },
};

interface BooksTableProps {
    books: Book[]
    isLoading: boolean
}
export const BooksTable = ({ books, isLoading }: BooksTableProps) => {
    if (!books?.length && !isLoading) {
        return (
            <Box>
                No books find
            </Box>
        );
    }

    let rows;

    if (isLoading) {
        rows = skeletonRows;
    }

    if (books?.length && !isLoading) {
        rows = (
            books?.map((book) => (
                <TableRow
                    book={book}
                    key={book.id}
                />
            ))
        );
    }

    return (
        <TableContainer component={Paper} sx={tableSx}>
            <Table className="table" aria-label="simple table">
                <TableHead>
                    <MuiTableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Title</TableCell>
                        <TableCell align="right">Author</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Shape</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Genres</TableCell>
                        <TableCell align="right">Description</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </MuiTableRow>
                </TableHead>
                <TableBody>
                    {rows}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
