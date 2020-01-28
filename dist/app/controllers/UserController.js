"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Informe todos os campos' });
    }

    const userExists = await _User2.default.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'E-mail já existente' });
    }

    const { id, name, createdAt, updatedAt, last_login } = await _User2.default.create(
      req.body
    );

    return res.json({
      id,
      name,
      createdAt,
      updatedAt,
      last_login,
    });
  }
}

exports. default = new UserController();
