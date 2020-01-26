import Sequelize, { Model } from 'sequelize';

class Phone extends Model {
  static init(sequelize) {
    super.init(
      {
        number: Sequelize.INTEGER,
        ddd: Sequelize.INTEGER,
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

export default Phone;
