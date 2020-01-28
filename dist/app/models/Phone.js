"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Phone extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        number: _sequelize2.default.INTEGER,
        ddd: _sequelize2.default.INTEGER,
      },
      {
        sequelize,
      }
    );

    Phone.associate = models => {
      Phone.belongsTo(models.User, { foreignKey: 'user_id' });
    };

    return this;
  }
}

exports. default = Phone;
