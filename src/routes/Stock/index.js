export default () => ({
    path: 'stock',
    getComponent (nextState, cb) {
        require.ensure([], (require) => {
            const PageNotFound = require('./components/Stock').default;
            cb(null, PageNotFound)
        })
    }
})