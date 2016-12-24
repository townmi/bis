import CounterRoute from 'routes/Counter'

describe('(Blog) Counter', () => {
  let _route

  beforeEach(() => {
    _route = CounterRoute({})
  })

  it('Should return a route configuration object', () => {
    expect(typeof _route).to.equal('object')
  })

  it('Configuration should contain path `counter`', () => {
    expect(_route.path).to.equal('counter')
  })
})
