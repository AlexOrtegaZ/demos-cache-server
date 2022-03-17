/*
  DEMOS
  Copyright (C) 2022 Julian Alejandro Ortega Zepeda, Erik Ivanov Domínguez Rivera, Luis Ángel Meza Acosta
  This file is part of DEMOS.

  DEMOS is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  DEMOS is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

const express = require('express');
const auth = require('../../shared/middlewares/auth');
const validate = require('../../shared/middlewares/validate');
const cacheController = require('../../controllers/cache.controller');
const validations = require('../../validations/cache.validations');

const router = express.Router();

router.post('/', auth(), validate(validations.getCache), cacheController.getAll);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Cache
 *   description: Cache
 */

/**
 * @swagger
 * /cache:
 *   post:
 *     summary: Get all the user cache
 *     tags: [Cache]
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Space'
 *       "401":
 *         description: Invalid body information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 401
 *               message: Invalid body information
 */
