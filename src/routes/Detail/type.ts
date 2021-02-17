import { Maybe } from "../../generated/graphql";

export type TSearchEngine = "google" | "naver" | "youtube";

export type TBookmarkItem = Array<{
  __typename?: "item";
  id: any;
  url: string;
  name: string;
  base_url?: Maybe<string>;
}>;

export interface IBookmarkInput {
  name: string;
  url: string;
}
