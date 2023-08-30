import conditionIndicator from '../app';

test.each([
  ['healthy', 90, 'green'],
  ['wounded', 30, 'yellow'],
  ['critical', 9, 'red'],
]) // eslint-disable-next-line
('testint indicator function with %s condition and %i health', (condition, health) => {
  const result = conditionIndicator(health);
  expect(result).toBe(condition);
});