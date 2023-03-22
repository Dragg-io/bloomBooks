export interface Genre {
  list_name_encoded: string;
  display_name: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: "WEEKLY" | "MONTHLY";
}