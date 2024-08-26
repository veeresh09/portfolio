import { ChevronDownIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import { FC, memo } from 'react';

import { heroData, SectionId } from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';
import {
  ArrowDownTrayIcon,
} from '@heroicons/react/24/outline';


const Hero: FC = memo(() => {
  const { imageSrc, name, description } = heroData;
  const handleDownload = () => {
    // Use the correct path to your resume file
    const resumeUrl = '/resume.pdf';

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.target = '_blank'; // Open in a new tab (optional)
    link.download = 'resume.pdf';

    // Programmatically click the link to trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center">
        <Image
          alt={`${name}-image`}
          className="absolute z-0 h-full w-full object-cover"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        <div className="z-10  max-w-screen-lg px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">{name}</h1>
            {description}
            <div className="flex gap-x-4 text-neutral-100">
              <Socials />
            </div>
            <div className="flex w-full justify-center gap-x-4">
              <button
                className={classNames(
                  'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                  'border-orange-500 ring-orange-500',
                )}
                onClick={handleDownload}
                key="Resume">
                {"Resume"}
                <ArrowDownTrayIcon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
              </button>
              <a
                className={classNames(
                  'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                  'border-white ring-white',
                )}
                href={`#${SectionId.Contact}`}
                key={"Contact"}>
                {"Contact"}
              </a>

              {/* {actions.map(({href, text, primary, Icon}) => (
              ))} */}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}>
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
