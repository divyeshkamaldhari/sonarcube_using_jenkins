import { AuthUserDataProps } from '../../intefaces/pages/authentication/signup/signup.interfaces';

//formate date gives if isDateFirst true then 31/10/2022 else 10/31/2022
export function formatDate(date: Date, isDateFirst = false) {
  const d = new Date(date);
  let month = (d.getMonth() + 1)?.toString();
  let day = '' + d.getDate()?.toString();
  const year = '' + d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  if (isDateFirst) {
    return [day, month, year].join(`/`);
  } else {
    return [month, day, year].join(`/`);
  }
}

//it fives 11:27 AM time or 09:06 PM
export const getUTCTime = (date: Date) => {
  if (date) {
    let hours: string | number = date.getHours();
    let minutes: string | number = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
};

//For default profile image
export const getProfileImage = (user: AuthUserDataProps) => {
  const S3_BASE_URL = import.meta.env.VITE_APP_S3_BASE_URL;

  if (user?.profileImage) {
    return S3_BASE_URL + user.profileImage;
  } else {
    const initials =
      (user?.firstName?.charAt(0) || '') + (user?.lastName?.charAt(0) || '');
    return `https://ui-avatars.com/api/?name=${initials}&background=random`;
  }
};

export const getImage = (imgUrl: string) => {
  const S3_BASE_URL = import.meta.env.VITE_APP_S3_BASE_URL;
  if (imgUrl) {
    return S3_BASE_URL + imgUrl;
  }
};
