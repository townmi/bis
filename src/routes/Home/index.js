import HomeView from './components/HomeView'

// Sync route definition
export default {
  component: HomeView
}


// export default (store) => ({
//     path: '/',
//     getComponent (nextState, cb) {
//         require.ensure([], (require) => {
//             const Route = require('./components/Blog').default;
//             cb(null, Route)
//         })
//     }
// })
