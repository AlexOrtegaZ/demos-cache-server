const catchAsync = require('../shared/utils/catchAsync');
const { cacheService } = require('../services');

const getAll = catchAsync(async (req, res) => {
  const { user } = req;
  const { lastUpdatedDate } = req.body;
  const cache = await cacheService.getAll(user, lastUpdatedDate);
  res.send(cache);
});

module.exports = {
  getAll,
};
