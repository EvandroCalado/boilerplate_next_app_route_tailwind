import type { Preview } from '@storybook/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { Inter } from 'next/font/google';
import React from 'react';
import '../src/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

import { withThemeByClassName } from '@storybook/addon-styling';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    nextRouter: {
      Provider: RouterContext.Provider,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <div className={inter.className}>
      <Story />
    </div>
  ),

  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];
