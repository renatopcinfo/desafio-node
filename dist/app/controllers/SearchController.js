"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class SearchController {
  async index(req, res) {
    const searches = await _User2.default.findOne({
      where: { id: req.params.id },
      attributes: ['id', 'name', 'email', 'createdAt', 'updatedAt'],
    });

    return res.json(searches);
  }
}

exports. default = new SearchController();
