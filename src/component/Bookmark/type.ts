import { Maybe } from "../../generated/graphql";

export type TBookmarkItem = Array<{
  __typename?: "item";
  id: any;
  url: string;
  name: string;
  is_private?: Maybe<boolean>;
}>;
