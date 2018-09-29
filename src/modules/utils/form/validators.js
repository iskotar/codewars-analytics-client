export const required = value => (value ? undefined : 'Required');

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const minLength5 = minLength(5);

export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const maxLength10 = maxLength(10);

export const number = value =>
  value && Number.isNaN(Number(value)) ? 'Must be a number' : undefined;

export const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;

export const minValue18 = minValue(18);

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Only alphanumeric characters' : undefined;

export const phoneNumber = value =>
  value && !/^\+[0-9]{11,12}$/.test(value)
    ? 'Invalid phone number, must start from + and after 11-12 digits. International format.'
    : undefined;

export const realName = value =>
  value && !/^[A-Z][a-z]{1,15}\s[A-Z][a-z]{1,15}$/.test(value)
    ? 'It does not look like a real name. Example: John Smith'
    : undefined;

export const codewarsUserLink = value =>
  value && !/^https:\/\/www.codewars.com\/users\/[\w\d%-_.][^/ ]*$/i.test(value)
    ? 'Invalid codewars ures profile link'
    : undefined;
