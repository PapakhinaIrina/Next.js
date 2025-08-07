import { TWEETS } from "@/shared/data/tweet.data";
import { Tweet } from "./tweet";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col gap-4">
      {TWEETS.map((tweet) => (
        <Tweet
          key={tweet.id}
          id={tweet.id}
          text={tweet.text}
          author={tweet.author}
          avatar={tweet.avatar}
        />
      ))}
    </div>
  );
};

export default Home;
