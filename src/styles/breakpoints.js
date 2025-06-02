export const breakpoints = {
  mobile: "430px",   // 핸드폰: ~640px
  tablet: "1024px",  // 태블릿: 641px ~ 1024px
  desktop: "1280px", // 데스크탑: 1025px 이상
};

export const media = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,  
  tablet: `@media (max-width: ${breakpoints.tablet})`,  
  desktop: `@media (max-width: ${breakpoints.desktop})`,
};