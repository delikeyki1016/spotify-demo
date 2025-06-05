import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button } from '@mui/material';
import { styled } from "@mui/material";


const ButtonStyle = styled(Button)(({theme})=>({
    width: "3.5rem",
    minWidth: "3.5rem",
    height: "3.5rem",
    borderRadius: "50%",
    margin: 0,
    padding: 0,
    backgroundColor: theme.palette.primary.main,
    color: "#000",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    "& .MuiSvgIcon-root": {
        fontSize: 30,
    }
}))

const PlayButton = () => {
  return <ButtonStyle><PlayArrowIcon /></ButtonStyle>;
};

export default PlayButton;
