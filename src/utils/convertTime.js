export function convertTime(timestamp) {
  // Create a Date object from the timestamp
  const date = new Date(timestamp);

  // Get the day name based on the user's local time zone
  const dayName = date.toLocaleString("en-US", {
    weekday: "long",
  });

  // Get the formatted date and time in the user's local time zone
  const formattedDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // 12-hour format
  });

  // Return the combined string with day name and formatted date
  return `${dayName}, ${formattedDate}`;
}
