const UserRepository = require('../shared/repositories/user.repository');
const CacheRepository = require('../shared/repositories/cache.repository');

/**
 * Get All user cache
 * @param {ObjectId} cognitoId
 * @returns {Promise<Cache>}
 */
const getAll = async (cognitoId) => {
  const user = await UserRepository.findOneByCognitoId(cognitoId);
  let cache = [user];

  if (user && user.userId) {
    cache = await CacheRepository.findAllByUserId(user.userId);
  }

  return cache;
};

module.exports = {
  getAll,
};
