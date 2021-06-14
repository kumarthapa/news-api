import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 545,
    margin: 10,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  mediaheadline: {
    padding: "20px",
  },
  avatar: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: "4px 25px",
    color: "red",
  },
}));

const NewsContent = (props) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              business
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.author}
          subheader={props.publishedDate}
        />
        <h2 className={classes.mediaheadline}>{props.title}</h2>
        <CardMedia
          className={classes.media}
          image={props.imageUrl}
          title="news banner"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.content}
          </Typography>
          <details>
            <summary> Read more update</summary>
            <Typography paragraph>{props.content}</Typography>
          </details>
        </CardContent>

        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </Card>
    </>
  );
};

export default NewsContent;
