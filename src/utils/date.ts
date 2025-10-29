/**
 * Format a date string for display
 * Shows "Today", "Yesterday", or formatted date
 * @param dateString - Date in YYYY-MM-DD format
 * @returns Formatted date string
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString + "T00:00:00");
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const dateOnly = today.toISOString().split("T")[0];
  const yesterdayOnly = yesterday.toISOString().split("T")[0];

  if (dateString === dateOnly) {
    return "Today";
  } else if (dateString === yesterdayOnly) {
    return "Yesterday";
  }

  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
}

/**
 * Get date range for the last N days
 * @param days - Number of days to look back
 * @returns Object with fromDate and toDate in YYYY-MM-DD format
 */
export function getDateRange(days: number): { fromDate: string; toDate: string } {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - days);

  const fromDate = startDate.toISOString().split("T")[0];
  const toDate = tomorrow.toISOString().split("T")[0];

  return { fromDate, toDate };
}
