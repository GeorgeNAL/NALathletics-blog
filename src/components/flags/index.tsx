import { chakra, type ChakraProps, type ThemingProps } from "@chakra-ui/react";

export const US: React.FC<ChakraProps & ThemingProps> = (props) => {
  return (
    <chakra.svg
      width="28px"
      height="20px"
      viewBox="0 0 28 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      // preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <defs>
        <rect id="path-1" x="0" y="0" width="28" height="20" rx="2"></rect>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="linearGradient-3"
        >
          <stop offset="0%" stopColor="#FFFFFF"></stop>
          <stop offset="100%" stopColor="#F0F0F0"></stop>
        </linearGradient>
        <path
          d="M2,2.66666667 C1.63181017,2.66666667 1.33333333,2.36818983 1.33333333,2 C1.33333333,1.63181017 1.63181017,1.33333333 2,1.33333333 C2.36818983,1.33333333 2.66666667,1.63181017 2.66666667,2 C2.66666667,2.36818983 2.36818983,2.66666667 2,2.66666667 Z M4.66666667,2.66666667 C4.29847683,2.66666667 4,2.36818983 4,2 C4,1.63181017 4.29847683,1.33333333 4.66666667,1.33333333 C5.0348565,1.33333333 5.33333333,1.63181017 5.33333333,2 C5.33333333,2.36818983 5.0348565,2.66666667 4.66666667,2.66666667 Z M7.33333333,2.66666667 C6.9651435,2.66666667 6.66666667,2.36818983 6.66666667,2 C6.66666667,1.63181017 6.9651435,1.33333333 7.33333333,1.33333333 C7.70152317,1.33333333 8,1.63181017 8,2 C8,2.36818983 7.70152317,2.66666667 7.33333333,2.66666667 Z M10,2.66666667 C9.63181017,2.66666667 9.33333333,2.36818983 9.33333333,2 C9.33333333,1.63181017 9.63181017,1.33333333 10,1.33333333 C10.3681898,1.33333333 10.6666667,1.63181017 10.6666667,2 C10.6666667,2.36818983 10.3681898,2.66666667 10,2.66666667 Z M3.33333333,4 C2.9651435,4 2.66666667,3.70152317 2.66666667,3.33333333 C2.66666667,2.9651435 2.9651435,2.66666667 3.33333333,2.66666667 C3.70152317,2.66666667 4,2.9651435 4,3.33333333 C4,3.70152317 3.70152317,4 3.33333333,4 Z M6,4 C5.63181017,4 5.33333333,3.70152317 5.33333333,3.33333333 C5.33333333,2.9651435 5.63181017,2.66666667 6,2.66666667 C6.36818983,2.66666667 6.66666667,2.9651435 6.66666667,3.33333333 C6.66666667,3.70152317 6.36818983,4 6,4 Z M8.66666667,4 C8.29847683,4 8,3.70152317 8,3.33333333 C8,2.9651435 8.29847683,2.66666667 8.66666667,2.66666667 C9.0348565,2.66666667 9.33333333,2.9651435 9.33333333,3.33333333 C9.33333333,3.70152317 9.0348565,4 8.66666667,4 Z M10,5.33333333 C9.63181017,5.33333333 9.33333333,5.0348565 9.33333333,4.66666667 C9.33333333,4.29847683 9.63181017,4 10,4 C10.3681898,4 10.6666667,4.29847683 10.6666667,4.66666667 C10.6666667,5.0348565 10.3681898,5.33333333 10,5.33333333 Z M7.33333333,5.33333333 C6.9651435,5.33333333 6.66666667,5.0348565 6.66666667,4.66666667 C6.66666667,4.29847683 6.9651435,4 7.33333333,4 C7.70152317,4 8,4.29847683 8,4.66666667 C8,5.0348565 7.70152317,5.33333333 7.33333333,5.33333333 Z M4.66666667,5.33333333 C4.29847683,5.33333333 4,5.0348565 4,4.66666667 C4,4.29847683 4.29847683,4 4.66666667,4 C5.0348565,4 5.33333333,4.29847683 5.33333333,4.66666667 C5.33333333,5.0348565 5.0348565,5.33333333 4.66666667,5.33333333 Z M2,5.33333333 C1.63181017,5.33333333 1.33333333,5.0348565 1.33333333,4.66666667 C1.33333333,4.29847683 1.63181017,4 2,4 C2.36818983,4 2.66666667,4.29847683 2.66666667,4.66666667 C2.66666667,5.0348565 2.36818983,5.33333333 2,5.33333333 Z M3.33333333,6.66666667 C2.9651435,6.66666667 2.66666667,6.36818983 2.66666667,6 C2.66666667,5.63181017 2.9651435,5.33333333 3.33333333,5.33333333 C3.70152317,5.33333333 4,5.63181017 4,6 C4,6.36818983 3.70152317,6.66666667 3.33333333,6.66666667 Z M6,6.66666667 C5.63181017,6.66666667 5.33333333,6.36818983 5.33333333,6 C5.33333333,5.63181017 5.63181017,5.33333333 6,5.33333333 C6.36818983,5.33333333 6.66666667,5.63181017 6.66666667,6 C6.66666667,6.36818983 6.36818983,6.66666667 6,6.66666667 Z M8.66666667,6.66666667 C8.29847683,6.66666667 8,6.36818983 8,6 C8,5.63181017 8.29847683,5.33333333 8.66666667,5.33333333 C9.0348565,5.33333333 9.33333333,5.63181017 9.33333333,6 C9.33333333,6.36818983 9.0348565,6.66666667 8.66666667,6.66666667 Z M10,8 C9.63181017,8 9.33333333,7.70152317 9.33333333,7.33333333 C9.33333333,6.9651435 9.63181017,6.66666667 10,6.66666667 C10.3681898,6.66666667 10.6666667,6.9651435 10.6666667,7.33333333 C10.6666667,7.70152317 10.3681898,8 10,8 Z M7.33333333,8 C6.9651435,8 6.66666667,7.70152317 6.66666667,7.33333333 C6.66666667,6.9651435 6.9651435,6.66666667 7.33333333,6.66666667 C7.70152317,6.66666667 8,6.9651435 8,7.33333333 C8,7.70152317 7.70152317,8 7.33333333,8 Z M4.66666667,8 C4.29847683,8 4,7.70152317 4,7.33333333 C4,6.9651435 4.29847683,6.66666667 4.66666667,6.66666667 C5.0348565,6.66666667 5.33333333,6.9651435 5.33333333,7.33333333 C5.33333333,7.70152317 5.0348565,8 4.66666667,8 Z M2,8 C1.63181017,8 1.33333333,7.70152317 1.33333333,7.33333333 C1.33333333,6.9651435 1.63181017,6.66666667 2,6.66666667 C2.36818983,6.66666667 2.66666667,6.9651435 2.66666667,7.33333333 C2.66666667,7.70152317 2.36818983,8 2,8 Z"
          id="path-4"
        ></path>
        <filter
          x="-5.4%"
          y="-7.5%"
          width="110.7%"
          height="130.0%"
          filterUnits="objectBoundingBox"
          id="filter-5"
        >
          <feOffset
            dx="0"
            dy="1"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.06 0"
            type="matrix"
            in="shadowOffsetOuter1"
          ></feColorMatrix>
        </filter>
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Flags" transform="translate(-172.000000, -988.000000)">
          <g id="US" transform="translate(172.000000, 988.000000)">
            <mask id="mask-2" fill="white">
              <use xlinkHref="#path-1"></use>
            </mask>
            <use id="Mask" fill="#FFFFFF" xlinkHref="#path-1"></use>
            <path
              d="M0,0 L28,0 L28,1.33333333 L0,1.33333333 L0,0 Z M0,2.66666667 L28,2.66666667 L28,4 L0,4 L0,2.66666667 Z M0,5.33333333 L28,5.33333333 L28,6.66666667 L0,6.66666667 L0,5.33333333 Z M0,8 L28,8 L28,9.33333333 L0,9.33333333 L0,8 Z M0,10.6666667 L28,10.6666667 L28,12 L0,12 L0,10.6666667 Z M0,13.3333333 L28,13.3333333 L28,14.6666667 L0,14.6666667 L0,13.3333333 Z M0,16 L28,16 L28,17.3333333 L0,17.3333333 L0,16 Z M0,18.6666667 L28,18.6666667 L28,20 L0,20 L0,18.6666667 Z"
              fill="#D02F44"
              mask="url(#mask-2)"
            ></path>
            <rect
              fill="#46467F"
              mask="url(#mask-2)"
              x="0"
              y="0"
              width="12"
              height="9.33333333"
            ></rect>
            <g id="Oval-43" mask="url(#mask-2)">
              <use
                fill="black"
                fillOpacity="1"
                filter="url(#filter-5)"
                xlinkHref="#path-4"
              ></use>
              <use
                fill="url(#linearGradient-3)"
                fillRule="evenodd"
                xlinkHref="#path-4"
              ></use>
            </g>
          </g>
        </g>
      </g>
    </chakra.svg>
  );
};

export const UK: React.FC<ChakraProps & ThemingProps> = (props) => {
  return (
    <chakra.svg
      width="28px"
      height="20px"
      viewBox="0 0 28 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <rect id="path-1" x="0" y="0" width="28" height="20" rx="2"></rect>
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Flags" transform="translate(-124.000000, -316.000000)">
          <g id="GB" transform="translate(124.000000, 316.000000)">
            <mask id="mask-2" fill="white">
              <use xlinkHref="#path-1"></use>
            </mask>
            <use id="Mask" fill="#FFFFFF" xlinkHref="#path-1"></use>
            <rect
              fill="#0A17A7"
              mask="url(#mask-2)"
              x="0"
              y="0"
              width="28"
              height="20"
            ></rect>
            <path
              d="M6.67374124,13.3333333 L0,13.3333333 L0,6.66666667 L6.67374124,6.66666667 L-2.77365027,0.29432063 L-1.2824692,-1.91644623 L10.6666667,6.14334768 L10.6666667,-1.33333333 L17.3333333,-1.33333333 L17.3333333,6.14334768 L29.2824692,-1.91644623 L30.7736503,0.29432063 L21.3262588,6.66666667 L28,6.66666667 L28,13.3333333 L21.3262588,13.3333333 L30.7736503,19.7056794 L29.2824692,21.9164462 L17.3333333,13.8566523 L17.3333333,21.3333333 L10.6666667,21.3333333 L10.6666667,13.8566523 L-1.2824692,21.9164462 L-2.77365027,19.7056794 L6.67374124,13.3333333 Z"
              id="Rectangle-2"
              fill="#FFFFFF"
              mask="url(#mask-2)"
            ></path>
            <path
              d="M18.6679688,6.33219401 L31.3333333,-2"
              id="Line"
              stroke="#DB1F35"
              strokeWidth="0.666666667"
              stroke-linecap="round"
              mask="url(#mask-2)"
            ></path>
            <path
              d="M20.0127767,21.3503418 L31.3666178,13.6975098"
              id="Line-Copy-2"
              stroke="#DB1F35"
              strokeWidth="0.666666667"
              stroke-linecap="round"
              mask="url(#mask-2)"
              transform="translate(25.689697, 17.523926) scale(1, -1) translate(-25.689697, -17.523926) "
            ></path>
            <path
              d="M8.00553385,6.31046549 L-3.83748372,-1.67097982"
              id="Line-Copy"
              stroke="#DB1F35"
              strokeWidth="0.666666667"
              stroke-linecap="round"
              mask="url(#mask-2)"
            ></path>
            <path
              d="M9.29003906,22.3104655 L-3.83748372,13.6048991"
              id="Line-Copy-3"
              stroke="#DB1F35"
              strokeWidth="0.666666667"
              stroke-linecap="round"
              mask="url(#mask-2)"
              transform="translate(2.726278, 17.957682) scale(1, -1) translate(-2.726278, -17.957682) "
            ></path>
            <polygon
              id="Rectangle-2-Copy-3"
              fill="#E6273E"
              mask="url(#mask-2)"
              points="0 12 12 12 12 20 16 20 16 12 28 12 28 8 16 8 16 0 12 0 12 8 0 8"
            ></polygon>
          </g>
        </g>
      </g>
    </chakra.svg>
  );
};

export const DE: React.FC<ChakraProps & ThemingProps> = (props) => {
  return (
    <chakra.svg
      width="28px"
      height="20px"
      viewBox="0 0 28 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <rect id="path-1" x="0" y="0" width="28" height="20" rx="2"></rect>
        <rect
          id="path-3"
          x="0"
          y="6.66666667"
          width="28"
          height="6.66666667"
        ></rect>
        <filter
          x="-5.4%"
          y="-22.5%"
          width="110.7%"
          height="145.0%"
          filterUnits="objectBoundingBox"
          id="filter-4"
        >
          <feMorphology
            radius="0.5"
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          ></feMorphology>
          <feOffset
            dx="0"
            dy="0"
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.06 0"
            type="matrix"
            in="shadowOffsetOuter1"
          ></feColorMatrix>
        </filter>
        <rect
          id="path-5"
          x="0"
          y="13.3333333"
          width="28"
          height="6.66666667"
        ></rect>
        <filter
          x="-5.4%"
          y="-22.5%"
          width="110.7%"
          height="145.0%"
          filterUnits="objectBoundingBox"
          id="filter-6"
        >
          <feMorphology
            radius="0.5"
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          ></feMorphology>
          <feOffset
            dx="0"
            dy="0"
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.06 0"
            type="matrix"
            in="shadowOffsetOuter1"
          ></feColorMatrix>
        </filter>
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Flags" transform="translate(-268.000000, -172.000000)">
          <g id="DE" transform="translate(268.000000, 172.000000)">
            <mask id="mask-2" fill="white">
              <use xlinkHref="#path-1"></use>
            </mask>
            <use id="Mask" fill="#FFFFFF" xlinkHref="#path-1"></use>
            <rect
              id="Rectangle-2"
              fill="#262626"
              mask="url(#mask-2)"
              x="0"
              y="0"
              width="28"
              height="6.66666667"
            ></rect>
            <g id="Rectangle-2" mask="url(#mask-2)">
              <use
                fill="black"
                fillOpacity="1"
                filter="url(#filter-4)"
                xlinkHref="#path-3"
              ></use>
              <use fill="#F01515" fillRule="evenodd" xlinkHref="#path-3"></use>
            </g>
            <g id="Rectangle-2" mask="url(#mask-2)">
              <use
                fill="black"
                fillOpacity="1"
                filter="url(#filter-6)"
                xlinkHref="#path-5"
              ></use>
              <use fill="#FFD521" fillRule="evenodd" xlinkHref="#path-5"></use>
            </g>
          </g>
        </g>
      </g>
    </chakra.svg>
  );
};

export const ES: React.FC<ChakraProps & ThemingProps> = (props) => {
  return (
    <chakra.svg
      width="28px"
      height="20px"
      viewBox="0 0 28 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <rect id="path-1" x="0" y="0" width="28" height="20" rx="2"></rect>
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Flags" transform="translate(-220.000000, -220.000000)">
          <g id="ES" transform="translate(220.000000, 220.000000)">
            <mask id="mask-2" fill="white">
              <use xlinkHref="#path-1"></use>
            </mask>
            <use id="Mask" fill="#FFFFFF" xlinkHref="#path-1"></use>
            <rect
              id="Rectangle-2"
              fill="#DD172C"
              mask="url(#mask-2)"
              x="0"
              y="0"
              width="28"
              height="5.33333333"
            ></rect>
            <rect
              id="Rectangle-2"
              fill="#DD172C"
              mask="url(#mask-2)"
              x="0"
              y="14.6666667"
              width="28"
              height="5.33333333"
            ></rect>
            <rect
              id="Rectangle-2"
              fill="#FFD133"
              mask="url(#mask-2)"
              x="0"
              y="5.33333333"
              width="28"
              height="9.33333333"
            ></rect>
            <polygon
              id="Rectangle-139-Copy"
              fill="#FFEDB1"
              mask="url(#mask-2)"
              points="7.33333333 9.33333333 8.66666667 9.33333333 8.66666667 10 7.33333333 10"
            ></polygon>
            <path
              d="M6.05389181,9.29950349 L6.22118675,11.3070428 C6.26842017,11.8738438 6.76814424,12.3333333 7.33333333,12.3333333 C7.89937132,12.3333333 8.39839994,11.8720026 8.44547992,11.3070428 L8.61277486,9.29950349 C8.62723547,9.12597611 8.50798852,9 8.32545026,9 L6.34121641,9 C6.16543785,9 6.04000832,9.13290166 6.05389181,9.29950349 Z"
              id="Rectangle-137"
              stroke="#A41517"
              strokeWidth="0.666666667"
              mask="url(#mask-2)"
            ></path>
            <polygon
              id="Rectangle-139"
              fill="#A41517"
              mask="url(#mask-2)"
              points="6 10 8.66666667 10 8.66666667 10.6666667 8 10.6666667 7.33333333 12 6.66666667 10.6666667 6 10.6666667"
            ></polygon>
            <rect
              id="Rectangle-135"
              fill="#A41517"
              mask="url(#mask-2)"
              x="4"
              y="8"
              width="1.33333333"
              height="4.66666667"
            ></rect>
            <rect
              id="Rectangle-135-Copy"
              fill="#A41517"
              mask="url(#mask-2)"
              x="9.33333333"
              y="8"
              width="1.33333333"
              height="4.66666667"
            ></rect>
            <path
              d="M6,7.33333333 C6,6.9651435 6.30590057,6.66666667 6.6729126,6.66666667 L7.99375407,6.66666667 C8.36539343,6.66666667 8.66666667,6.96257655 8.66666667,7.33333333 L8.66666667,7.6635437 C8.66666667,7.84936338 8.52329508,8 8.33968099,8 L6.32698568,8 C6.14639647,8 6,7.85730998 6,7.6635437 L6,7.33333333 Z"
              id="Rectangle-138"
              fill="#A41517"
              mask="url(#mask-2)"
            ></path>
          </g>
        </g>
      </g>
    </chakra.svg>
  );
};

export const CN: React.FC<ChakraProps & ThemingProps> = (props) => {
  return (
    <chakra.svg
      width="28px"
      height="20px"
      viewBox="0 0 28 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <rect id="path-1" x="0" y="0" width="28" height="20" rx="2"></rect>
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Flags" transform="translate(-268.000000, -124.000000)">
          <g id="CN" transform="translate(268.000000, 124.000000)">
            <mask id="mask-2" fill="white">
              <use xlinkHref="#path-1"></use>
            </mask>
            <use id="Mask" fill="#FFFFFF" xlinkHref="#path-1"></use>
            <rect
              id="Mask"
              fill="#F1361D"
              mask="url(#mask-2)"
              x="0"
              y="0"
              width="28"
              height="20"
            ></rect>
            <path
              d="M13.5058794,5.97728388 L12.6666667,6.48803387 L12.6893828,5.50587936 L12.1786328,4.66666667 L13.1607873,4.68938278 L14,4.17863279 L13.9772839,5.1607873 L14.4880339,6 L13.5058794,5.97728388 Z M11.0410859,3.2658627 L10.0726419,3.10075754 L10.7341373,2.37441924 L10.8992425,1.40597523 L11.6255808,2.06747064 L12.5940248,2.23257579 L11.9325294,2.9589141 L11.7674242,3.9273581 L11.0410859,3.2658627 Z M11.5282478,11.9708698 L10.7073712,12.5105968 L10.6957968,11.5282478 L10.1560699,10.7073712 L11.1384189,10.6957968 L11.9592954,10.1560699 L11.9708698,11.1384189 L12.5105968,11.9592954 L11.5282478,11.9708698 Z M13.2175679,9.32320517 L12.2411306,9.43143525 L12.6767948,8.55090121 L12.5685648,7.57446394 L13.4490988,8.01012816 L14.4255361,7.90189808 L13.9898718,8.78243212 L14.0981019,9.75886939 L13.2175679,9.32320517 Z"
              id="Star-2"
              fill="#FFDC42"
              mask="url(#mask-2)"
            ></path>
            <polygon
              id="Star-8"
              fill="#FFDC42"
              mask="url(#mask-2)"
              points="6.66666667 8.22666673 4.31552566 9.90273464 5.18301844 7.1487332 2.8624406 5.43059869 5.74972164 5.40460011 6.66666667 2.66666667 7.5836117 5.40460011 10.4708927 5.43059869 8.15031489 7.1487332 9.01780768 9.90273464"
            ></polygon>
          </g>
        </g>
      </g>
    </chakra.svg>
  );
};

export const FR: React.FC<ChakraProps & ThemingProps> = (props) => {
  return (
    <chakra.svg
      width="28px"
      height="20px"
      viewBox="0 0 28 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <rect id="path-1" x="0" y="0" width="28" height="20" rx="2"></rect>
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Flags" transform="translate(-76.000000, -268.000000)">
          <g id="FR" transform="translate(76.000000, 268.000000)">
            <mask id="mask-2" fill="white">
              <use xlinkHref="#path-1"></use>
            </mask>
            <rect
              stroke="#F5F5F5"
              strokeWidth="0.5"
              x="0.25"
              y="0.25"
              width="27.5"
              height="19.5"
              rx="2"
            ></rect>
            <rect
              id="Mask"
              fill="#F44653"
              mask="url(#mask-2)"
              x="18.6666667"
              y="0"
              width="9.33333333"
              height="20"
            ></rect>
            <rect
              id="Mask"
              fill="#FFFFFF"
              mask="url(#mask-2)"
              x="9"
              y="0"
              width="9.8"
              height="20"
            ></rect>
            <rect
              id="Rectangle-2"
              fill="#1035BB"
              mask="url(#mask-2)"
              x="0"
              y="0"
              width="9.33333333"
              height="20"
            ></rect>
          </g>
        </g>
      </g>
    </chakra.svg>
  );
};
