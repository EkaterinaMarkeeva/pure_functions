const lifeIndicators = {
  healthy: {
    indicator: 50,
    color: 'green',
  },
  wounded: {
    indicator: 15,
    color: 'yellow',
  },
  critical: {
    indicator: 0,
    color: 'red',
  },
};

export default function conditionIndicator(health) {
  if (health > lifeIndicators.healthy.indicator) {
    return 'healthy';
  }
  if (health >= lifeIndicators.wounded.indicator) {
    return 'wounded';
  }
  if (health > lifeIndicators.critical.indicator) {
    return 'critical';
  }
}