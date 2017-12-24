/*
  return
    preference for restaurant categories
    importance of service from 1 to 10
    importance of taste from 1 to 10
    importance of environment from 1 to 10
    preferred price in RMB
    preferred distance within
*/
function getUserPreference(user) {
  return {
    category: ['日本菜','北京菜'],
    service: 8,
    taste: 10,
    env:  5,
    price: 150,
    distance: 2
  }
}

module.exports = getUserPreference;
