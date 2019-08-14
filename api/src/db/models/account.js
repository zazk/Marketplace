'use strict';
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define(
    'Account',
    {
      role_id: {
        type: DataTypes.INTEGER,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      extra: {
        type: DataTypes.JSON,
      },
      last_login: {
        type: DataTypes.DATE,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
    },
    {}
  );

  Account.associate = function(models) {
    Account.belongsTo(models.Role, {
      foreignKey: 'id',
      as: 'role',
    });
  };
  return Account;
};
