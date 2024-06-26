import type {} from '@mantine/core';
import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
	colors: {
		purple: [
			'#625BF8',
			'#625BF8',
			'#625BF8',
			'#625BF8',
			'#625BF8',
			'#625BF8',
			'#625BF8',
			'#625BF8',
			'#625BF8',
			'#625BF8',
		],
		purpleHover: [
			'rgba(98, 91, 248, 0.1)',
			'rgba(98, 91, 248, 0.2)',
			'rgba(98, 91, 248, 0.3)',
			'rgba(98, 91, 248, 0.4)',
			'rgba(98, 91, 248, 0.5)',
			'rgba(98, 91, 248, 0.6)',
			'rgba(98, 91, 248, 0.7)',
			'rgba(98, 91, 248, 0.8)',
			'rgba(98, 91, 248, 0.9)',
			'rgba(98, 91, 248, 1)',
		],
		// Light Dark
		text: [
			'#fff',
			'#01112C',
			'#fff',
			'#01112C',
			'#fff',
			'#01112C',
			'#fff',
			'#01112C',
			'#fff',
			'#01112C',
		],
		background: [
			'#fff',
			'#F5F7F9',
			'#E6EBF0',
			'#172138',
			'#121B31',
			'#0F1626',
			'#172138',
			'#F5F7F9',
			'#E6EBF0',
			'#172138',
			'#121B31',
			'#0F1626',
		],
		border: [
			'#E1E3EC',
			'#2C3651',
			'#E1E3EC',
			'#2C3651',
			'#E1E3EC',
			'#2C3651',
			'#E1E3EC',
			'#2C3651',
			'#E1E3EC',
			'#2C3651',
		],
		button: [
			'#E1E3EC',
			'#101728',
			'#E1E3EC',
			'#101728',
			'#E1E3EC',
			'#101728',
			'#E1E3EC',
			'#101728',
			'#E1E3EC',
			'#101728',
		],
	},
	primaryColor: 'purple',

	fontFamily: '"Inter Variable", sans-serif',
	fontFamilyMonospace: '"Source Code Pro Variable", monospace',

	fontSizes: {
		md: rem(15),
		lg: rem(32),
	},
});
