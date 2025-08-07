import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ITweetProps {
  id: number;
  text: string;
  author: string;
  avatar: string;
}

export const Tweet = ({ id, text, author, avatar }: ITweetProps) => {
  return (
    <div className="max-w-md transition-shadow duration-200">
      <div className="flex items-start gap-4 p-4 border border-gray-500 w-200 rounded-lg">
        <Image
          src={avatar}
          alt={`Аватар пользователя ${author}`}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex flex-col gap-1 min-w-0">
          <span className="text-sm text-gray-500">#{id}</span>{" "}
          <span className="text-sm font-medium text-white truncate">
            {text}
          </span>
          <Link href={`/profile/${author}`}>
            <p className="text-xs text-gray-500">@{author}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
