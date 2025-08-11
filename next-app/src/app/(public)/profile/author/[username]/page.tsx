import Image from "next/image";
import { getUserInfo } from "@/shared/helpers/getUserInfo";
import NotFoundPage from "../../../../not-found";

interface IProfileAuthorProps {
  params: {
    username: string;
  };
}

export default async function ProfileAuthor({ params }: IProfileAuthorProps) {
  if (!params.username) return <NotFoundPage />;
  const currentUser = await getUserInfo(params.username);
  if (!currentUser) return <NotFoundPage />;

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-32 bg-gradient-to-r from-white via-gray-500 to-gray-600">
        <div className="absolute -bottom-12 left-6">
          <Image
            src={currentUser.avatar}
            alt={currentUser.author}
            width={96}
            height={96}
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>
      </div>

      <div className="pt-16 px-6 pb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {currentUser.author}
            </h1>
            <p className="text-gray-500">
              @{currentUser.author.toLowerCase().replace(/\s+/g, "")}
            </p>
          </div>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            {currentUser.age} years
          </span>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">About</h3>
            <p className="text-gray-600">{currentUser.about}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Birthday</h3>
            <p className="text-gray-600">{currentUser.birthday}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Hobbies</h3>
            <div className="flex flex-wrap gap-2">
              {currentUser.hobbies.map((hobby, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
