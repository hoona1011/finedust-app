import { NavigateFunction } from 'react-router-dom';

interface IconProps {
  to: string;
  navigate: NavigateFunction;
}
export function MyRegionIcon({ to, navigate }: IconProps) {
  return (
    <svg
      className="cursor-pointer"
      width="280"
      height="224"
      viewBox="0 0 280 224"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => navigate(`${to}`)}
    >
      <g filter="url(#filter0_dd_0_1)">
        <rect x="16" y="16" width="224" height="168" rx="24" fill="#9BB4F6" />
      </g>
      <path
        d="M130.985 130.562C137.403 122.516 152.041 103.016 152.041 92.0623C152.041 78.7779 141.281 68 128.02 68C114.759 68 104 78.7779 104 92.0623C104 103.016 118.637 122.516 125.055 130.562C126.594 132.479 129.446 132.479 130.985 130.562ZM128.02 100.083C123.604 100.083 120.014 96.4862 120.014 92.0623C120.014 87.6383 123.604 84.0415 128.02 84.0415C132.437 84.0415 136.027 87.6383 136.027 92.0623C136.027 96.4862 132.437 100.083 128.02 100.083Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_dd_0_1"
          x="0"
          y="0"
          width="280"
          height="224"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-4" dy="-4" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="12" dy="12" />
          <feGaussianBlur stdDeviation="14" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0509804 0 0 0 0 0.152941 0 0 0 0 0.313726 0 0 0 0.16 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_0_1"
            result="effect2_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_0_1"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export function AllRegionsIcon({ to, navigate }: IconProps) {
  return (
    <svg
      className="cursor-pointer"
      width="280"
      height="224"
      viewBox="0 0 280 224"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => navigate(`${to}`)}
    >
      <g filter="url(#filter0_dd_0_1)">
        <rect x="16" y="16" width="224" height="168" rx="24" fill="#9BB4F6" />
      </g>
      <path
        d="M142.847 83.2249C142.847 90.1522 133.558 102.497 129.478 107.585C128.5 108.803 126.683 108.803 125.717 107.585C121.638 102.497 112.349 90.1522 112.349 83.2249C112.349 74.8131 119.173 68 127.598 68C136.023 68 142.847 74.8131 142.847 83.2249ZM143.863 93.4255C144.308 92.5501 144.715 91.6747 145.083 90.8119C145.147 90.6597 145.21 90.4947 145.274 90.3425L160.015 84.4555C162.022 83.6562 164.195 85.128 164.195 87.2848V121.642C164.195 122.886 163.433 124.002 162.277 124.472L143.863 131.818V93.4255ZM108.486 85.5466C108.791 87.3356 109.401 89.1372 110.112 90.8119C110.481 91.6747 110.887 92.5501 111.332 93.4255V125.322L95.1808 131.779C93.173 132.579 91 131.107 91 128.95V94.5927C91 93.3494 91.7625 92.2329 92.9188 91.7635L108.498 85.5466H108.486ZM132.655 110.122C134.422 107.914 137.192 104.324 139.797 100.353V131.982L115.398 125.017V100.353C118.004 104.324 120.774 107.914 122.54 110.122C125.145 113.37 130.05 113.37 132.655 110.122ZM127.598 87.2848C130.406 87.2848 132.681 85.0138 132.681 82.2099C132.681 79.406 130.406 77.1349 127.598 77.1349C124.789 77.1349 122.515 79.406 122.515 82.2099C122.515 85.0138 124.789 87.2848 127.598 87.2848Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_dd_0_1"
          x="0"
          y="0"
          width="280"
          height="224"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-4" dy="-4" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="12" dy="12" />
          <feGaussianBlur stdDeviation="14" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0509804 0 0 0 0 0.152941 0 0 0 0 0.313726 0 0 0 0.16 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_0_1"
            result="effect2_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_0_1"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export function FavoritesIcon({ to, navigate }: IconProps) {
  return (
    <svg
      className="cursor-pointer"
      width="280"
      height="224"
      viewBox="0 0 280 224"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => navigate(`${to}`)}
    >
      <g filter="url(#filter0_dd_0_1)">
        <rect x="16" y="16" width="224" height="168" rx="24" fill="#9BB4F6" />
      </g>
      <path
        d="M97.95 103.281L120.538 124.369C121.475 125.244 122.712 125.731 124 125.731C125.287 125.731 126.525 125.244 127.463 124.369L127.787 124.069C125.4 120.556 124 116.306 124 111.731C124 99.5811 133.85 89.7311 146 89.7311C149.537 89.7311 152.875 90.5686 155.838 92.0436C155.95 91.2311 156 90.4186 156 89.5936V88.8686C156 80.1311 149.688 72.6811 141.075 71.2436C135.375 70.2936 129.575 72.1561 125.5 76.2311L124 77.7311L122.5 76.2311C118.425 72.1561 112.625 70.2936 106.925 71.2436C98.3125 72.6811 92 80.1311 92 88.8686V89.5936C92 94.7811 94.15 99.7436 97.95 103.281ZM164 111.731C164 101.794 155.938 93.7311 146 93.7311C136.062 93.7311 128 101.794 128 111.731C128 121.669 136.062 129.731 146 129.731C155.938 129.731 164 121.669 164 111.731ZM154.412 106.319C155.188 107.094 155.188 108.369 154.412 109.144L145.412 118.144C144.637 118.919 143.363 118.919 142.588 118.144L137.588 113.144C136.812 112.369 136.812 111.094 137.588 110.319C138.363 109.544 139.637 109.544 140.412 110.319L144 113.906L151.588 106.319C152.363 105.544 153.637 105.544 154.412 106.319Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_dd_0_1"
          x="0"
          y="0"
          width="280"
          height="224"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-4" dy="-4" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="12" dy="12" />
          <feGaussianBlur stdDeviation="14" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0509804 0 0 0 0 0.152941 0 0 0 0 0.313726 0 0 0 0.16 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_0_1"
            result="effect2_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_0_1"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export function HeartIcon({ isFavorite }: { isFavorite: boolean }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 76 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.50852 37.748L33.9244 62.4068C35.0208 63.4299 36.4681 64 37.9738 64C39.4795 64 40.9267 63.4299 42.0231 62.4068L68.439 37.748C72.8831 33.6114 75.3975 27.8085 75.3975 21.7425V20.8947C75.3975 10.6775 68.0151 1.96584 57.9428 0.284899C51.2767 -0.825986 44.4937 1.35193 39.728 6.11704L37.9738 7.87107L36.2195 6.11704C31.4539 1.35193 24.6708 -0.825986 18.0047 0.284899C7.93246 1.96584 0.550049 10.6775 0.550049 20.8947V21.7425C0.550049 27.8085 3.06446 33.6114 7.50852 37.748Z"
        fill={isFavorite ? '#D11919' : 'lightgray'}
      />
    </svg>
  );
}
