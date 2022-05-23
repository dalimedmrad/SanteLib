const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check("email", "Vérifiez à nouveau votre adresse e-mail").isEmail(),
  // check("phone", "Votre numéro de mobile est invalide").isLength({
  //   min: 8,
  //   max: 8,
  // }),
  // check(
  //   "password",
  //   "Mode de passe doit être entre 8 et 20 caractères"
  // ).isLength({
  //   min: 8,
  //   max: 20,
  // }).is,
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
  check("email", "Vérifier à nouveau votre adresse email").isEmail(),
  check("image", "Carte visite tamponnée est obligatoire").notEmpty(),
  check("image1", "Permis d'exercice est obligatoire").notEmpty(),
  check("image2", "Photo de profile est obligatoire").notEmpty(),
  check("phone", "Vérifier votre numéro de télèphone").isLength({
    min: 8,
    max: 8,
  }),
  check("phone1", "Vérifier votre numéro de télèphone").isLength({
    min: 8,
    max: 8,
  }),
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
