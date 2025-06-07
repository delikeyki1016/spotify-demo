import { Box, Popover } from "@mui/material";
import useGetCurrentUserProfile from "../../hooks/useGetCurrentUserProfile";
import { useState } from "react";
import LoginOutButton from "../../common/components/LoginButton";

const profileImg: {image: React.CSSProperties} = {
  image: {
      width: 50,
  height: 50,
  borderRadius: "50%",
  }
};

const NavBar = () => {
  const { data: userProfile } = useGetCurrentUserProfile();
  
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const layerProfile = open ? 'simple-popover' : undefined;

  return (
    <Box display="flex" justifyContent="flex-end" alignItems={"center"} height="64px">
      {userProfile ? (
        <>
        {console.log("userProfile", userProfile)}
          <img 
            src={userProfile.images[0]?.url} alt={userProfile.display_name} style={profileImg.image} 
            onClick={handleClick} aria-describedby={layerProfile} />
            <Popover
              id={layerProfile}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
            >
              <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-end"} gap={"8px"} sx={{ padding: "12px", boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",}}>
                {userProfile.display_name}
                <LoginOutButton />
              </Box>
            </Popover>
        </>
      ) : (<LoginOutButton />)}
    </Box>
  )
};

export default NavBar;
