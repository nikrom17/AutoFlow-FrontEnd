const timeDelta = (datePastSting: Date) => {
  const dateNow = new Date();
  const datePast = new Date(datePastSting);

  // @ts-ignore
  let diffInMilliSeconds = Math.abs(dateNow - datePast) / 1000;

  // calculate days
  const days = Math.floor(diffInMilliSeconds / 86400);
  diffInMilliSeconds -= days * 86400;

  // calculate hours
  const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
  diffInMilliSeconds -= hours * 3600;

  // calculate minutes
  const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
  diffInMilliSeconds -= minutes * 60;

  let difference = '';
  if (days > 0) {
    difference = days === 1 ? `${days} day ago` : `${days} days ago`;
  } else if (hours > 0) {
    difference = hours === 1 ? `${hours} hour ago` : `${hours} hours ago`;
  } else {
    difference = minutes === 1 ? `${minutes} minute ago` : `${minutes} minutes ago`;
  }

  return difference;
};

export default timeDelta;
