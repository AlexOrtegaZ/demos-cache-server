const catchAsync = require('../shared/utils/catchAsync');
const { cacheService } = require('../services');

const getAll = catchAsync(async (req, res) => {
  const cognitoId = req.user.username;
  const cache = await cacheService.getAll(cognitoId);
  res.send(cache);
});

module.exports = {
  getAll,
};
