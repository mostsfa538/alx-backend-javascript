function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const currentYear = getCurrentYear();
  const budget = {};

  budget[`income-${currentYear}`] = income;
  budget[`gdp-${currentYear}`] = gdp;
  budget[`capita-${currentYear}`] = capita;

  return budget;
}
