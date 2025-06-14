import { Box, styled, Typography } from "@mui/material";
import { NavLink, Outlet } from "react-router";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LibraryHead from "./components/LibraryHead";
import Library from "./components/Library";
import NavBar from "./components/NavBar";

const Layout = styled("div")({
    display: "flex",
    height: "100vh",
    padding: "8px",
    gap: "8px",
})

const Sidebar = styled("div")(({theme})=>({
    width: "331px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]:{
        display: "none",
    }
}))

const Logo = styled("div")(()=>({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
}))

const ContentBox = styled(Box)(({theme})=>({
    height: "100%",
    borderRadius: "8px",
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    width: "100%",
    padding: "8px",
}))

const NavList = styled("ul")({
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
})

const StyledNavLink = styled(NavLink)(({theme})=>({
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: theme.palette.text.secondary,
    "&:hover": {
        color: theme.palette.text.primary,
    },
    "&.active": {
        color: theme.palette.text.primary,
    }
}))

const AppLayout = () => {

  return (
    <Layout>
        <Sidebar>
            <ContentBox>
                <Logo>
                    <LibraryMusicIcon color="primary" /><Typography variant="h1" fontWeight={700} color="primary">Spotify-demo</Typography>  
                </Logo>
                
                <NavList>
                    <StyledNavLink to="/">
                        <HomeIcon /><Typography variant="h2" fontWeight={700}>Home</Typography>
                    </StyledNavLink>
                    <StyledNavLink to="/search">
                        <SearchIcon /><Typography variant="h2" fontWeight={700}>Search</Typography>
                    </StyledNavLink>
                </NavList>

                <LibraryHead />
                <Library />
            </ContentBox>
        </Sidebar>

        <ContentBox>
            <NavBar />
            <Outlet />
        </ContentBox>
    </Layout>
  )
};

export default AppLayout;