import devIconsName from "../devicon.json";

const names = devIconsName.map((icon) => icon.name);

const IconNameWithSvgTags = devIconsName.reduce(
  (tags: { [k: string]: string[] }, icon) => {
    tags[icon.name] = icon.versions.svg;
    return tags;
  },
  {} as { [k: string]: string[] }
);

const isValidIconName = (devIconName: string): boolean => {
  return names.includes(devIconName);
};

const isValidSvgTag = (devIconName: string, svgTag: string): boolean => {
  return IconNameWithSvgTags[devIconName].includes(svgTag);
};

const getDevIconUrl = (
  devIconName: string,
  svgTag: string = "original"
): string => {
  if (!isValidIconName(devIconName)) throw new Error("Invalid Icon Name");
  if (!isValidSvgTag(devIconName, svgTag)) throw new Error("Invalid Svg tag");

  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${devIconName}/${devIconName}-${svgTag}.svg`;
};

export default getDevIconUrl;
