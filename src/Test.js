import React, {lazy, Suspense} from 'react';

const Test = ({bool}) => {
  let LazyComponent = null;
  if (bool) {
    LazyComponent = lazy(() => import(/*webpackChunkName:"Home"*/ './Home'));
  } else {
    LazyComponent = lazy(() => import(/*webpackChunkName:"List"*/ './List'));
  }
  return (
    <Suspense>
      <LazyComponent />
    </Suspense>
  );
};

export default Test;
