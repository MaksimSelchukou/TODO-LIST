import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import {containerSx} from "@/TodolistItem.styles.ts";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {NavButton} from "@/NavButton.ts";
import Switch from "@mui/material/Switch";
import AppBar from "@mui/material/AppBar";
import {changeThemeAppAC} from "@/app/app-reducer.ts";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {selectTheme} from "@/app/app-selectors.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {getTheme} from "@/common/theme/theme.ts";

export const Header = () => {
    const themeMode = useAppSelector(selectTheme)
    const dispatch = useAppDispatch()
    const theme = getTheme(themeMode)
    const changeMode = () => {
        dispatch(changeThemeAppAC({themeMode: themeMode === 'light' ? 'dark' : 'light'}))

    }

    return (
        <AppBar position="static" sx={{mb: '30px'}}>
            <Toolbar>
                <Container maxWidth={'lg'} sx={containerSx}>
                    <IconButton color="inherit">
                        <MenuIcon/>
                    </IconButton>
                    <div>
                        <NavButton>Sign in</NavButton>
                        <NavButton>Sign up</NavButton>
                        <NavButton background={theme.palette.primary.dark}>Faq</NavButton>
                        <Switch color={'default'} onChange={changeMode}/>
                    </div>
                </Container>
            </Toolbar>
        </AppBar>
    )
}