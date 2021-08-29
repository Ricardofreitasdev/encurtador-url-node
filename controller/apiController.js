const Link = require("../models/link");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const functions = require("../utils/functions");

module.exports = {
  async auth(req, res) {
    const code = req.body.code;
    const user = await User.findOne({ where: { code } });

    if (!user) return res.status(404).json({ message: "Não localizado" });
    const token = functions.newToken(user.id)
    
    user.token = token;
    await user.save()

    return res.json({ auth: true, token: token });
  },

  async users(req, res) {
    const { name } = req.body;

    if (!name) return res.status(400).json({ message: "Campo name é obrigatório" });

    const exist = await User.findOne({ where: { name } })
    if (exist) return res.status(400).json({ message: "Já existe usuario com esse nome" });

    const code = functions.newCode();
    const resultado = await User.create({
      name,
      code,
    });

    const newUser = {
      name: resultado.name,
      code: resultado.code,
    };

    res.status(201).json(newUser);
  },

  async create(req, res) {
    const { url } = req.body;
    if (!url)
      return res.status(400).json({ message: "Campo url é obrigatório" });
    const code = functions.newCode();
    const resultado = await Link.create({
      user_id: req.userId,
      url,
      code,
    });


    const data = {
      url: `${process.env.URL}/${resultado.code}`,
      id: resultado.id,
      code: resultado.code,
      created: resultado.createdAt
    };
    res.status(201).json(data);
  },

  async getAll(req, res) {
    const filter_order = req.query.order ? req.query.order : "ASC";
    const filter = {
      order: [["id", filter_order]],
    };

    const link = await Link.findAll(filter);
    const availableFilters = ["order"];
    const appliedFilters = [filter];
    const data = {
      availableFilters: availableFilters,
      appliedFilters: appliedFilters,
      links: link,
    };
    res.status(200).json(data);
  },

  verifyJWT(req, res, next) {
<<<<<<< HEAD
 
=======
>>>>>>> 63dc82a60fc26f540f89750602a5cecad564031c
    const token = req.headers["access_token"];
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err)
        return res.status(401).json({ error: "Token inválido" });
      req.userId = decoded.userId;
      next();
    });
  },
};
