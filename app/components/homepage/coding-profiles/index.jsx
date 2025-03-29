import React from 'react';
import { codingProfiles } from '@/utils/data/codingProfiles';
import Image from 'next/image';

const CodingProfiles = () => {
  return (
    <div className="flex items-center justify-center space-x-4 my-8">
      {codingProfiles.map((profile, index) => (
        <a
          key={index}
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-4 py-2 rounded-full border border-transparent bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-80 transition-opacity duration-300"
        >
          <Image
            src={profile.icon}
            alt={profile.name}
            width={24}
            height={24}
            className="mr-2"
          />
          {profile.name}
        </a>
      ))}
    </div>
  );
};

export default CodingProfiles;