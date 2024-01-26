import { TableCell, TableRow } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

export const SkeletonRow = () => (
    <TableRow>
        <TableCell>
            <Skeleton variant="text" />
        </TableCell>
        <TableCell align="right">
            <Skeleton variant="text" />
        </TableCell>
        <TableCell align="right">
            <Skeleton variant="text" />
        </TableCell>
        <TableCell align="right">
            <Skeleton variant="text" />
        </TableCell>
        <TableCell align="right">
            <Skeleton variant="text" />
        </TableCell>
        <TableCell align="right">
            <Skeleton variant="text" />
        </TableCell>
        <TableCell align="right">
            <Skeleton variant="text" />
        </TableCell>
        <TableCell align="right">
            <Skeleton variant="text" />
        </TableCell>
        <TableCell align="right">
            <Skeleton variant="text" />
        </TableCell>
    </TableRow>
);

export const skeletonRows = [...new Array(5)].map((_, index) => (
    <SkeletonRow key={index} />
));
