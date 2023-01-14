import user from './1.SocialMediaProfile/user.json';
import { Profile } from './1.SocialMediaProfile/Profile';
import data from './2.Statistics/data.json';
import { Statistics } from './2.Statistics/Statistics';

export const App = () => {
  return (
    <>
      < Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </>

  );
};
