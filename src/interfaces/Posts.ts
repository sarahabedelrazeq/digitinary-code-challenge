interface Posts {
  id?: number;
  title?: FormDataEntryValue | string | null;
  body?: FormDataEntryValue | string | null;
  userId?: number;
}

export type { Posts };
