const catchAsync = require('../shared/utils/catchAsync');
const { cacheService } = require('../services');

const getAll = catchAsync(async (req, res) => {
  const cognitoId = req.user.username;
  const { lastUpdatedDate } = req.body;
  const cache = await cacheService.getAll(cognitoId, lastUpdatedDate);
  res.send(cache);
});

module.exports = {
  getAll,
};
