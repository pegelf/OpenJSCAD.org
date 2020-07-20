const test = require('ava')

const { roundedCuboid } = require('./index')

const geom3 = require('../geometries/geom3')

const comparePolygonsAsPoints = require('../../test/helpers/comparePolygonsAsPoints')

test('roundedCuboid (defaults)', (t) => {
  const obs = roundedCuboid()
  const pts = geom3.toPoints(obs)

  t.deepEqual(pts.length, 614)
})

test('roundedCuboid (options)', (t) => {
  // test segments
  let obs = roundedCuboid({ segments: 8 })
  let pts = geom3.toPoints(obs)
  let exp = []

  t.deepEqual(pts.length, 62)
  // test size
  obs = roundedCuboid({ size: [8, 10, 12], segments: 8 })
  pts = geom3.toPoints(obs)
  exp = [
    [[4, 4.8, -5.8], [3.9414213562373095, 4.941421356237309, -5.8],
      [3.9414213562373095, 4.941421356237309, 5.8], [4, 4.8, 5.8]],
    [[3.9414213562373095, 4.941421356237309, -5.8], [3.8, 5, -5.8],
      [3.8, 5, 5.8], [3.9414213562373095, 4.941421356237309, 5.8]],
    [[3.8, 5, -5.8], [-3.8, 5, -5.8],
      [-3.8, 5, 5.8], [3.8, 5, 5.8]],
    [[-3.8, 5, -5.8], [-3.9414213562373095, 4.941421356237309, -5.8],
      [-3.9414213562373095, 4.941421356237309, 5.8], [-3.8, 5, 5.8]],
    [[-3.9414213562373095, 4.941421356237309, -5.8], [-4, 4.8, -5.8],
      [-4, 4.8, 5.8], [-3.9414213562373095, 4.941421356237309, 5.8]],
    [[-4, 4.8, -5.8], [-4, -4.8, -5.8],
      [-4, -4.8, 5.8], [-4, 4.8, 5.8]],
    [[-4, -4.8, -5.8], [-3.9414213562373095, -4.941421356237309, -5.8],
      [-3.9414213562373095, -4.941421356237309, 5.8], [-4, -4.8, 5.8]],
    [[-3.9414213562373095, -4.941421356237309, -5.8], [-3.8, -5, -5.8],
      [-3.8, -5, 5.8], [-3.9414213562373095, -4.941421356237309, 5.8]],
    [[-3.8, -5, -5.8], [3.8, -5, -5.8],
      [3.8, -5, 5.8], [-3.8, -5, 5.8]],
    [[3.8, -5, -5.8], [3.9414213562373095, -4.941421356237309, -5.8],
      [3.9414213562373095, -4.941421356237309, 5.8], [3.8, -5, 5.8]],
    [[3.9414213562373095, -4.941421356237309, -5.8], [4, -4.8, -5.8],
      [4, -4.8, 5.8], [3.9414213562373095, -4.941421356237309, 5.8]],
    [[4, -4.8, -5.8], [4, 4.8, -5.8],
      [4, 4.8, 5.8], [4, -4.8, 5.8]],
    [[4, 4.8, 5.8], [3.9414213562373095, 4.941421356237309, 5.8], [3.9414213562373095, 4.8, 5.94142135623731]],
    [[3.9414213562373095, 4.8, 5.94142135623731], [3.9414213562373095, 4.941421356237309, 5.8], [3.8, 4.941421356237309, 5.94142135623731]],
    [[3.9414213562373095, 4.941421356237309, 5.8], [3.8, 5, 5.8], [3.8, 4.941421356237309, 5.94142135623731]],
    [[-3.8, 5, 5.8], [-3.9414213562373095, 4.941421356237309, 5.8], [-3.8, 4.941421356237309, 5.94142135623731]],
    [[-3.8, 4.941421356237309, 5.94142135623731], [-3.9414213562373095, 4.941421356237309, 5.8], [-3.9414213562373095, 4.8, 5.94142135623731]],
    [[-3.9414213562373095, 4.941421356237309, 5.8], [-4, 4.8, 5.8], [-3.9414213562373095, 4.8, 5.94142135623731]],
    [[-4, -4.8, 5.8], [-3.9414213562373095, -4.941421356237309, 5.8], [-3.9414213562373095, -4.8, 5.94142135623731]],
    [[-3.9414213562373095, -4.8, 5.94142135623731], [-3.9414213562373095, -4.941421356237309, 5.8], [-3.8, -4.941421356237309, 5.94142135623731]],
    [[-3.9414213562373095, -4.941421356237309, 5.8], [-3.8, -5, 5.8], [-3.8, -4.941421356237309, 5.94142135623731]],
    [[3.8, -5, 5.8], [3.9414213562373095, -4.941421356237309, 5.8], [3.8, -4.941421356237309, 5.94142135623731]],
    [[3.8, -4.941421356237309, 5.94142135623731], [3.9414213562373095, -4.941421356237309, 5.8], [3.9414213562373095, -4.8, 5.94142135623731]],
    [[3.9414213562373095, -4.941421356237309, 5.8], [4, -4.8, 5.8], [3.9414213562373095, -4.8, 5.94142135623731]],
    [[3.8, 5, 5.8], [-3.8, 5, 5.8],
      [-3.8, 4.941421356237309, 5.94142135623731], [3.8, 4.941421356237309, 5.94142135623731]],
    [[-4, 4.8, 5.8], [-4, -4.8, 5.8],
      [-3.9414213562373095, -4.8, 5.94142135623731], [-3.9414213562373095, 4.8, 5.94142135623731]],
    [[-3.8, -5, 5.8], [3.8, -5, 5.8],
      [3.8, -4.941421356237309, 5.94142135623731], [-3.8, -4.941421356237309, 5.94142135623731]],
    [[4, -4.8, 5.8], [4, 4.8, 5.8],
      [3.9414213562373095, 4.8, 5.94142135623731], [3.9414213562373095, -4.8, 5.94142135623731]],
    [[4, -4.8, -5.8], [3.9414213562373095, -4.941421356237309, -5.8], [3.9414213562373095, -4.8, -5.94142135623731]],
    [[3.9414213562373095, -4.8, -5.94142135623731], [3.9414213562373095, -4.941421356237309, -5.8], [3.8, -4.941421356237309, -5.94142135623731]],
    [[3.9414213562373095, -4.941421356237309, -5.8], [3.8, -5, -5.8], [3.8, -4.941421356237309, -5.94142135623731]],
    [[-3.8, -5, -5.8], [-3.9414213562373095, -4.941421356237309, -5.8], [-3.8, -4.941421356237309, -5.94142135623731]],
    [[-3.8, -4.941421356237309, -5.94142135623731], [-3.9414213562373095, -4.941421356237309, -5.8], [-3.9414213562373095, -4.8, -5.94142135623731]],
    [[-3.9414213562373095, -4.941421356237309, -5.8], [-4, -4.8, -5.8], [-3.9414213562373095, -4.8, -5.94142135623731]],
    [[-4, 4.8, -5.8], [-3.9414213562373095, 4.941421356237309, -5.8], [-3.9414213562373095, 4.8, -5.94142135623731]],
    [[-3.9414213562373095, 4.8, -5.94142135623731], [-3.9414213562373095, 4.941421356237309, -5.8], [-3.8, 4.941421356237309, -5.94142135623731]],
    [[-3.9414213562373095, 4.941421356237309, -5.8], [-3.8, 5, -5.8], [-3.8, 4.941421356237309, -5.94142135623731]],
    [[3.8, 5, -5.8], [3.9414213562373095, 4.941421356237309, -5.8], [3.8, 4.941421356237309, -5.94142135623731]],
    [[3.8, 4.941421356237309, -5.94142135623731], [3.9414213562373095, 4.941421356237309, -5.8], [3.9414213562373095, 4.8, -5.94142135623731]],
    [[3.9414213562373095, 4.941421356237309, -5.8], [4, 4.8, -5.8], [3.9414213562373095, 4.8, -5.94142135623731]],
    [[3.8, -5, -5.8], [-3.8, -5, -5.8],
      [-3.8, -4.941421356237309, -5.94142135623731], [3.8, -4.941421356237309, -5.94142135623731]],
    [[-4, -4.8, -5.8], [-4, 4.8, -5.8],
      [-3.9414213562373095, 4.8, -5.94142135623731], [-3.9414213562373095, -4.8, -5.94142135623731]],
    [[-3.8, 5, -5.8], [3.8, 5, -5.8],
      [3.8, 4.941421356237309, -5.94142135623731], [-3.8, 4.941421356237309, -5.94142135623731]],
    [[4, 4.8, -5.8], [4, -4.8, -5.8],
      [3.9414213562373095, -4.8, -5.94142135623731], [3.9414213562373095, 4.8, -5.94142135623731]],
    [[3.9414213562373095, 4.8, 5.94142135623731], [3.8, 4.941421356237309, 5.94142135623731], [3.8, 4.8, 6]],
    [[-3.8, 4.941421356237309, 5.94142135623731], [-3.9414213562373095, 4.8, 5.94142135623731], [-3.8, 4.8, 6]],
    [[-3.9414213562373095, -4.8, 5.94142135623731], [-3.8, -4.941421356237309, 5.94142135623731], [-3.8, -4.8, 6]],
    [[3.8, -4.941421356237309, 5.94142135623731], [3.9414213562373095, -4.8, 5.94142135623731], [3.8, -4.8, 6]],
    [[3.8, 4.941421356237309, 5.94142135623731], [-3.8, 4.941421356237309, 5.94142135623731],
      [-3.8, 4.8, 6], [3.8, 4.8, 6]],
    [[-3.9414213562373095, 4.8, 5.94142135623731], [-3.9414213562373095, -4.8, 5.94142135623731],
      [-3.8, -4.8, 6], [-3.8, 4.8, 6]],
    [[-3.8, -4.941421356237309, 5.94142135623731], [3.8, -4.941421356237309, 5.94142135623731],
      [3.8, -4.8, 6], [-3.8, -4.8, 6]],
    [[3.9414213562373095, -4.8, 5.94142135623731], [3.9414213562373095, 4.8, 5.94142135623731],
      [3.8, 4.8, 6], [3.8, -4.8, 6]],
    [[3.9414213562373095, -4.8, -5.94142135623731], [3.8, -4.941421356237309, -5.94142135623731], [3.8, -4.8, -6]],
    [[-3.8, -4.941421356237309, -5.94142135623731], [-3.9414213562373095, -4.8, -5.94142135623731], [-3.8, -4.8, -6]],
    [[-3.9414213562373095, 4.8, -5.94142135623731], [-3.8, 4.941421356237309, -5.94142135623731], [-3.8, 4.8, -6]],
    [[3.8, 4.941421356237309, -5.94142135623731], [3.9414213562373095, 4.8, -5.94142135623731], [3.8, 4.8, -6]],
    [[3.8, -4.941421356237309, -5.94142135623731], [-3.8, -4.941421356237309, -5.94142135623731],
      [-3.8, -4.8, -6], [3.8, -4.8, -6]],
    [[-3.9414213562373095, -4.8, -5.94142135623731], [-3.9414213562373095, 4.8, -5.94142135623731],
      [-3.8, 4.8, -6], [-3.8, -4.8, -6]],
    [[-3.8, 4.941421356237309, -5.94142135623731], [3.8, 4.941421356237309, -5.94142135623731],
      [3.8, 4.8, -6], [-3.8, 4.8, -6]],
    [[3.9414213562373095, 4.8, -5.94142135623731], [3.9414213562373095, -4.8, -5.94142135623731],
      [3.8, -4.8, -6], [3.8, 4.8, -6]],
    [[3.8, 4.8, 6], [-3.8, 4.8, 6],
      [-3.8, -4.8, 6], [3.8, -4.8, 6]],
    [[3.8, -4.8, -6], [-3.8, -4.8, -6],
      [-3.8, 4.8, -6], [3.8, 4.8, -6]]
  ]
  t.deepEqual(pts.length, 62)
  t.true(comparePolygonsAsPoints(pts, exp))

  // test roundRadius
  obs = roundedCuboid({ size: [8, 10, 12], roundRadius: 2, segments: 8 })
  pts = geom3.toPoints(obs)
  exp = [
    [[4, 3, -4], [3.414213562373095, 4.414213562373095, -4],
      [3.414213562373095, 4.414213562373095, 4], [4, 3, 4]],
    [[3.414213562373095, 4.414213562373095, -4], [2, 5, -4],
      [2, 5, 4], [3.414213562373095, 4.414213562373095, 4]],
    [[2, 5, -4], [-1.9999999999999998, 5, -4],
      [-1.9999999999999998, 5, 4], [2, 5, 4]],
    [[-1.9999999999999998, 5, -4], [-3.414213562373095, 4.414213562373095, -4],
      [-3.414213562373095, 4.414213562373095, 4], [-1.9999999999999998, 5, 4]],
    [[-3.414213562373095, 4.414213562373095, -4], [-4, 3.0000000000000004, -4],
      [-4, 3.0000000000000004, 4], [-3.414213562373095, 4.414213562373095, 4]],
    [[-4, 3.0000000000000004, -4], [-4, -2.9999999999999996, -4],
      [-4, -2.9999999999999996, 4], [-4, 3.0000000000000004, 4]],
    [[-4, -2.9999999999999996, -4], [-3.414213562373095, -4.414213562373095, -4],
      [-3.414213562373095, -4.414213562373095, 4], [-4, -2.9999999999999996, 4]],
    [[-3.414213562373095, -4.414213562373095, -4], [-2.0000000000000004, -5, -4],
      [-2.0000000000000004, -5, 4], [-3.414213562373095, -4.414213562373095, 4]],
    [[-2.0000000000000004, -5, -4], [1.9999999999999996, -5, -4],
      [1.9999999999999996, -5, 4], [-2.0000000000000004, -5, 4]],
    [[1.9999999999999996, -5, -4], [3.414213562373095, -4.414213562373095, -4],
      [3.414213562373095, -4.414213562373095, 4], [1.9999999999999996, -5, 4]],
    [[3.414213562373095, -4.414213562373095, -4], [4, -3.0000000000000004, -4],
      [4, -3.0000000000000004, 4], [3.414213562373095, -4.414213562373095, 4]],
    [[4, -3.0000000000000004, -4], [4, 3, -4],
      [4, 3, 4], [4, -3.0000000000000004, 4]],
    [[4, 3, 4], [3.414213562373095, 4.414213562373095, 4], [3.414213562373095, 3, 5.414213562373095]],
    [[3.414213562373095, 3, 5.414213562373095], [3.414213562373095, 4.414213562373095, 4], [2, 4.414213562373095, 5.414213562373095]],
    [[3.414213562373095, 4.414213562373095, 4], [2, 5, 4], [2, 4.414213562373095, 5.414213562373095]],
    [[-1.9999999999999998, 5, 4], [-3.414213562373095, 4.414213562373095, 4], [-2, 4.414213562373095, 5.414213562373095]],
    [[-2, 4.414213562373095, 5.414213562373095], [-3.414213562373095, 4.414213562373095, 4], [-3.414213562373095, 3, 5.414213562373095]],
    [[-3.414213562373095, 4.414213562373095, 4], [-4, 3.0000000000000004, 4], [-3.414213562373095, 3, 5.414213562373095]],
    [[-4, -2.9999999999999996, 4], [-3.414213562373095, -4.414213562373095, 4], [-3.414213562373095, -3, 5.414213562373095]],
    [[-3.414213562373095, -3, 5.414213562373095], [-3.414213562373095, -4.414213562373095, 4], [-2.0000000000000004, -4.414213562373095, 5.414213562373095]],
    [[-3.414213562373095, -4.414213562373095, 4], [-2.0000000000000004, -5, 4], [-2.0000000000000004, -4.414213562373095, 5.414213562373095]],
    [[1.9999999999999996, -5, 4], [3.414213562373095, -4.414213562373095, 4], [1.9999999999999998, -4.414213562373095, 5.414213562373095]],
    [[1.9999999999999998, -4.414213562373095, 5.414213562373095], [3.414213562373095, -4.414213562373095, 4], [3.414213562373095, -3.0000000000000004, 5.414213562373095]],
    [[3.414213562373095, -4.414213562373095, 4], [4, -3.0000000000000004, 4], [3.414213562373095, -3.0000000000000004, 5.414213562373095]],
    [[2, 5, 4], [-1.9999999999999998, 5, 4],
      [-2, 4.414213562373095, 5.414213562373095], [2, 4.414213562373095, 5.414213562373095]],
    [[-4, 3.0000000000000004, 4], [-4, -2.9999999999999996, 4],
      [-3.414213562373095, -3, 5.414213562373095], [-3.414213562373095, 3, 5.414213562373095]],
    [[-2.0000000000000004, -5, 4], [1.9999999999999996, -5, 4],
      [1.9999999999999998, -4.414213562373095, 5.414213562373095], [-2.0000000000000004, -4.414213562373095, 5.414213562373095]],
    [[4, -3.0000000000000004, 4], [4, 3, 4],
      [3.414213562373095, 3, 5.414213562373095], [3.414213562373095, -3.0000000000000004, 5.414213562373095]],
    [[4, -3.0000000000000004, -4], [3.414213562373095, -4.414213562373095, -4], [3.414213562373095, -3.0000000000000004, -5.414213562373095]],
    [[3.414213562373095, -3.0000000000000004, -5.414213562373095], [3.414213562373095, -4.414213562373095, -4], [1.9999999999999998, -4.414213562373095, -5.414213562373095]],
    [[3.414213562373095, -4.414213562373095, -4], [1.9999999999999996, -5, -4], [1.9999999999999998, -4.414213562373095, -5.414213562373095]],
    [[-2.0000000000000004, -5, -4], [-3.414213562373095, -4.414213562373095, -4], [-2.0000000000000004, -4.414213562373095, -5.414213562373095]],
    [[-2.0000000000000004, -4.414213562373095, -5.414213562373095], [-3.414213562373095, -4.414213562373095, -4], [-3.414213562373095, -3, -5.414213562373095]],
    [[-3.414213562373095, -4.414213562373095, -4], [-4, -2.9999999999999996, -4], [-3.414213562373095, -3, -5.414213562373095]],
    [[-4, 3.0000000000000004, -4], [-3.414213562373095, 4.414213562373095, -4], [-3.414213562373095, 3, -5.414213562373095]],
    [[-3.414213562373095, 3, -5.414213562373095], [-3.414213562373095, 4.414213562373095, -4], [-2, 4.414213562373095, -5.414213562373095]],
    [[-3.414213562373095, 4.414213562373095, -4], [-1.9999999999999998, 5, -4], [-2, 4.414213562373095, -5.414213562373095]],
    [[2, 5, -4], [3.414213562373095, 4.414213562373095, -4], [2, 4.414213562373095, -5.414213562373095]],
    [[2, 4.414213562373095, -5.414213562373095], [3.414213562373095, 4.414213562373095, -4], [3.414213562373095, 3, -5.414213562373095]],
    [[3.414213562373095, 4.414213562373095, -4], [4, 3, -4], [3.414213562373095, 3, -5.414213562373095]],
    [[1.9999999999999996, -5, -4], [-2.0000000000000004, -5, -4],
      [-2.0000000000000004, -4.414213562373095, -5.414213562373095], [1.9999999999999998, -4.414213562373095, -5.414213562373095]],
    [[-4, -2.9999999999999996, -4], [-4, 3.0000000000000004, -4],
      [-3.414213562373095, 3, -5.414213562373095], [-3.414213562373095, -3, -5.414213562373095]],
    [[-1.9999999999999998, 5, -4], [2, 5, -4],
      [2, 4.414213562373095, -5.414213562373095], [-2, 4.414213562373095, -5.414213562373095]],
    [[4, 3, -4], [4, -3.0000000000000004, -4],
      [3.414213562373095, -3.0000000000000004, -5.414213562373095], [3.414213562373095, 3, -5.414213562373095]],
    [[3.414213562373095, 3, 5.414213562373095], [2, 4.414213562373095, 5.414213562373095], [2, 3, 6]],
    [[-2, 4.414213562373095, 5.414213562373095], [-3.414213562373095, 3, 5.414213562373095], [-2, 3, 6]],
    [[-3.414213562373095, -3, 5.414213562373095], [-2.0000000000000004, -4.414213562373095, 5.414213562373095], [-2, -3, 6]],
    [[1.9999999999999998, -4.414213562373095, 5.414213562373095], [3.414213562373095, -3.0000000000000004, 5.414213562373095], [2, -3, 6]],
    [[2, 4.414213562373095, 5.414213562373095], [-2, 4.414213562373095, 5.414213562373095],
      [-2, 3, 6], [2, 3, 6]],
    [[-3.414213562373095, 3, 5.414213562373095], [-3.414213562373095, -3, 5.414213562373095],
      [-2, -3, 6], [-2, 3, 6]],
    [[-2.0000000000000004, -4.414213562373095, 5.414213562373095], [1.9999999999999998, -4.414213562373095, 5.414213562373095],
      [2, -3, 6], [-2, -3, 6]],
    [[3.414213562373095, -3.0000000000000004, 5.414213562373095], [3.414213562373095, 3, 5.414213562373095],
      [2, 3, 6], [2, -3, 6]],
    [[3.414213562373095, -3.0000000000000004, -5.414213562373095], [1.9999999999999998, -4.414213562373095, -5.414213562373095], [2, -3, -6]],
    [[-2.0000000000000004, -4.414213562373095, -5.414213562373095], [-3.414213562373095, -3, -5.414213562373095], [-2, -3, -6]],
    [[-3.414213562373095, 3, -5.414213562373095], [-2, 4.414213562373095, -5.414213562373095], [-2, 3, -6]],
    [[2, 4.414213562373095, -5.414213562373095], [3.414213562373095, 3, -5.414213562373095], [2, 3, -6]],
    [[1.9999999999999998, -4.414213562373095, -5.414213562373095], [-2.0000000000000004, -4.414213562373095, -5.414213562373095],
      [-2, -3, -6], [2, -3, -6]],
    [[-3.414213562373095, -3, -5.414213562373095], [-3.414213562373095, 3, -5.414213562373095],
      [-2, 3, -6], [-2, -3, -6]],
    [[-2, 4.414213562373095, -5.414213562373095], [2, 4.414213562373095, -5.414213562373095],
      [2, 3, -6], [-2, 3, -6]],
    [[3.414213562373095, 3, -5.414213562373095], [3.414213562373095, -3.0000000000000004, -5.414213562373095],
      [2, -3, -6], [2, 3, -6]],
    [[2, 3, 6], [-2, 3, 6], [-2, -3, 6], [2, -3, 6]],
    [[2, -3, -6], [-2, -3, -6], [-2, 3, -6], [2, 3, -6]]
  ]
  t.deepEqual(pts.length, 62)
  t.true(comparePolygonsAsPoints(pts, exp))
})
