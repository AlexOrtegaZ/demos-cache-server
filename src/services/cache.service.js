/**
 * Get All user cache
 * @param {ObjectId} cognitoId
 * @returns {Promise<Cache>}
 */
const getAll = async (cognitoId) => {
  return [cognitoId];
};

module.exports = {
  getAll,
};
