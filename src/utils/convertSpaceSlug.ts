export const convertSpaceSlug = (slug: string) => {
  const result = slug.toLowerCase().replace(/ /g, "-");
  return result;
};
