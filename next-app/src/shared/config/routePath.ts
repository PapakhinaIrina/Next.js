export const RoutePath = {
  home: "/",
  profile: {
    base: "/profile",
    author: (author: string) => `${RoutePath.profile.base}/author/${author}`,
  },
  contact: "/contact",
};
