export default function formatDate(dateStr) {
  const date = new Date(dateStr);

  const options = {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Kolkata",
  };

  const readableDate = date.toLocaleString(undefined, options).split(" ");
  return readableDate;
}
