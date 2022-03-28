import { ReactNode } from "react";
import {useSelector} from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './index';
type Props={
    children:ReactNode;
}
const MuiThemeProvider=({children}:Props)=>{
   
    const themeMode=useSelector((store:any)=>store.theme.value);
    console.log(themeMode);

    return(
		<ThemeProvider theme={theme(false)}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
	);
};

export default MuiThemeProvider;