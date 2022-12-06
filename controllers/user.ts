import { Request, Response } from "express";
import * as user from "../services/user";
import { error } from "../libs/bindError";

const list = async (req: Request<any>, res: Response<any>) => {
  try {
    const users = await user.list();
    return res.json(users);
  } catch (err: any) {
    return error(res, err);
  }
};

const usersCount = async (req: Request<any>, res: Response<any>) => {
  try {
    const getCount = await user.usersCount();

    return res.json(getCount);
  } catch (err: any) {
    return error(res, err);
  }
};

const login = async (req: Request<any>, res: Response<any>) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const userLogged = await user.login({ email, password });
    return res.json(userLogged);
  } catch (err: any) {
    return error(res, err);
  }
};

const register = async (req: Request<any>, res: Response<any>) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const userRegister = await user.register({
      name,
      email,
      password,
    });
    return res.json(userRegister);
  } catch (err: any) {
    return error(res, err);
  }
};

const remove = async (req: Request<any>, res: Response<any>) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "Informe o campo id!" });
    }
    await user.remove(id);
    res.json({ success: true });
  } catch (err: any) {
    return error(res, err);
  }
};

export { list, login, register, usersCount, remove };
