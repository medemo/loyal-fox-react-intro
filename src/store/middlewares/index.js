export const thunk = store => next => action =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action)

// export const thunk = store => {
//   return next => {
//     return action => {
//       typeof action === 'function'
//         ? action(store.dispatch, store.getState)
//         : next(action)
//     }
//   }
// }

