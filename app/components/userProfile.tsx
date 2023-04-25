import Image from "next/image";
import React from "react";

interface UserProfileCardProps {
  username: string;
  fullName: string;
  profilePictureUrl: string;
  bio: string;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  username,
  fullName,
  profilePictureUrl,
  bio,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex items-center">
          <Image
            className="h-100 w-100 rounded-full mr-4"
            src={profilePictureUrl}
            alt={username}
            height={100}
            width={100}
          />
          <div>
            <div className="text-lg font-semibold text-gray-900">
              {fullName}
            </div>
            <div className="text-gray-600">@{username}</div>
            <div className="text-gray-600">{bio}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { UserProfileCard };
