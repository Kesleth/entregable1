const User = require("../models/user.model");

// Método GET global
exports.findAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        status: "available",
      },
    });

    res.status(200).json({
      status: "success",
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: fails,
      message: "something went very wromg!💣",
    });
  }
};

// POST
exports.createUsers = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      role,
    });

    res.status(201).json({
      status: "success",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "fail",
      message: "something went very wrong 🥲",
    });
  }
};

// Método GET específico
exports.findUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({
      where: {
        id,
        status: "avaliable",
      },
    });

    if (!user) {
      return res.status(404).json({
        status: "error ",
        message: "user with id: ${id} not found",
      });
    }

    res.status(201).json({
      status: "success",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "fail",
      message: "something went very wrong 🥲",
    });
  }
};

//PATCH
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await User.findOne({
      where: {
        id,
        status: "available",
      },
    });

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: `The user with id: ${id} not found!`,
      });
    }

    await user.update({ name, email });

    res.status(200).json({
      status: "success",
      message: "User information has been updated  successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "fail",
      message: "something went very wrong 🥲",
    });
  }

  //DELETE
  exports.deleteUser = async (req, res) => {
    try {
      const { id } = req.params;

      const user = await User.findOne({
        where: {
          id,
          status: "available",
        },
      });

      if (!user) {
        return res.status(404).json({
          status: "error",
          message: `User with id: ${id} not found`,
        });
      }

      await user.update({ status: "disabled" });

      res.status(200).json({
        status: "success",
        message: "User deleted successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "fail",
        message: "Something went very wrong 🥲",
      });
    }
  };
};
