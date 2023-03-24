import { FC } from 'react';
import { IOwnerHistory } from '../utils/types';

interface ITimelineProps {
  data: IOwnerHistory[];
}

const Timeline:FC<ITimelineProps> = ({ data }) => (
  <ol className="relative border-l border-gray-200 dark:border-gray-700 m-5">
    {data.map((entry) => (
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{entry.date}</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{entry.owner}</h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{entry.details}</p>
      </li>
    ))}
  </ol>

);

export default Timeline;
