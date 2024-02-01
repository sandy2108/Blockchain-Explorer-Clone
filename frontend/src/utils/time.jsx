export const timeAgo = (secondsAgo) => {
  if (!secondsAgo) return null;
  const seconds = Math.ceil((Date.now() - secondsAgo * 1000) / 1000);
  return seconds > 60 ? Math.floor(seconds / 60) + "min" : seconds + " secs";
};

export function timeDifference(timestamp) {
  const currentDate = new Date();
  const previousDate = new Date(timestamp * 1000); // Convert seconds to milliseconds

  const timeDifference = currentDate - previousDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} ${days === 1 ? "day" : "days"} ${hours % 24} ${hours % 24 === 1 ? "hour" : "hrs"
      } ago`;
  } else if (hours >= 1) {
    return `${hours} ${hours === 1 ? "hour" : "hrs"} ${minutes % 60} ${minutes % 60 === 1 ? "minute" : "minutes"
      } ago`;
  } else if (minutes >= 1) {
    return `${minutes} ${minutes === 1 ? "mins" : "mins"} ago`;
  } else {
    return `${seconds} ${seconds === 1 ? "second" : "secs"} ago`;
  }
}

export function formatTimeAgo(timestamp) {
  const now = new Date();
  const yourTimestamp = new Date(timestamp);

  const duration = now - yourTimestamp;

  const days = Math.floor(duration / (1000 * 60 * 60 * 24));
  const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  return `${days} days ${hours} hrs ago`;
}