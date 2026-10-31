import SearchPageClient from "../components/search/search-page-client";
export const instant = false;

type SearchedForumsParams = {
  searchParams: Promise<{ q?: string }>;
};

export default async function ListSearchedForums({
  searchParams,
}: SearchedForumsParams) {
  const { q } = await searchParams;

  const search = q ?? "";

  return <SearchPageClient search={search} />;
}
