const UserRepository = require('../shared/repositories/user.repository');
const CacheRepository = require('../shared/repositories/cache.repository');

/**
 * Get All user cache
 * @param {ObjectId} cognitoId
 * @param {String} lastUpdatedDate
 * @returns {Promise<Cache>}
 */
const getAll = async (cognitoId, lastUpdatedDate) => {
  const user = await UserRepository.findOneByCognitoId(cognitoId);
  let cache = [user];

  if (user && user.userId) {
    cache = await CacheRepository.findAllByUserIdAfterDate(user.userId, lastUpdatedDate);
  }

  return cache;
};

module.exports = {
  getAll,
};
