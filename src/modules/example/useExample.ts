import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../';
import { updateExample } from './';

function useExample() {
  // state
  const state = useSelector((state: RootState) => state.example);
  const name = state.name;

  // dispatch functions
  const dispatch = useDispatch();
  const onUpdateExample = useCallback(
    (state: string) => dispatch(updateExample(state)),
    [dispatch]
  );

  return {
    name,
    onUpdateExample
  };
}

export default useExample;
