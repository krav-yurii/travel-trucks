export function reformatFiltersForRequest(filters) {
  const equipmentArr = (filters.equipment || []).map((item) =>
    typeof item === 'string' ? JSON.parse(item) : item,
  );
  const equipmentObj = Object.assign({}, ...equipmentArr);

  const { equipment, ...rest } = filters;
  const merged = { ...rest, ...equipmentObj };

  Object.keys(merged).forEach((key) => {
    if (merged[key] === '') {
      delete merged[key];
    }
  });

  return merged;
}
