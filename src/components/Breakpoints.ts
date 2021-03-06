import { ThemedCssFunction, BaseThemedCssFunction } from 'styled-components';
import { css } from 'styled-components';

const sizes = {
	xs: 480,
	sm: 768,
	md: 992,
	lg: 1400,
	xl: 1800,
};

// Iterate through the sizes and create a media template
export const media = (Object.keys(sizes) as (keyof typeof sizes)[]).reduce(
  (acc, label) => {
    acc[label] = (first: any, ...interpolations: any[]) => css`
      @media (min-width: ${sizes[label]}px) {
        ${css(first, ...interpolations)}
      }
    `;

    return acc;
  },
  {} as { [key in keyof typeof sizes]: ThemedCssFunction<BaseThemedCssFunction<any[]>>},
);