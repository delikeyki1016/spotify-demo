import { Button, Typography } from "@mui/material";

const EmptyPlayList = () => {
    return (
        <div style={{marginTop: "20px"}}>
            <Typography variant="h2" fontWeight={500}>Create your first playlist</Typography> 
            <Typography variant="body2">it's easy. we'll help you</Typography> 
            <Button color="secondary" variant="contained" sx={{marginTop: "20px"}}>
                <Typography variant="h2" fontWeight={600}>Create playlist</Typography>
            </Button>
        </div>
    )
};

export default EmptyPlayList;
