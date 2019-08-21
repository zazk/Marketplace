'use strict';
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define(
    'Account',
    {
      auth0_id: {
        type: DataTypes.STRING,
        unique: true,
      },
      role_id: {
        type: DataTypes.INTEGER,
      },
      auth0: {
        type: DataTypes.STRING,
        unique: true,
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
