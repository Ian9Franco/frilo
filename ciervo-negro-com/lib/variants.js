export function defaultSelection(product) {
  const variant = product.variants.find((item) => item.available) || product.variants[0];
  return variant ? [...variant.options] : [];
}

export function findVariant(product, selected) {
  return product.variants.find((variant) => variant.options.every((option, index) => selected[index] === option));
}

export function withOption(product, selected, index, value) {
  const next = [...selected];
  next[index] = value;
  if (findVariant(product, next)) return next;
  const fallback = product.variants.find((variant) => variant.options[index] === value);
  return fallback ? [...fallback.options] : next;
}
