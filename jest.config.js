module.exports = {
  roots: ['./'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '__tests__/.*\.spec.ts$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
