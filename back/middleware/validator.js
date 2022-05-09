const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  // check("name", "name is requried").notEmpty(),
  // check("lastName", "lastName is requried").notEmpty(),
  // check("email", "email is requried").notEmpty(),
  check("email", "Check email again").isEmail(),
  check("phone", "Votre numéro de mobile est invalide").isLength({
    min: 8,
    max: 8,
  }),
  check(
    "password",
    "Mode de passe doit être entre 8 et 20 caractères"
  ).isLength({
    min: 8,
    max: 20,
  }).is,
];
exports.updateRulesDoc = () => [
  check("phone", "Votre numéro de mobile est invalide").isLength({
    min: 8,
    max: 8,
  }),
  check("phone1", "Votre numéro de mobile est invalide").isLength({
    min: 8,
    max: 8,
  }),
  check("ville", "Veuilez indiquer votre ville SVP !").notEmpty(),
  check(
    "duree",
    "vauilez indiquer la durée moyenne du consultation SVP !"
  ).notEmpty(),
  check("image2", "Le photo de profile est obligatoire").notEmpty(),
];
exports.updateRules = () => [
  check("phone", "Votre numéro de mobile est invalide").isLength({
    min: 8,
    max: 8,
  }),
  check("name", "Votre nom du famille  est invalide").isLength({ min: 3 }),
  check("lastName", "Votre prénom  est invalide").isLength({ min: 3 }),
  check("ville", "Ville  est obligatoire").notEmpty(),
];
exports.updatepassword = () => [
  // check("name", "name is requried").notEmpty(),
  // check("lastName", "lastName is requried").notEmpty(),
  // check("email", "email is requried").notEmpty(),
  check(
    "newPassword",
    "Mode de passe doit être entre 8 et 20 caractères"
  ).isLength({ min: 8, max: 20 }),
];
exports.registerparticienRules = () => [
  check("name", "name is requried").notEmpty().isLength({ min: 2 }),
  check("lastName", "lastName is requried").notEmpty().isLength({ min: 2 }),
  check("email", "email is requried").notEmpty(),
  check("email", "check email again").isEmail(),
  check("password", "password is requried").isLength({
    min: 6,
    max: 20,
  }),
  check("phone", "phone is requried").notEmpty().isLength({
    min: 8,
    max: 8,
  }),
  check("specialite", "specialite est obligatoire").notEmpty(),
  check("sexe", "sexe is required").notEmpty(),
];
exports.loginRules = () => [
  // check("email", "email is requried").notEmpty(),
  check("email", "Vérifier à nouveau votre adresse email").isEmail(),
  check(
    "password",
    "password must be between 6 character and 20 character"
  ).isLength({
    min: 6,
    max: 20,
  }),
];
exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .send({ errors: errors.array().map((el) => ({ msg: el.msg })) });
  }
  next();
};
