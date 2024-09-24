export type IBooks = {
  _id: number;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
};

export const BlogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development',
    author: 'Jane Doe',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    date: 'May 15, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
    excerpt: 'Exploring the latest trends and technologies shaping the future of web development.',
    tags: ['Web Dev', 'Technology', 'Future']
  },
  {
    id: 2,
    title: 'Mastering React Hooks',
    author: 'John Smith',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    date: 'May 10, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    excerpt: 'A comprehensive guide to understanding and effectively using React Hooks in your projects.',
    tags: ['React', 'JavaScript', 'Hooks']
  },
  {
    id: 3,
    title: 'Designing for Accessibility',
    author: 'Emily Chen',
    authorAvatar: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    date: 'May 5, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    excerpt: 'Learn how to create inclusive web experiences that cater to users of all abilities.',
    tags: ['Accessibility', 'UX', 'Design']
  }
];
