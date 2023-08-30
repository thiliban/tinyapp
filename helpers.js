// need to see if the emails exist in the database
const getUserFromEmail = function(database, email) {
  for (let user in database) {
    if (database[user].email === email) {
      return database[user];
    }
  } return false;
};

// need to check the URLs in the database
const urlsForUser = function(id, urlDB) {
  const userUrls = {};
  for (const short in urlDB) {
    if (urlDB[short].userID === id) {
      userUrls[short] = urlDB[short];
    } 
  } 
  return userUrls;
};

module.exports = { getUserFromEmail, urlsForUser };