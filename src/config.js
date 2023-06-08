const { NODB_APP_NAME, NODB_ENV } = process.env;
// export const nodbUrl = `https://api.nodb.sh/${NODB_APP_NAME}/${NODB_ENV}`;
export const nodbUrl = `http://localhost:3001/${NODB_APP_NAME}/${NODB_ENV}`;
export const writeToken = process.env.NODB_ACCESS_TOKEN;
export const host = 'http://localhost:3002';