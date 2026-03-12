import { Story } from '@/types/story';
import TravellersStoriesItem from '../TravelersStoriesItem/TravelersStoriesItem';
import css from './TravellersStories.module.css';

interface TravellersStoriesProps {
  stories: Story[];
}

export default function TravellersStories({ stories }: TravellersStoriesProps) {
  return (
    <ul className={css.list}>
      {stories.map((story) => (
        <TravellersStoriesItem story={story} key={story._id} />
      ))}
    </ul>
  );
}