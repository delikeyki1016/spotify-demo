import { Grid, Typography } from "@mui/material";
import useGetNewReleases from "../../../hooks/useGetNewReleases";
import Loading from "../../../common/components/Loading";
import ErrorMessage from "../../../common/components/ErrorMessage";
import Card from "../../../common/components/Card";

const NewReleases = () => {
  const {data, error, isLoading} = useGetNewReleases();
  console.log("ddd", data)
  if(isLoading) {
    return <Loading />
  }
  if(error){
    return <ErrorMessage error={error.message} />
  }

  // xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536
  return (
    <div>
      <Typography variant="h1" paddingTop="8px" paddingBottom="8px">New Released Albums</Typography>
      {data && data.albums.items.length > 0 ? (
        <Grid container spacing={2}>
          {data.albums.items.map((album)=>(
            <Grid size={{xs:6, md:4, lg:2 }} key={album.id}>
              <Card image={album.images[0].url} name={album.name} artistName={album.artists[0].name} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h2">no data</Typography>
      )}
    </div>
  );
};

export default NewReleases;
