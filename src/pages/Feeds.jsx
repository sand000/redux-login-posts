import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getFeeds } from "../Sotre/Feeds/feeds.action";

const Feeds = () => {
  
  const {loading, data} = useSelector(store.feeds);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getFeeds());
  }, []);

  if(loading){
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>Feeds</h1>
      {data.map((post) => (
        <ul key={post.id}>
          <li>{post.message}</li>
        </ul>
      ))}
    </div>
  );
};

export default Feeds;
