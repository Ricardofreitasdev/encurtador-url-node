const Link = require("../models/link");
const functions = require("../utils/functions");

module.exports = {
  index(req, res) {
    const dados = {
      title: "Encurtador de url",
      resultado: '',
      url: process.env.URL
    }
    res.render("index", { dados });
  },

  async redirect(req, res) {
    const code = req.params.code;
    const resultado = await Link.findOne({ where: { code } });
    if (!resultado) return res.render("error");
    resultado.click++;
    await resultado.save();
    res.redirect(resultado.url);
  },

  async create(req, res) {
    const url = req.body.url;
    const code = functions.newCode();
    const resultado = await Link.create({
      user_id: 1,
      url,
      code,
    });
    const dados = {
      title: "Url encurtada",
      resultado: resultado.dataValues,
      url: process.env.URL
    }
    res.render("index", { dados });
  },
};
