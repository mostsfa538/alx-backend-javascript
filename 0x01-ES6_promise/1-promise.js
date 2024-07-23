export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, rejecte) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      rejecte(new Error('The fake API is not working currently'));
    }
  });
}
