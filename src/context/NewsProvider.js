import React, { useContext, useState, createContext } from "react";
import {useHistory} from 'react-router-dom'
import {auth} from '../components/firebase'
import axios from "axios";
const NewsContext = createContext();

export const useNews = () => {
  return useContext(NewsContext);
};

export const NewsProvider = ({ children }) => {
  const history=useHistory();
  const [newsData, setNewsData] = useState([]);
  const [userData, setUserData] =useState()
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const getNews = (open) => {
   
      setLoading(true)
      let apiUrl =
        "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2ae5d92ef04d41469f239acc1b745e0d";
      axios
        .get(apiUrl)
        .then((res) => {
          setNewsData(res.data.articles);
          setLoading(false);
        })
        .catch((err) => setError(err));
    
  };
  const signInWithGoogle=(provider)=>{
    auth.signInWithPopup(provider).then(res=>{
      console.log(res);
      localStorage.setItem("isLogin",true)
      setUserData(res.user)
      history.push("/news")

    }).catch(err=>console.log(err))
  }

  const value = {
    newsData,
    getNews,
    loading,
    error,
    signInWithGoogle
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};
