import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import StarIcon from '@mui/icons-material/Star';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function MovieCard({ movie }) {

  const { poster_path, title, overview, vote_average, release_date } = movie;
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 350 }}
        image={`https://image.tmdb.org/t/p/original${poster_path}`}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}- ({release_date})
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {overview}
        </Typography>
      </CardContent>
      <CardActions>

        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <Icon>
          <StarIcon /> - {vote_average}
        </Icon>
      </CardActions>
    </Card>
  );
}
