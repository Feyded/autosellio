export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Post = {
  id: string;
  content: string;
  postImage: string | null;
  userId: string | null;
  user: User | null;
  createdAt: Date;
  updatedAt: Date;
  // comments: Comment[] | null;
  // likes: Like[] | null;
};

export type Comment = {
  id: string;
  comment: string;
  userId: string;
  postId: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type Like = {
  id: string;
  postId: string;
  userId: string;
};
