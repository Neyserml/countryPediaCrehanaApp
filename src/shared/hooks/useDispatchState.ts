import { useContext, Context, DispatchWithoutAction } from 'react';

export type DispatchState<T = any, D = DispatchWithoutAction> = {
  dispatch: D;
  state: T;
};

export default function useDispatchState<T extends DispatchState<T['state'], T['dispatch']>>(
  context: Context<T>,
): [T['state'], T['dispatch']] {
  const { state, dispatch } = useContext(context);
  return [state, dispatch];
}
