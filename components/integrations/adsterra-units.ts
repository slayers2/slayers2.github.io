export interface BannerUnit {
  key: string;
  width: number;
  height: number;
  src: string;
}

export const DESKTOP_BANNER: BannerUnit = {
  key: "06c747eaf3075dd6db64082eac53ae65",
  width: 728,
  height: 90,
  src: "https://www.highrevenueformat.com/06c747eaf3075dd6db64082eac53ae65/invoke.js",
};

export const MOBILE_BANNER: BannerUnit = {
  key: "4881b8f67ac4c51f75367a7b05b632d0",
  width: 320,
  height: 50,
  src: "https://www.highrevenueformat.com/4881b8f67ac4c51f75367a7b05b632d0/invoke.js",
};

export const NATIVE_BANNER = {
  src: "https://pl31582217.profitableratecpmnetwork.com/6ba046a60986db9e7e2e54ccfd090495/invoke.js",
  containerId: "container-6ba046a60986db9e7e2e54ccfd090495",
} as const;

export const SOCIAL_BAR = {
  src: "https://pl31582218.profitableratecpmnetwork.com/58/09/62/58096268d6c9456551d75cd6f64b5806.js",
} as const;

export function bannerAtOptionsSource(unit: BannerUnit) {
  return `atOptions = {
    'key' : '${unit.key}',
    'format' : 'iframe',
    'height' : ${unit.height},
    'width' : ${unit.width},
    'params' : {}
  };`;
}
