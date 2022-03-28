import { createTheme, ThemeOptions } from '@mui/material';
import { grey } from '@mui/material/colors';

const theme = (dark: boolean): ThemeOptions =>
	createTheme({
		palette: {
			primary: {
				main: '#492286',
				dark: '#141110',
			},
			secondary: {
				main: '#FAC4C4',
			},
			text: {
				primary: dark ? grey[50] : grey[800],
				secondary: dark ? '#FAC4C4' : '#A58980',
			},
			background: {
				default: dark ? '#0F0703' : '#F7F7F7',
			},
		},
		typography: {
			body1: {
				fontSize: '14px',
			},
			body2: {
				fontSize: '10px',
			},
			button: {
				textTransform: 'initial',
				fontSize: '14px',
			
			},
			
		},
		
		
		spacing: [0, 4, 8, 16, 32, 64],
	}) as any;

export default theme;
