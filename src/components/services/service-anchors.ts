// Anchor ids are derived from the title so the home page cards and the
// services page targets stay in sync without a second list to maintain.
export function serviceSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
