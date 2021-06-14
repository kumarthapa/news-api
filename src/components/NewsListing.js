import React, { useEffect } from "react";
import { useNews } from "../context/NewsProvider";
import { makeStyles } from "@material-ui/core/styles";
import NewsContent from "./NewsContent";
const useStyles = makeStyles((theme) => ({
  Cardcontainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "red",
    justifyContent: "center",
  },
  startBtn: {
    margin: 20,
    padding: "10 20px",
  },
}));

const NewsListing = () => {
  const classes = useStyles();
  const { newsData, getNews} = useNews();
  
  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
        <div className={classes.Cardcontainer}>
          {newsData.map((news, index) => {
            return (
              <NewsContent
                author={news.author}
                content={news.content}
                publishedDate={news.publishedAt}
                title={news.title}
                newsUrl={news.url}
                imageUrl={news.urlToImage}
                key={index}
              />
            );
          })}
        </div>
     
    </>
  );
};

export default NewsListing;
