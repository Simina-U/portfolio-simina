import Link from "next/link";
import React from "react";

export default function IconButton({ url, children, ...props }) {
  return (
    <Link href={url} passHref>
      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
        {children}
      </div>
    </Link>
  );
}
