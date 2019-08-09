const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '575px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`, // 320-375
  mobileM: `(min-width: ${size.mobileM})`, // 375-575
  mobileL: `(min-width: ${size.mobileL})`, // 575-768
  tablet: `(min-width: ${size.tablet})`,   // 768-1024
  laptop: `(min-width: ${size.laptop})`,   // 1024-1440
  laptopL: `(min-width: ${size.laptopL})`, // 1440-2560
  desktop: `(min-width: ${size.desktop})`  // > 2560
};