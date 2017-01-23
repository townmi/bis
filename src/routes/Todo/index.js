export default (store) => ({
  path: 'todo',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Route = require('./components/Todo').default;
      cb(null, Route)
    })
  }
})
