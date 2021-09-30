const Joi = require('joi');

const getCache = {
  body: Joi.object().keys({
    lastUpdatedDate: Joi.string().allow(null, ''),
  }),
};


module.exports = {
  getCache,
};
