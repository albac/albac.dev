const getFirstPath = (path: string): string => {
  const original = path.split("/");
  return `/${original[1]}`;
};

export default getFirstPath;
