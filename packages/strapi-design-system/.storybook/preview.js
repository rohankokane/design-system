import React from 'react';
import { ThemeProvider } from '../src/ThemeProvider';
import { VisuallyHidden } from '../src/VisuallyHidden';
import { lightTheme } from '../src/themes/lightTheme';
import { darkTheme } from '../src/themes/darkTheme';

export const parameters = {
  options: {
    storySort: {
      order: ['Design System', ['Subatomic', 'Atoms', 'Molecules', 'Organisms', 'Layouts']],
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  multiTheme: {
    list: [
      {
        name: 'Light',
        iconColor: '#fff',
        backgroundColor: `#fff`,
        selectedByDefault: true,
        wrapperComponent: ({ children }) => {
          return <ThemeProvider theme={lightTheme}> {children} </ThemeProvider>;
        },
      },
      {
        name: 'Dark',
        iconColor: '#1E2125',
        backgroundColor: `#1E2125`,
        wrapperComponent: ({ children }) => {
          return <ThemeProvider theme={darkTheme}> {children} </ThemeProvider>;
        },
      },
    ],
  },
};
