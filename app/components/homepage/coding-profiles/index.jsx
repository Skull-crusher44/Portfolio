import React from 'react';
import { codingProfiles } from '@/utils/data/codingProfiles';
import Image from 'next/image';

const CodingProfiles = () => {
  return (
    <div className="flex justify-center my-8 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl">
        {codingProfiles.map((profile, index) => (
          <a
            key={index}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-2 sm:px-3 md:px-4 py-2 rounded-full border border-transparent bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-80 transition-opacity duration-300 text-xs sm:text-sm md:text-base"
          >
            <Image
              src={`/${profile.icon}`}
              alt={profile.name}
              width={16}
              height={16}
              className="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            />
            <span className="truncate">{profile.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CodingProfiles;