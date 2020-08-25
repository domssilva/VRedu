import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import Skeleton from '../Skeleton';

const LoadingNewsArticle = () => {
  const { promiseInProgress } = usePromiseTracker();

  return (promiseInProgress === true) ?
    (
      <>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
      </>
    )
      :
    null 
}

export default LoadingNewsArticle;
