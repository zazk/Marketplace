const Role = require('../models').Role;
const Account = require('../models').Account;

module.exports = {
  list(req, res) {
    return Role.findAll({
      include: [
        {
          model: Account,
          as: 'accounts',
        },
      ],
      order: [['createdAt', 'DESC'], [{ model: Account, as: 'accounts' }, 'createdAt', 'DESC']],
    })
      .then(roles => res.status(200).send(roles))
      .catch(error => {
        res.status(400).send(error);
      });
  },

  getById(req, res) {
    return Role.findById(req.params.id, {
      include: [
        {
          model: Account,
          as: 'accounts',
        },
      ],
    })
      .then(role => {
        if (!role) {
          return res.status(404).send({
            message: 'Role Not Found',
          });
        }
        return res.status(200).send(role);
      })
      .catch(error => res.status(400).send(error));
  },

  add(req, res) {
    return Role.create({
      role_name: req.body.role_name,
    })
      .then(role => res.status(201).send(role))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Role.findById(req.params.id, {
      include: [
        {
          model: Account,
          as: 'accounts',
        },
      ],
    })
      .then(role => {
        if (!role) {
          return res.status(404).send({
            message: 'Role Not Found',
          });
        }
        return role
          .update({
            role_name: req.body.role_name || role.role_name,
          })
          .then(() => res.status(200).send(role))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  delete(req, res) {
    return Role.findById(req.params.id)
      .then(role => {
        if (!role) {
          return res.status(400).send({
            message: 'Role Not Found',
          });
        }
        return role
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
