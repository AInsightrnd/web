import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export function Modal({
  onClose
}: {
  onClose: Dispatch<SetStateAction<boolean>>
}) {

  return (
    <div className="z-10 fixed inset-0 bg-gray-800 bg-opacity-70 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="p-8 border w-1/2 xs:w-1/3 md:w-2/5 xl:w-1/5 shadow-lg rounded-md bg-white">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">Test Title</h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-lg text-gray-500">Modal Body</p>
            <p className="text-lg text-gray-500">Modal Body</p>
            <p className="text-lg text-gray-500">Modal Body</p>
            <p className="text-lg text-gray-500">Modal Body</p>
          </div>
          <div className="flex justify-center mt-4">

            {/* Navigates back to the base URL - closing the modal */}
            <Link
              href="https://forms.gle/zomMStTYqeXVeRzw8"
              onClick={() => onClose(false)}
              className="m-2 px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              자세히보기
            </Link>
            <Link
              href="/"
              onClick={() => onClose(false)}
              className="m-2 px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              닫기
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}