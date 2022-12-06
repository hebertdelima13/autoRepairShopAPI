import { Request, Response } from "express";
import * as client from "../services/client";
import { error } from "../libs/bindError";
import mongoose from "mongoose";

const list = async (req: Request<any>, res: Response<any>) => {
  try {
    const clients = await client.list();
    return res.json(clients);
  } catch (err: any) {
    return error(res, err);
  }
};

const getById = async (req: Request<any>, res: Response<any>) => {
  try {
    const id = req.params.id;
    if (!id) return res.status(400).json({ message: "Informe o campo id!" });

    const clientFound = await client.getById(id);
    res.json(clientFound);
  } catch (err: any) {
    return error(res, err);
  }
};

const create = async (req: Request<any>, res: Response<any>) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const street = req.body.street;
    const streetnumber = req.body.streetnumber;
    const state = req.body.state;
    const city = req.body.city;
    const car = req.body.car;
    const licenseplate = req.body.licenseplate;

    const clientCreated = await client.create({
      name,
      email,
      phone,
      street,
      streetnumber,
      city,
      state,
      car,
      licenseplate,
    });
    return res.json(clientCreated);
  } catch (err: any) {
    return error(res, err);
  }
};

const update = async (req: Request<any>, res: Response<any>) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.json("Id do cliente inválido!");
    }
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const street = req.body.street;
    const streetnumber = req.body.streetnumber;
    const state = req.body.state;
    const city = req.body.city;
    const car = req.body.car;
    const licenseplate = req.body.licenseplate;

    const clientUpdated = await client.update({
      name,
      email,
      phone,
      street,
      streetnumber,
      city,
      state,
      car,
      licenseplate,
    });
    return res.json(clientUpdated);
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
    await client.remove(id);
    res.json({ success: true });
  } catch (err: any) {
    return error(res, err);
  }
};

export { list, getById, create, update, remove };
