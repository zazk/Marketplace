const Account = require('../models').Account;
const Role = require('../models').Role;

module.exports = {
  list(req, res) {
    return Account.findAll({
      include: [
        {
          model: Role,
          as: 'role',
        },
      ],
      order: [['createdAt', 'DESC']],
    })
      .then(accounts => res.status(200).send(accounts))
      .catch(error => {
        res.status(400).send(error);
      });
  },

  getById(req, res) {
    return Account.findById(req.params.id, {
      include: [
        {
          model: Role,
          as: 'role',
        },
      ],
    })
      .then(account => {
        if (!account) {
          return res.status(404).send({
            message: 'Account Not Found',
          });
        }
        return res.status(200).send(account);
      })
      .catch(error => res.status(400).send(error));
  },

  getByAuth0(req, res) {
    return Account.findOne({
      where: { auth0: req.params.auth0 },
      include: [
        {
          model: Role,
          as: 'role',
        },
      ],
    })
      .then(account => {
        if (!account) {
          return res.status(404).send({
            message: 'Account Not Found',
          });
        }
        return res.status(200).send(account);
      })
      .catch(error => res.status(400).send(error));
  },

  add(req, res) {
    return Account.create({
      role_id: req.body.role_id,
      name: req.body.name,
      auth0_id: req.body.sub,
    })
      .then(account => res.status(201).send(account))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Account.findById(req.params.id, {
      include: [
        {
          model: Role,
          as: 'role',
        },
      ],
    })
      .then(account => {
        if (!account) {
          return res.status(404).send({
            message: 'Account Not Found',
          });
        }
        return account
          .update({
            name: req.body.name,
          })
          .then(() => res.status(200).send(account))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  delete(req, res) {
    return Account.findById(req.params.id)
      .then(account => {
        if (!account) {
          return res.status(400).send({
            message: 'Account Not Found',
          });
        }
        return account
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
