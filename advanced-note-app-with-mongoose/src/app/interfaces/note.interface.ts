export interface INote {
  title: string;
  content: string;
  category: "personal" | "study" | "work" | "other";
  pinned: boolean;
  tags?: {
    label: string;
    color: string;
  };
}
