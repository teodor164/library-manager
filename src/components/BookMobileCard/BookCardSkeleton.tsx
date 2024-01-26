import React from 'react';
import {
    Card,
    CardContent,
    Skeleton,
    CardActions,
    Button,
    Chip, Box,
} from '@mui/material';
import { cardSx } from '@/components/BookMobileCard/BookMobileCard';

export const BookCardSkeleton = () => (
    <Card variant="outlined" sx={cardSx}>
        <CardContent>
            <Skeleton variant="rectangular" width="60%" height={28} />
            <Skeleton variant="text" sx={{ marginTop: 2 }} />
            <Skeleton variant="text" width="40%" />
            <Skeleton variant="text" width="40%" />
            <Skeleton variant="text" width="40%" />
            <Skeleton
                variant="text"
                className="description"
                height={80}
            />
            <Box className="genres">
                {Array.from(new Array(3)).map((_, index) => (
                    <Chip
                        key={index}
                        label={<Skeleton variant="text" width={64} />}
                        className="chip"
                    />
                ))}
            </Box>
        </CardContent>
        <CardActions>
            <Button size="small" disabled>
                <Skeleton variant="text" width={36} />
            </Button>
            <Button size="small" disabled>
                <Skeleton variant="text" width={36} />
            </Button>
        </CardActions>
    </Card>
);

export const skeletonList = [...new Array(5)].map((_, index) => (
    <BookCardSkeleton key={index} />
));
