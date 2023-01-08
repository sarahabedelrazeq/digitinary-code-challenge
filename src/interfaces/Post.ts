interface Post {
  id: number;
  title?: FormDataEntryValue | string | null;
  body?: FormDataEntryValue | string | null;
  userId?: number;
}

export type { Post };
