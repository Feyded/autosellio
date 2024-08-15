import { Progress } from "@/components/ui/progress";

export default function CustomLoading() {
  return (
    <div className="flex gap-2 justify-center items-center h-screen bg-gradient-to-t from-emerald-200 to-indigo-700 ">
      <div className="flex items-center flex-col gap-4 w-full p-4">
        <svg
          width="100"
          height="100"
          viewBox="0 0 54 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.6552 5.31034C31.6552 6.9637 30.7941 8.42224 29.4828 9.28809V14.4655H39.7241C44.8661 14.4655 49.0345 18.6339 49.0345 23.7759V26.2586H49.5C51.6425 26.2586 53.3793 27.9954 53.3793 30.1379C53.3793 32.2804 51.6425 34.0172 49.5 34.0172H49.0345V36.1897C49.0345 41.3316 44.8661 45.5 39.7241 45.5H13.9655C8.82356 45.5 4.65517 41.3316 4.65517 36.1897V34.0172H3.87931C1.73683 34.0172 0 32.2804 0 30.1379C0 27.9954 1.73683 26.2586 3.87931 26.2586H4.65517V23.7759C4.65517 18.6339 8.82356 14.4655 13.9655 14.4655H24.2069V9.47715C22.7227 8.64542 21.7241 7.09085 21.7241 5.31034C21.7241 2.65366 23.9473 0.5 26.6897 0.5C29.432 0.5 31.6552 2.65366 31.6552 5.31034ZM20.7931 30.4483C20.7931 32.7622 18.8479 34.6379 16.4483 34.6379C14.0487 34.6379 12.1034 32.7622 12.1034 30.4483C12.1034 28.1344 14.0487 26.2586 16.4483 26.2586C18.8479 26.2586 20.7931 28.1344 20.7931 30.4483ZM41.2759 30.4483C41.2759 32.7622 39.3306 34.6379 36.931 34.6379C34.5314 34.6379 32.5862 32.7622 32.5862 30.4483C32.5862 28.1344 34.5314 26.2586 36.931 26.2586C39.3306 26.2586 41.2759 28.1344 41.2759 30.4483Z"
            fill="url(#paint0_linear_65_1707)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_65_1707"
              x1="26.6897"
              y1="0.5"
              x2="26.6897"
              y2="45.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset="1" stopColor="#fff" />
            </linearGradient>
          </defs>
        </svg>

        <h1 className="font-semibold text-3xl text-white">AutoSell.io</h1>
        <Progress className="bg-white max-w-md" value={33} />
      </div>
    </div>
  );
}
