import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import CircularProgress from '@mui/material/CircularProgress';
import {
    Book, BookShape, BookStatus, Genre,
} from '@/types/schema';
import { predefinedGenres } from '@/const/generes';

const formSx = {
    '.title': {
        mt: 2,
    },

    '.genres': {
        maxWidth: '100%',
    },

    '.error-text': {
        color: 'red',
        marginTop: '5px',
    },
};

export interface BookFormValues {
    title: string;
    author: string;
    genres: Genre[];
    description: string;
    price: string
    status?: BookStatus,
    shape?: BookShape
}

interface BookFormProps {
    onSubmit: (values: BookFormValues) => void;
    book?: Book;
    isLoading?: boolean
    error?: Error | null
}

const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    genres: Yup.array().of(Yup.string().oneOf(predefinedGenres)).min(1, 'At least one genre is required'),
    description: Yup.string(),
    status: Yup.string().oneOf(['RESERVED', 'IN_STOCK', 'RENTED'], 'Invalid status').required('Status is required'),
    price: Yup.number().positive('Price must be a positive number').required('Price is required').typeError('Price must be a number'),
    shape: Yup.string().oneOf(['NEW', 'LIKE_NEW', 'USED', 'OLD'], 'Invalid shape').required('Shape is required'),
});

export const BookForm: React.FC<BookFormProps> = (props) => {
    const {
        onSubmit, book, isLoading, error,
    } = props;

    const formik = useFormik({
        initialValues: {
            title: book?.title || '',
            author: book?.author || '',
            genres: book?.genres || [],
            description: book?.description || '',
            status: book?.status,
            shape: book?.shape,
            price: String(book?.price || ''),
        },
        validationSchema,
        onSubmit,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box display="flex" flexDirection="column" gap={2} maxWidth="436px" sx={formSx}>
                <TextField
                    className="title"
                    id="title"
                    name="title"
                    label="Title *"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                    variant="outlined"
                    disabled={isLoading}
                />
                <FormControl fullWidth className="genres" variant="outlined" disabled={isLoading}>
                    <InputLabel id="genres-label">Genres *</InputLabel>
                    <Select
                        labelId="genres-label"
                        id="genres"
                        multiple
                        name="genres"
                        label="Genres *"
                        value={formik.values.genres}
                        onChange={formik.handleChange}
                        renderValue={(selected) => selected.join(', ')}
                        error={formik.touched.genres && Boolean(formik.errors.genres)}
                    >
                        {predefinedGenres.map((genre) => (
                            <MenuItem key={genre} value={genre}>
                                {genre}
                            </MenuItem>
                        ))}
                    </Select>
                    {formik.touched.genres && formik.errors.genres && (
                        <Box className="error-text">{formik.errors.genres}</Box>
                    )}
                </FormControl>
                <Box display="flex" gap={2}>
                    <TextField
                        disabled={isLoading}
                        id="author"
                        name="author"
                        label="Author *"
                        value={formik.values.author}
                        onChange={formik.handleChange}
                        error={formik.touched.author && Boolean(formik.errors.author)}
                        helperText={formik.touched.author && formik.errors.author}
                        variant="outlined"
                    />
                    <TextField
                        disabled={isLoading}
                        id="price"
                        name="price"
                        label="Price *"
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        error={formik.touched.price && Boolean(formik.errors.price)}
                        helperText={formik.touched.price && formik.errors.price}
                        variant="outlined"
                    />
                </Box>
                <Box display="flex" gap={2}>
                    <FormControl
                        fullWidth
                        disabled={isLoading}
                    >
                        <InputLabel id="status-label">Status *</InputLabel>
                        <Select
                            labelId="status-label"
                            id="status"
                            name="status"
                            value={formik.values.status}
                            label="Status *"
                            onChange={formik.handleChange}
                            error={formik.touched.status && Boolean(formik.errors.status)}
                        >
                            <MenuItem value="RESERVED">Reserved</MenuItem>
                            <MenuItem value="IN_STOCK">In Stock</MenuItem>
                            <MenuItem value="RENTED">Rented</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth disabled={isLoading}>
                        <InputLabel id="shape-label">Shape *</InputLabel>
                        <Select
                            labelId="shape-label"
                            id="shape"
                            name="shape"
                            value={formik.values.shape}
                            label="Shape *"
                            onChange={formik.handleChange}
                            error={formik.touched.shape && Boolean(formik.errors.shape)}
                        >
                            <MenuItem value="NEW">New</MenuItem>
                            <MenuItem value="LIKE_NEW">Like New</MenuItem>
                            <MenuItem value="USED">Used</MenuItem>
                            <MenuItem value="OLD">Old</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <TextField
                    disabled={isLoading}
                    id="description"
                    name="description"
                    label="Description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description}
                    variant="outlined"
                    multiline
                    rows={4}
                />
                {error && (
                    <Box className="error-text">
                        {error.message}
                    </Box>
                )}
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <CircularProgress size={24} />
                    ) : (
                        'Submit'
                    )}
                </Button>
            </Box>
        </form>
    );
};
