const CacheRepository = require('../shared/repositories/cache.repository');

/**
 * Get All user cache
 * @param {Usser} user
 * @param {String} lastUpdatedDate
 * @returns {Promise<Cache>}
 */
const getAll = async (user, lastUpdatedDate) => {
  const cache = await CacheRepository.findAllByUserIdAfterDate(user.userId, lastUpdatedDate);

  return cache;
};

module.exports = {
  getAll,
};
