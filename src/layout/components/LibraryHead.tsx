import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';
import styled from "styled-components";
import { Button, Typography } from "@mui/material";

const Title = styled("div")(()=>({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "20px 0 5px",
    paddingTop: "20px",
    borderTop: "1px solid rgb(59, 57, 57)",
    fontSize: 16,
    fontWeight: 600,
}))

const LibraryHead = () => {
    return (
        <Title>
            <BookmarkIcon />
            <Typography variant="h2" fontWeight={600}>Your Library</Typography>
            <Button><AddIcon color="primary" /></Button>
        </Title>
    )
};

export default LibraryHead;
