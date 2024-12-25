import { Snippet } from "../database/snippets.types";

export interface SnippetSearchPageProps {
  snippets: Array<Snippet>;
}

export interface SnippetUploadPageProps {
  snippets: Array<Snippet>;
  uploadSnippetFunction: any;
}
