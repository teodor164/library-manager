import { Configuration as DevServerConfigurations } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer({ port }: BuildOptions): DevServerConfigurations {
    return {
        port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
