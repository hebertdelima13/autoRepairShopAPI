import { IUser } from "../types/IUser";
import { connect } from "../libs/mongodb";
import { User } from "../models/userModel";
import { sign } from "jsonwebtoken";

const list = async () => {
  await connect();
  const result = await User.find().select("name");
  return result;
};

const usersCount = async () => {
  await connect();
  const result = await User.countDocuments();
  return result;
};

const login = async (user: IUser) => {
  if (!user.email) {
    throw new Error("Informe o campo email!");
  }

  if (!user.password) {
    throw new Error("Informe o campo senha!");
  }

  await connect();
  const userLogged = await User.findOne({
    email: user.email,
    password: user.password,
  });

  if (!userLogged) {
    throw new Error("E-mail ou senha não confere!");
  }

  const token = sign(
    {
      _id: userLogged._id,
      name: userLogged.name,
      email: userLogged.email,
    },
    process.env.JWT_SECRET ?? "emptyjwt",
    {}
  );

  return { token };
};

const register = async (user: IUser) => {
  if (!user.name) {
    throw new Error("Informe o campo nome!");
  }

  if (!user.email) {
    throw new Error("Informe o campo email!");
  }

  if (!user.password) {
    throw new Error("Informe o campo password!");
  }

  await connect();
  await User.create(user);

  return "Usuário criado com sucesso!";
};

const remove = async (id?: string) => {
  if (!id) {
    throw new Error("Informe o campo id!");
  }
  await connect();
  const user = await User.findByIdAndRemove(id);
  if (!user) {
    throw new Error("Nenhum usuário encontrado para o id informado!");
  }

  return true;
};
export { list, login, register, usersCount, remove };
