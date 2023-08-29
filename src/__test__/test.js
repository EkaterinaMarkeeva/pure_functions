import conditionIndicator from '../app';

test.each([
  ['healthy', 90, 'green'],
  ['wounded', 30, 'yellow'],
  ['critical', 9, 'red'],
])
('testint indicator function with %s condition and %i health', (condition, health, color) => {
  const result = conditionIndicator(health);
  expect(result).toBe(condition);
});