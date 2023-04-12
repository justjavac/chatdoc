export interface IconProps {
  className?: string;
}

const DEFAULT_CLASSNAME = "w-4 h-4";

export function User({ className = DEFAULT_CLASSNAME }: IconProps) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );
}

export function Tailwindcss({ className = DEFAULT_CLASSNAME }: IconProps) {
  return (
    <svg
      viewBox="0 0 49 31"
      className={className}
      stroke="currentColor"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
        fill="#38bdf8"
      ></path>
    </svg>
  );
}

export function Fresh({ className = DEFAULT_CLASSNAME }: IconProps) {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.092 8.845C38.929 20.652 34.092 27 30 30.5c1 3.5-2.986 4.222-4.5 2.5-4.457 1.537-13.512 1.487-20-5C2 24.5 4.73 16.714 14 11.5c8-4.5 16-7 20.092-2.655Z"
        fill="#FFDB1E"
      />
      <path
        d="M14 11.5c6.848-4.497 15.025-6.38 18.368-3.47C37.5 12.5 21.5 22.612 15.5 25c-6.5 2.587-3 8.5-6.5 8.5-3 0-2.5-4-5.183-7.75C2.232 23.535 6.16 16.648 14 11.5Z"
        fill="#fff"
        stroke="#FFDB1E"
      />
      <path
        d="M28.535 8.772c4.645 1.25-.365 5.695-4.303 8.536-3.732 2.692-6.606 4.21-7.923 4.83-.366.173-1.617-2.252-1.617-1 0 .417-.7 2.238-.934 2.326-1.365.512-4.223 1.29-5.835 1.29-3.491 0-1.923-4.754 3.014-9.122.892-.789 1.478-.645 2.283-.645-.537-.773-.534-.917.403-1.546C17.79 10.64 23 8.77 25.212 8.42c.366.014.82.35.82.629.41-.14 2.095-.388 2.503-.278Z"
        fill="#FFE600"
      />
      <path
        d="M14.297 16.49c.985-.747 1.644-1.01 2.099-2.526.566.121.841-.08 1.29-.701.324.466 1.657.608 2.453.701-.715.451-1.057.852-1.452 2.106-1.464-.611-3.167-.302-4.39.42Z"
        fill="#fff"
      />
    </svg>
  );
}

export function Deno({ className = DEFAULT_CLASSNAME }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_29_599)">
        <path
          d="M15 0C23.2843 0 30 6.71572 30 15C30 23.2843 23.2843 30 15 30C6.71572 30 0 23.2843 0 15C0 6.71572 6.71572 0 15 0Z"
          fill="currentColor"
        />
        <path
          d="M14.6635 22.3394C14.2788 22.2357 13.8831 22.4584 13.7705 22.8381L13.7655 22.8558L12.7694 26.5472L12.7649 26.565C12.6711 26.9498 12.9011 27.3414 13.2858 27.4451C13.6704 27.549 14.0661 27.3263 14.1787 26.9465L14.1837 26.9289L15.1797 23.2375L15.1843 23.2196C15.1911 23.1919 15.1962 23.164 15.1997 23.1362L15.2026 23.1084L15.179 22.9888L15.1445 22.8166L15.1227 22.7091C15.076 22.619 15.0111 22.5396 14.932 22.4759C14.853 22.4123 14.7615 22.3658 14.6635 22.3394ZM7.7224 18.5379C7.70424 18.5741 7.68883 18.6123 7.67658 18.6522L7.66967 18.6763L6.67358 22.3677L6.669 22.3856C6.57525 22.7704 6.80524 23.1619 7.1899 23.2657C7.57451 23.3695 7.97026 23.1469 8.08287 22.7671L8.08779 22.7494L8.99096 19.4023C8.51793 19.1518 8.09336 18.8628 7.7224 18.5379ZM5.34707 14.2929C4.9624 14.1891 4.56666 14.4117 4.4541 14.7915L4.44912 14.8092L3.45303 18.5006L3.44846 18.5184C3.35471 18.9032 3.58469 19.2947 3.96936 19.3985C4.35397 19.5023 4.74971 19.2797 4.86232 18.8999L4.86725 18.8822L5.86334 15.1908L5.86791 15.173C5.96166 14.7882 5.73174 14.3967 5.34707 14.2929ZM27.682 13.4546C27.2973 13.3508 26.9015 13.5734 26.789 13.9532L26.784 13.9709L25.7879 17.6623L25.7833 17.6801C25.6896 18.0649 25.9196 18.4564 26.3042 18.5602C26.6889 18.664 27.0846 18.4414 27.1972 18.0616L27.2021 18.0439L28.1982 14.3525L28.2028 14.3347C28.2965 13.9499 28.0666 13.5584 27.682 13.4546ZM3.17781 8.52527C2.34361 10.0444 1.81243 11.7112 1.61377 13.4329C1.7088 13.5412 1.83381 13.619 1.97301 13.6563C2.35768 13.7602 2.75342 13.5375 2.86598 13.1577L2.87096 13.1401L3.86705 9.44865L3.87162 9.43084C3.96537 9.04599 3.73539 8.65447 3.35072 8.5507C3.2943 8.53547 3.23623 8.52694 3.17781 8.52527ZM25.159 8.5507C24.7744 8.44687 24.3786 8.66953 24.266 9.04933L24.2611 9.06697L23.265 12.7584L23.2604 12.7762C23.1667 13.161 23.3966 13.5526 23.7813 13.6563C24.1659 13.7602 24.5617 13.5375 24.6743 13.1577L24.6792 13.1401L25.6753 9.44865L25.6799 9.43084C25.7736 9.04599 25.5436 8.65447 25.159 8.5507Z"
          fill="white"
        />
        <path
          d="M7.51285 5.04065C7.12824 4.93682 6.73249 5.15948 6.61988 5.53929L6.61495 5.55692L5.61886 9.24833L5.61429 9.26614C5.52054 9.65098 5.75052 10.0425 6.13519 10.1463C6.5198 10.2501 6.91554 10.0274 7.02816 9.64764L7.03308 9.63001L8.02917 5.9386L8.03374 5.92079C8.12749 5.53595 7.89751 5.14442 7.51285 5.04065ZM20.3116 5.73845C19.9269 5.63462 19.5312 5.85727 19.4186 6.23708L19.4136 6.25471L18.7443 8.73499C19.1779 8.94915 19.5917 9.20126 19.9809 9.48839L20.0453 9.53643L20.8279 6.63639L20.8324 6.61858C20.9262 6.23374 20.6963 5.84221 20.3116 5.73845ZM13.7968 1.57642C13.3296 1.61771 12.8647 1.68338 12.4043 1.77317L12.3066 1.79263L11.3782 5.23419L11.3736 5.252C11.2799 5.63684 11.5099 6.02837 11.8945 6.13214C12.2792 6.23596 12.6749 6.01331 12.7875 5.6335L12.7924 5.61587L13.7885 1.92446L13.7931 1.90665C13.8196 1.79831 13.8209 1.68533 13.7968 1.57642ZM22.9626 4.1263L22.7669 4.85169L22.7623 4.86944C22.6686 5.25429 22.8986 5.64581 23.2832 5.74958C23.6678 5.85341 24.0636 5.63075 24.1762 5.25095L24.1811 5.23331L24.2025 5.15462C23.8362 4.81205 23.4511 4.49009 23.0491 4.19022L22.9626 4.1263ZM17.1672 1.69677L16.8139 3.00593L16.8094 3.02374C16.7156 3.40858 16.9456 3.80011 17.3303 3.90388C17.7149 4.0077 18.1106 3.78505 18.2233 3.40524L18.2282 3.38761L18.6 2.00966C18.1624 1.88867 17.719 1.79001 17.2714 1.71405L17.1672 1.69677Z"
          fill="white"
        />
        <path
          d="M9.69085 24.6253C9.80341 24.2455 10.1992 24.0229 10.5838 24.1266C10.9685 24.2303 11.1984 24.6219 11.1047 25.0068L11.1001 25.0246L10.3872 27.6664L10.2876 27.6297C9.85836 27.4694 9.43765 27.2873 9.0271 27.0839L9.68587 24.6429L9.69085 24.6253Z"
          fill="white"
        />
        <path
          d="M14.4141 8.49082C10.0522 8.49082 6.65918 11.2368 6.65918 14.6517C6.65918 17.8769 9.78123 19.9362 14.6211 19.8331C15.0327 19.8243 15.1517 20.1008 15.2856 20.4734C15.4196 20.846 15.7796 22.8097 16.0665 24.3117C16.3233 25.656 16.5842 27.0052 16.7834 28.3596C19.9439 27.9418 22.8663 26.3807 25.0076 24.0261L22.7237 15.5088C22.1544 13.4518 21.489 11.5564 19.7283 10.1794C18.3118 9.07166 16.5122 8.49082 14.4141 8.49082Z"
          fill="white"
        />
        <path
          d="M15.3516 10.957C15.8694 10.957 16.2891 11.3767 16.2891 11.8945C16.2891 12.4123 15.8694 12.832 15.3516 12.832C14.8338 12.832 14.4141 12.4123 14.4141 11.8945C14.4141 11.3767 14.8338 10.957 15.3516 10.957Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_29_599">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function OpenAI({ className = DEFAULT_CLASSNAME }: IconProps) {
  return (
    <svg
      width="41"
      height="41"
      viewBox="0 0 41 41"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
    >
      <path
        d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export function Link({ className = DEFAULT_CLASSNAME }: IconProps) {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
}

export function Delete({ className = DEFAULT_CLASSNAME }: IconProps) {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
      <line x1="10" y1="11" x2="10" y2="17"></line>
      <line x1="14" y1="11" x2="14" y2="17"></line>
    </svg>
  );
}

export function Submit({ className = DEFAULT_CLASSNAME }: IconProps) {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className={className}
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="22" y1="2" x2="11" y2="13"></line>
      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
  );
}

export function Light({ className = DEFAULT_CLASSNAME }: IconProps) {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  );
}

export function Dark({ className = DEFAULT_CLASSNAME }: IconProps) {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  );
}

export function GitHub({ className = DEFAULT_CLASSNAME }: IconProps) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1989_191)">
        <path
          d="M7.00001 0C3.13391 0 0 3.21295 0 7.17755C0 10.3482 2.0055 13.0388 4.7873 13.9875C5.1373 14.0534 5.26471 13.832 5.26471 13.6414C5.26471 13.4716 5.25912 13.0195 5.25561 12.4212C3.3082 12.8547 2.8973 11.4589 2.8973 11.4589C2.5795 10.6291 2.1203 10.4084 2.1203 10.4084C1.48471 9.96418 2.16861 9.97279 2.16861 9.97279C2.87071 10.0229 3.24032 10.7122 3.24032 10.7122C3.86472 11.8085 4.87903 11.4918 5.27732 11.3084C5.34171 10.8448 5.52232 10.5288 5.72251 10.3497C4.16851 10.1684 2.534 9.55218 2.534 6.80211C2.534 6.01893 2.807 5.37764 3.2543 4.87605C3.1822 4.69476 2.94211 3.96463 3.32289 2.97722C3.32289 2.97722 3.91089 2.78376 5.24789 3.71238C5.77305 3.55992 6.37629 3.47184 6.99948 3.4709C7.59448 3.47377 8.19351 3.5533 8.7528 3.71238C10.0891 2.78376 10.6757 2.97649 10.6757 2.97649C11.0579 3.9646 10.8171 4.69475 10.7457 4.87603C11.1937 5.3776 11.4653 6.0189 11.4653 6.80208C11.4653 9.55931 9.82799 10.1662 8.26908 10.3439C8.52037 10.5653 8.74368 11.0031 8.74368 11.6731C8.74368 12.6318 8.73529 13.4064 8.73529 13.6414C8.73529 13.8335 8.86129 14.057 9.21689 13.9868C12.0205 13.0032 14 10.3285 14 7.18046C14 7.17943 14 7.17841 14 7.17738C14 3.21278 10.8654 0 7.00001 0Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1989_191">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Heart({ className = DEFAULT_CLASSNAME }: IconProps) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  );
}

export function Menu({ className = DEFAULT_CLASSNAME }: IconProps) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      width="21"
      height="14"
      viewBox="0 0 21 14"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line
        x1="0.25"
        y1="1.4"
        x2="20.25"
        y2="1.4"
        stroke="currentColor"
        stroke-width="1.2"
      />
      <line
        x1="0.25"
        y1="7.4"
        x2="20.25"
        y2="7.4"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <line
        x1="0.25"
        y1="13.4"
        x2="10.25"
        y2="13.4"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function Gear({ className = DEFAULT_CLASSNAME }: IconProps) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_970_1128)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.42897 1.94807C7.80892 1.91503 8.19102 1.91503 8.57097 1.94807C8.60697 1.95107 8.67897 1.98407 8.70797 2.09407L8.99697 3.19907C9.14397 3.75907 9.54697 4.16607 9.99397 4.38807C10.168 4.47407 10.335 4.57107 10.495 4.67807C10.912 4.95607 11.465 5.10107 12.025 4.94807L13.127 4.64507C13.237 4.61507 13.302 4.66107 13.322 4.69107C13.541 5.00107 13.732 5.33207 13.895 5.68007C13.909 5.71107 13.917 5.79007 13.836 5.87007L13.021 6.67606C12.61 7.08207 12.459 7.63307 12.491 8.13207C12.5033 8.32587 12.5033 8.52026 12.491 8.71407C12.459 9.21307 12.61 9.76406 13.021 10.1701L13.836 10.9761C13.916 11.0561 13.909 11.1351 13.895 11.1661C13.7335 11.5123 13.5417 11.8436 13.322 12.1561C13.302 12.1851 13.236 12.2301 13.127 12.2011L12.024 11.8981C11.465 11.7451 10.912 11.8901 10.495 12.1681C10.335 12.2751 10.168 12.3721 9.99497 12.4581C9.54597 12.6801 9.14397 13.0861 8.99697 13.6471L8.70797 14.7521C8.67897 14.8621 8.60697 14.8951 8.57097 14.8981C8.19101 14.931 7.80892 14.931 7.42897 14.8981C7.39297 14.8951 7.32097 14.8611 7.29197 14.7521L7.00297 13.6471C6.85597 13.0871 6.45297 12.6801 6.00597 12.4581C5.83292 12.3722 5.66557 12.2754 5.50497 12.1681C5.08797 11.8901 4.53497 11.7451 3.97497 11.8981L2.87297 12.2011C2.76297 12.2311 2.69797 12.1851 2.67797 12.1551C2.45826 11.8429 2.26652 11.5119 2.10497 11.1661C2.09097 11.1351 2.08297 11.0561 2.16397 10.9761L2.97897 10.1701C3.38997 9.76406 3.54097 9.21307 3.50897 8.71407C3.49665 8.52026 3.49665 8.32587 3.50897 8.13207C3.54097 7.63307 3.38997 7.08207 2.97897 6.67606L2.16397 5.87007C2.08397 5.79007 2.09097 5.71107 2.10497 5.68007C2.26622 5.33372 2.45798 5.00242 2.67797 4.69007C2.69797 4.66107 2.76397 4.61507 2.87297 4.64507L3.97597 4.94807C4.53497 5.10107 5.08797 4.95607 5.50497 4.67807C5.66497 4.57107 5.83197 4.47407 6.00497 4.38807C6.45397 4.16607 6.85597 3.76007 7.00297 3.19907L7.29197 2.09407C7.32097 1.98407 7.39297 1.95107 7.42897 1.94807ZM7.99997 0.423065C7.76397 0.423065 7.52997 0.433065 7.29897 0.453065C6.55597 0.518065 6.00897 1.06807 5.84097 1.71407L5.55097 2.82007C5.53397 2.88607 5.47297 2.97807 5.33997 3.04407C5.10924 3.15825 4.88611 3.28719 4.67197 3.43007C4.54897 3.51207 4.43897 3.52007 4.37197 3.50107L3.26997 3.19907C2.62597 3.02207 1.87797 3.21907 1.44997 3.82907C1.17994 4.21322 0.944358 4.62047 0.745968 5.04607C0.430968 5.72107 0.634968 6.46807 1.10897 6.93707L1.92397 7.74307C1.97397 7.79107 2.02197 7.89007 2.01197 8.03707C1.99563 8.29414 1.99563 8.55199 2.01197 8.80906C2.02197 8.95607 1.97397 9.05507 1.92397 9.10307L1.10897 9.90907C0.634968 10.3781 0.430968 11.1251 0.745968 11.8001C0.945968 12.2281 1.18197 12.6351 1.44997 13.0181C1.87797 13.6271 2.62597 13.8241 3.26997 13.6481L4.37297 13.3451C4.43897 13.3261 4.54897 13.3341 4.67197 13.4161C4.88497 13.5591 5.10797 13.6881 5.33997 13.8021C5.47297 13.8681 5.53397 13.9601 5.55197 14.0261L5.84097 15.1321C6.00997 15.7781 6.55597 16.3281 7.29897 16.3921C7.76542 16.4326 8.23451 16.4326 8.70097 16.3921C9.44397 16.3281 9.99097 15.7781 10.159 15.1321L10.449 14.0261C10.466 13.9601 10.527 13.8681 10.66 13.8021C10.8907 13.6879 11.1138 13.559 11.328 13.4161C11.451 13.3341 11.561 13.3261 11.628 13.3451L12.73 13.6471C13.374 13.8241 14.122 13.6271 14.55 13.0171C14.818 12.6351 15.055 12.2281 15.254 11.8001C15.569 11.1251 15.365 10.3781 14.89 9.90907L14.076 9.10307C14.026 9.05507 13.978 8.95607 13.988 8.80906C14.0043 8.55199 14.0043 8.29414 13.988 8.03707C13.978 7.89007 14.027 7.79107 14.076 7.74307L14.89 6.93707C15.365 6.46807 15.569 5.72107 15.254 5.04607C15.0556 4.62016 14.82 4.21258 14.55 3.82807C14.122 3.21907 13.374 3.02207 12.73 3.19807L11.627 3.50107C11.561 3.52007 11.451 3.51207 11.328 3.43007C11.1138 3.28718 10.8907 3.15825 10.66 3.04407C10.527 2.97807 10.466 2.88607 10.448 2.82007L10.16 1.71307C9.98997 1.06807 9.44397 0.518065 8.70097 0.454065C8.46786 0.433603 8.23397 0.42326 7.99997 0.423065V0.423065ZM9.49997 8.42307C9.49997 8.82089 9.34193 9.20242 9.06063 9.48373C8.77932 9.76503 8.39779 9.92307 7.99997 9.92307C7.60214 9.92307 7.22061 9.76503 6.93931 9.48373C6.658 9.20242 6.49997 8.82089 6.49997 8.42307C6.49997 8.02524 6.658 7.64371 6.93931 7.3624C7.22061 7.0811 7.60214 6.92307 7.99997 6.92307C8.39779 6.92307 8.77932 7.0811 9.06063 7.3624C9.34193 7.64371 9.49997 8.02524 9.49997 8.42307ZM11 8.42307C11 9.21871 10.6839 9.98178 10.1213 10.5444C9.55868 11.107 8.79562 11.4231 7.99997 11.4231C7.20432 11.4231 6.44126 11.107 5.87865 10.5444C5.31604 9.98178 4.99997 9.21871 4.99997 8.42307C4.99997 7.62742 5.31604 6.86435 5.87865 6.30174C6.44126 5.73914 7.20432 5.42307 7.99997 5.42307C8.79562 5.42307 9.55868 5.73914 10.1213 6.30174C10.6839 6.86435 11 7.62742 11 8.42307Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_970_1128">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0 0.423065)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}