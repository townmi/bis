export default (store) => ({
  path: 'blog/:id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Route = require('./components/Blog').default;
      cb(null, Route)
    })
  }
})
