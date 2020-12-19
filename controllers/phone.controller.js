const { Phone } = require('./../models/phone');

module.exports.createPhone = async (req, res, next) => {
  const { body } = req;

  try {
    const createdPhone = await Phone.create(body);
    res.status(201).send(createdPhone.get());
  } catch (err) {
    next(err);
  }
};

module.exports.getPhone = async (req, res, next) => {
  const {
    params: { phoneId },
  } = req;

  try {
    const getPh = await Phone.findByPk(phoneId);

    if (getPh) {
      return res.status(200).send({ data: getPh });
    }
    res.status(404).send('Phone not found');
  } catch (err) {
    next(err);
  }
};
module.exports.getAllPhone = async (req, res, next) => {
  const {
    params: { phoneId },
  } = req;

  try {
    const getPhones = await Phone.findAll();
    return res.status(200).send({ data: getPhones });
  } catch (err) {
    next(err);
  }
};

module.exports.getPhoneWithCPU = async (req, res, next) => {
  const {
    params: { cpu, phoneId },
  } = req;

  try {
    const getPhone = await Phone.findBypk(phoneId, { where: { CPU: cpu } });
    return res.status(200).send({ data: getPhone });
  } catch (err) {
    next(err);
  }
};

module.exports.getAllPhonesWithCPU = async (req, res, next) => {
  const {
    params: { cpu, phoneId },
  } = req;

  try {
    const getPhones = await Phone.findAll({ where: { CPU: cpu } });
    return res.status(200).send({ data: getPhones });
  } catch (err) {
    next(err);
  }
};

module.exports.updatePhone = async (req, res, next) => {
  const {
    body,
    params: { phoneId },
  } = req;

  try {
    const getPh = await Phone.findByPk(phoneId);

    if (getPh) {
      const updatePh = await getPh.update(body);
      return res.status(200).send({ updatePh });
    }
    res.status(404).send('Phone not found');
  } catch (err) {
    next(err);
  }
};

module.exports.removePhone = async (req, res, next) => {
  const {
    params: { phoneId },
  } = req;
  try {
    const removedPhone = await Task.delete(phoneId);
    if (removedPhone) {
      return res.status(200).send(removedPhone);
    }
    return res.status(404).send(`Phone not found`);
  } catch (err) {
    next(err);
  }
};
