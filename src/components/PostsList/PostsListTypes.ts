export interface IPost {
  id: number | string;
  title: string;
  body: string;
}

export interface IPostsListProps {
  postsData: [...any];
}

