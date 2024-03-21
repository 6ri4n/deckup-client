import { useState, useEffect } from "react";

function ToastNotif({
  bgColor = "",
  borderColor = "",
  svgNameSpace = "",
  status = "",
  message = "",
}) {
  // bgColor = "color-number" ex: blue-300 or rgb
  // borderColor = "color-number" ex blue-300 or rgb
  const bgColorData = bgColor ? bgColor : "green-100";
  const borderColorData = borderColor ? borderColor : "green-600";
  const [closed, setClosed] = useState(false);
  const [show, setShow] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShow(false);
  //   }, 10000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (!show) return null;

  return (
    <div className="flex min-h-screen justify-end">
      {!closed && (
        <div
          className={`flex justify-center m-2 py-3 bg-${bgColorData} w-80 text-xs border rounded h-min border border-${borderColorData}`}
        >
          <div className={`inline text-${borderColorData}`}>
            <svg
              xmlns={svgNameSpace ? svgNameSpace : "http://www.w3.org/2000/svg"}
              viewBox="0 0 24 24"
              className="w-10 h-4"
            >
              <path
                fill="currentColor"
                stroke="currentColor"
                strokeWidth={1}
                fillRule="evenodd"
                d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex flex-col space-y-1 inline">
            <span className={`text-${borderColorData} font-medium`}>
              {status ? status : "Success"}
            </span>
            <span className="block">
              {message
                ? message
                : "This is a success toast and will be dismissed after 10 seconds"}
            </span>
          </div>
          <button onClick={() => setClosed(true)} className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-4"
            >
              <path
                stroke="currentColor"
                strokeWidth={1}
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default ToastNotif;
