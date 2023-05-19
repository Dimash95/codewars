const formatDuration = (seconds) => {
  let res = "",
    minutes = 0,
    hours = 0,
    days = 0,
    years = 0;

  if (seconds === 0) {
    res = "now";
  }

  function calcSeconds(seconds) {
    if (seconds === 0) {
      res = res;
    } else if (seconds === 1) {
      res = `${seconds} second`;
    } else if (seconds < 60) {
      res = `${seconds} seconds`;
    } else if (seconds >= 60) {
      minutes = Math.trunc(seconds / 60);
      seconds = seconds % 60;
      calcSeconds(seconds);
      if (seconds !== 0) {
        res = " and " + res;
      }
      calcMinutes(minutes);
    }
  }
  calcSeconds(seconds);

  function calcMinutes(minutes) {
    if (minutes === 0) {
      res = res;
    } else if (minutes === 1) {
      res = `${minutes} minute` + res;
    } else if (minutes < 60) {
      res = `${minutes} minutes` + res;
    } else if (minutes >= 60) {
      hours = Math.trunc(minutes / 60);
      minutes = minutes % 60;
      calcMinutes(minutes);
      if (minutes !== 0 && seconds % 60 === 0) {
        res = " and " + res;
      } else if (minutes !== 0) {
        res = ", " + res;
      }
      calcHours(hours);
    }
  }

  function calcHours(hours) {
    if (hours === 0) {
      res = res;
    } else if (hours === 1) {
      res = `${hours} hour` + res;
    } else if (hours < 24) {
      res = `${hours} hours` + res;
    } else if (hours >= 24) {
      days = Math.trunc(hours / 24);
      hours = hours % 24;
      calcHours(hours);
      if (hours !== 0 && minutes % 60 === 0 && seconds % 60 === 0) {
        res = " and " + res;
      } else if (hours !== 0) {
        res = ", " + res;
      }
      calcDays(days);
    }
  }

  function calcDays(days) {
    if (days === 0) {
      res = res;
    } else if (days === 1) {
      res = `${days} day` + res;
    } else if (days < 365) {
      res = `${days} days` + res;
    } else if (days >= 365) {
      years = Math.trunc(days / 365);
      days = days % 365;
      calcDays(days);
      if (days !== 0 && hours % 24 === 0 && minutes % 60 === 0 && seconds % 60 === 0) {
        res = " and " + res;
      } else if (days !== 0) {
        res = ", " + res;
      }
      calcYears(years);
    }
  }

  function calcYears(years) {
    if (years === 0) {
      res = res;
    } else if (years === 1) {
      res = `${years} year` + res;
    } else {
      res = `${years} years` + res;
    }
  }
  return res;
};
console.log(formatDuration(15731080));
