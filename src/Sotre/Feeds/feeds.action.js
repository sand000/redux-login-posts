import { GET_FEEDS_ERROR, GET_FEEDS_LOADING, GET_FEEDS_SUCCESS } from "./feeds.action.type"
import axios from "axios";

export const getFeeds = ()=>async(dispatch) => {
    dispatch({type: GET_FEEDS_LOADING});

    axios
      .get("http://localhost:8080/feeds")
      .then((res) => {
          dispatch({type:GET_FEEDS_SUCCESS, payload: res.data});
      })
        .catch((err) => {
            dispatch({type: GET_FEEDS_ERROR});
        })
}
