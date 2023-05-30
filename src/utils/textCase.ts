export const titleCase = (str: string) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

export const sentenceCase = (str: string) => {
  return str.replace(/\.\s+([a-z])[^\.]|^(\s*[a-z])[^\.]/g, (s) =>
    s.replace(/([a-z])/, (s) => s.toUpperCase())
  );
};
