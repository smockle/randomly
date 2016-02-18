const Randomly = require('../dist/randomly')
const test = require('tape')

test('Randomly#string', (t) => {
  t.plan(7)

  t.ok(
    Randomly.string instanceof Function,
    'exists'
  )

  t.throws(
    Randomly.string.bind(this, 'length'),
    'throws an error if length is NaN'
  )

  t.throws(
    Randomly.string.bind(this, -1),
    'throws an error if length is less than zero'
  )

  t.equals(
    Randomly.string(0),
    '',
    'returns a zero-length string'
  )

  t.equals(
    Randomly.string(5).length,
    5,
    'returns a string of length 5'
  )

  t.equals(
    typeof Randomly.string(5),
    'string',
    'returns a string'
  )

  t.ok(
    /[a-zA-Z0-9]/.test(Randomly.string(5)),
    'returns a string of lowercase letters, uppercase letters and numbers'
  )
})

test('Randomly#int', (t) => {
  t.plan(11)

  t.ok(
    Randomly.int instanceof Function,
    'exists'
  )

  t.throws(
    Randomly.int.bind(this, 'min', 1),
    'throws an error if min is NaN'
  )

  t.throws(
    Randomly.int.bind(this, 1, 'max'),
    'throws an error if max is NaN'
  )

  t.ok(
    Randomly.int(-1, -1000) < -1,
    'returns a random negative number below max'
  )

  t.ok(
    Randomly.int(-1, -1000) > -1000,
    'returns a random negative number above min'
  )

  t.ok(
    Randomly.int(1000, -1000) < 1000,
    'returns a random number below max'
  )

  t.ok(
    Randomly.int(1000, -1000) > -1000,
    'returns a random number above min'
  )

  t.ok(
    Randomly.int(1000, 1) < 1000,
    'returns a random positive number below max'
  )

  t.ok(
    Randomly.int(1000, 1) > 1,
    'returns a random positive number above min'
  )

  t.ok(
    Randomly.int(0, 1000) < 1000,
    'returns a random positive number below min (inverted min & max)'
  )

  t.ok(
    Randomly.int(0, 1000) > 0,
    'returns a random positive number above max (inverted min & max)'
  )
})
//
// test('Randomly#getLowerInt', (t) => {
//   t.plan(5)
//   it('exists', () => {
//     assert.typeOf(Randomly.getLowerInt, 'function')
//   })
//
//   it('throws an error if degree is NaN', () => {
//     assert.throw(Randomly.getLowerInt.bind(this, 'degree'))
//   })
//
//   it('throws an error if degree is equal to zero', () => {
//     assert.throw(Randomly.getLowerInt.bind(this, 0))
//   })
//
//   it('returns the smallest one-digit number', () => {
//     assert.strictEqual(Randomly.getLowerInt(1), 0)
//   })
//
//   it('returns the smallest n-digit number', () => {
//     assert.strictEqual(Randomly.getLowerInt(5), 10000)
//   })
// })
//
// test('Randomly#getUpperInt', (t) => {
//   t.plan(5)
//   it('exists', () => {
//     assert.typeOf(Randomly.getUpperInt, 'function')
//   })
//
//   it('throws an error if degree is NaN', () => {
//     assert.throw(Randomly.getUpperInt.bind(this, 'degree'))
//   })
//
//   it('throws an error if degree is equal to zero', () => {
//     assert.throw(Randomly.getUpperInt.bind(this, 0))
//   })
//
//   it('returns the largest one-digit number', () => {
//     assert.strictEqual(Randomly.getUpperInt(1), 9)
//   })
//
//   it('returns the largest n-digit number', () => {
//     assert.strictEqual(Randomly.getUpperInt(5), 99999)
//   })
// })
//
// test('Randomly#create', (t) => {
//   t.plan(8)
//   it('exists', () => {
//     assert.typeOf(Randomly.create, 'function')
//   })
//
//   it('throws an error if length is NaN', () => {
//     assert.throw(Randomly.create.bind(this, Number, '0'))
//   })
//
//   it('creates a string', () => {
//     let string = Randomly.create(String, 5)
//     assert.lengthOf(string, 5)
//     assert.typeOf(string, 'string')
//   })
//
//   it('creates a number', () => {
//     let number = Randomly.create(Number, 5)
//     assert.lengthOf(number.toString(), 5)
//     assert.typeOf(number, 'number')
//   })
//
//   it('creates an object', () => {
//     let object = Randomly.create(Object, 5)
//     assert.lengthOf(object.key, 5)
//     assert.typeOf(object, 'object')
//   })
// })
//
// test('Randomly#collection', (t) => {
//   t.plan(13)
//   it('exists', () => {
//     assert.typeOf(Randomly.collection, 'function')
//   })
//
//   it('throws an error if quantity is NaN', () => {
//     assert.throw(Randomly.collection.bind(this, Number, '0', 1))
//   })
//
//   it('throws an error if length is NaN', () => {
//     assert.throw(Randomly.collection.bind(this, Number, 1, '0'))
//   })
//
//   it('throws an error if quantity is less than zero', () => {
//     assert.throw(Randomly.collection.bind(this, Number, -1, 1))
//   })
//
//   it('throws an error if length is zero', () => {
//     assert.throw(Randomly.collection.bind(this, Number, 1, 0, true))
//   })
//
//   it('creates an empty array', () => {
//     let array = Randomly.collection(Number, 0, 1)
//     assert.lengthOf(array, 0)
//     assert.deepEqual(array, [])
//   })
//
//   it('creates an array of strings', () => {
//     let array = Randomly.collection(String, 5)
//     assert.lengthOf(array, 5)
//     array.forEach(s => assert.typeOf(s, 'string'))
//   })
//
//   it('creates an array of numbers', () => {
//     let array = Randomly.collection(Number, 5)
//     assert.lengthOf(array, 5)
//     array.forEach(s => assert.typeOf(s, 'number'))
//   })
//
//   it('creates an array of objects', () => {
//     let array = Randomly.collection(Object, 5)
//     assert.lengthOf(array, 5)
//     array.forEach(s => assert.typeOf(s, 'object'))
//   })
// })
//
// test('Randomly#sort', (t) => {
//   t.plan(8)
//   it('exists', () => {
//     assert.typeOf(Randomly.sort, 'function')
//   })
//
//   it('sorts an empty array', () => {
//     assert.deepEqual(Randomly.sort([]), [])
//   })
//
//   it('sorts an array of numbers', () => {
//     let unsortedArray = Randomly.collection(Number, 100)
//     let sortedArray = Randomly.sort(unsortedArray)
//     assert.lengthOf(sortedArray, unsortedArray.length)
//     assert.notDeepEqual(sortedArray, unsortedArray)
//   })
//
//   it('sorts an array of strings', () => {
//     let unsortedArray = Randomly.collection(String, 100)
//     let sortedArray = Randomly.sort(unsortedArray)
//     assert.lengthOf(sortedArray, unsortedArray.length)
//     assert.notDeepEqual(sortedArray, unsortedArray)
//   })
//
//   it('sorts an array of objects', () => {
//     let unsortedArray = Randomly.collection(Object, 100)
//     let sortedArray = Randomly.sort(unsortedArray)
//     assert.lengthOf(sortedArray, unsortedArray.length)
//     assert.notDeepEqual(sortedArray, unsortedArray)
//   })
// })
