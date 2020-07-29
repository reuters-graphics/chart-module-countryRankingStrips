const num2unitwords = (d, precision) => {
  precision = precision || 2;
  d = parseFloat(d);
  return d < 1000 ? d.toFixed(precision) : d < 1000000 ? `${(d / 1000).toFixed(precision)}K` : d < 1000000000 ? `${(d / 1000000).toFixed(precision)}M` : `${(d / 1000000000).toFixed(precision)}B`;
};

export { num2unitwords };
