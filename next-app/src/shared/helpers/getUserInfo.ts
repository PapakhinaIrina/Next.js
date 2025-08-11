import { UserTweetType } from "../config/userTweetType";
import { TWEETS } from "../data/tweet.data";

export const getUserInfo = async (
  username: string
): Promise<UserTweetType | undefined> => {
  if (!username) return undefined;
  return TWEETS.find((t) => t.id.toString() === username);
};
