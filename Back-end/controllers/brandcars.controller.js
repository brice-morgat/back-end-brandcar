const db = require("../models");
const Brandcar = db.brandcars;
const Op = db.Sequelize.Op;

/** Create a new brand car */
exports.create = (req, res) => {
  const brandcar = {
    brandName: req.body.brandName,
    description: req.body.description
  };

  Brandcar.create(brandcar)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
  };

/** Find all Brand Car from database */
exports.findAll = (req, res) => {
  Brandcar.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message
      });
    });
  };

/** Find one brand car by id */
exports.findOne = (req, res) => {
  const id = req.params.id;

  Brandcar.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send();
    });
  };

  /** Update a Brandcar by id */
  exports.update = (req, res) => {
    const id = req.params.id;

    Brandcar.update(req.body, {
    where: { id: id }
    })
};

/** Delete a Brandcar by id */
exports.delete = (req, res) => {
  const id = req.params.id;

  Brandcar.destroy({
    where: { id: id }
  }).then(num => {
    if (num == 1) {
      res.send({
        message: "Brand Cars has been removed"
      });
    } else {
      res.send({
        message: `BrandCar with id=${id} was not found. `
      });
    }
  });
};
