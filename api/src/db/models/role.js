'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    'Role',
    {
      role_name: DataTypes.STRING,
    },
    {}
  );
  Role.associate = function(models) {
    Role.hasMany(models.Account, {
      foreignKey: 'role_id',
      as: 'accounts',
    });
  };
  return Role;
};
