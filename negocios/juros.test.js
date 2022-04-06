const juros = require('./juros')
const expect = require('chai').expect


describe('modulo juros', () => {
  it('calcula juros compostos', () => {
    const test1010 = juros.calculoJuros(1000, 0.01, 1)
    expect(test1010).to.equal(1010)

    const test1020 = juros.calculoJuros(1000, 0.02, 1)
    expect(test1020).to.equal(1020)
  })
})