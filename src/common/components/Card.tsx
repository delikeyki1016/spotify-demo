import { styled, Typography } from "@mui/material";
import PlayButton from "./PlayButton";

interface CardProps {
    name: string;
    image: string;
    artistName: string | undefined;
}

const ImgContainer = styled("div")({
  position: "relative",
  "&:hover .play-button": {
    opacity: 1,
    transform: "translate(-50%, -50%) translateY(0)",
  },
});

const PlayButtonWrapper = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  opacity: 0,
  transform: "translate(-50%, -50%) translateY(15px)",
  transition: "all 0.2s ease",
  zIndex: 1,
});

const styles: {image: React.CSSProperties} = {
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    objectFit: 'cover'
  }
};

const Card = ({image, name, artistName}:CardProps) => {
  return (
    <div>
        <ImgContainer>
         <PlayButtonWrapper className={"play-button"}><PlayButton /></PlayButtonWrapper>
            <img src={image} alt={name} style={styles.image} />
        </ImgContainer>
        <Typography>{name}</Typography>
        <Typography>{artistName}</Typography>
    </div>
  );
};

export default Card;


