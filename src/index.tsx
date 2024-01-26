import { createRoot } from 'react-dom/client';
import ThemeProvider from '@/app/providers/ThemeProvider/ThemeProvider';
import ErrorBoundary from '@/app/providers/ErrorBoundary/ErrorBoundary';
import App from './app/App';
import '@/app/styles/reset.scss';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Root container has not found');
}
const root = createRoot(container);
root.render(
    <ErrorBoundary>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </ErrorBoundary>,
);
