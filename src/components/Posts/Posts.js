import React, { useEffect, useState } from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import axios from "axios";

const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/posts")
  //     .then((res) => setPosts(res.data))
  //     .catch((err) => console.log(err.message));
  // }, []);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={2}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
