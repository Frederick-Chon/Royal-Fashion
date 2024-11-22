import { Middleware } from 'redux';
import { RootState } from '../store';

export const loggerMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    if (typeof action !== 'object' || action === null || !('type' in action)) {
      return next(action);
    }

    console.group(`Action: ${action.type}`);
    console.log('Payload: ', (action as any).payload);
    console.log('Current State: ', store.getState());

    next(action);

    console.log('Next State: ', store.getState());
    console.groupEnd();
  };
