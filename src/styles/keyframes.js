import { keyframes } from "@emotion/react";
// 이미지 확대
export const zoomInSlow = keyframes`
    0% {
        background-size: 100%;
    }
    50% {
        background-size: 110%;
    }
    100% {
        background-size: 100%;
    }
`;

// TopBar
export const subMenuSlideDown = keyframes`
    from {
        transform: scaleY(0);
        opacity: 0;
    }
    to {
        transform: scaleY(1);
        opacity: 1;
    }
`;

export const subMenuSlideUp = keyframes`
    from {
        transform: scaleY(1);
        opacity: 1;
    }
    to {
        transform: scaleY(0);
        opacity: 0;
    }
`;

// Header Animation
export const slideDown = keyframes`
  0% {
    transform: translateY(-105px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const slideUp = keyframes`
  0% {
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(-105px);
    opacity: 0;
  }
`;

export const fadeIn = keyframes`
    from {
        transform: scale(0.8);
    }
    to {
        transform: scale(1);
    }
`;

//IndexSwiper Animation
export const slideUpH2 = keyframes`
  from {
    transform: translate(0%, 20%);
    opacity: 0;
  }
  to {
    transform: translate(0%, 0%);
    opacity: 1;
  }
`;

export const slideUpP = keyframes`
  from {
    transform: translate(0%, 30%);
    opacity: 0;
  }
  to {
    transform: translate(0%, 0%);
    opacity: 1;
  }
`;

// IndexContext Animation
export const moveToLeft = keyframes`
    from {
        transform: translate(-30%);
        opacity: 0;
    }
    to {
        transform: translate(0%);
        opacity: 1;
    }
`;

export const moveToRight = keyframes`
    from {
        transform: translate(30%);
        opacity: 0;
    }
    to {
        transform: translate(0%);
        opacity: 1;
    }
`;

// LinkButton Animation
export const moveToLeftAndRight = keyframes`
    0% { transform: translateX(0); }
    30% { transform: translateX(-10px); }
    50% { transform: translateX(0); }
    70% { transform: translateX(-5px); }
    100% { transform: translateX(0); }
`;

// TopButton Animation
export const scrollUp = keyframes`
    0% { transform: translateY(0); }
    30% { transform: translateY(-10px); }
    50% { transform: translateY(0); }
    70% { transform: translateY(-5px); }
    100% { transform: translateY(0); }
`;