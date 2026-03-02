
'use client';

import css from './TravellersList.module.css';
import Card from '../Card/Card';
import Button from '../Button/Button';
import { User } from '@/types/user';

interface TravellersListProps {
  users: User[];
}

export default function TravellersList({
  users,
}: TravellersListProps) {
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {users.map((user) => (
          <li key={user._id} className={css.item}>
            <Card user={user} />
          </li>
        ))}
      </ul>

      <Button
        size="large"
        variant="primary"
        href="/travellers"
        className={css.trlBtn}
      >
        Переглянути всі
      </Button>
    </div>
  );
}