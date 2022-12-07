import { Request, Response } from "express";
import * as service from "../services/service";
import { error } from "../libs/bindError";
import mongoose from "mongoose";

const list = async (req: Request<any>, res: Response<any>) => {
  try {
    const services = await service.list();
    return res.json(services);
  } catch (err: any) {
    return error(res, err);
  }
};

const servicesCount = async (req: Request<any>, res: Response<any>) => {
  try {
    const getCount = await service.servicesCount();

    return res.json(getCount);
  } catch (err: any) {
    return error(res, err);
  }
};

const getById = async (req: Request<any>, res: Response<any>) => {
  try {
    const id = req.params.id;
    if (!id) return res.status(400).json({ message: "Informe o campo id!" });

    const serviceFound = await service.getById(id);
    res.json(serviceFound);
  } catch (err: any) {
    return error(res, err);
  }
};

const create = async (req: Request<any>, res: Response<any>) => {
  try {
    const title = req.body.title;
    const start = req.body.start;
    const startHour = req.body.starthour;
    const end = req.body.end;
    const endHour = req.body.endhour;
    const services = req.body.services;
    const price = req.body.price;
    const finished = req.body.finished;
    const paid = req.body.paid;

    const serviceCreated = await service.create({
      title,
      start,
      startHour,
      end,
      endHour,
      services,
      price,
      finished,
      paid,
    });
    return res.json(serviceCreated);
  } catch (err: any) {
    return error(res, err);
  }
};

const update = async (req: Request<any>, res: Response<any>) => {
  try {
    const id = req.params.id;
    const title = req.body.title;
    const start = req.body.start;
    const startHour = req.body.starthour;
    const end = req.body.end;
    const endHour = req.body.endhour;
    const services = req.body.services;
    const price = req.body.price;
    const finished = req.body.finished;
    const paid = req.body.paid;

    const serviceUpdated = await service.update({
      id,
      title,
      start,
      startHour,
      end,
      endHour,
      services,
      price,
      finished,
      paid,
    });
    return res.json(serviceUpdated);
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
    await service.remove(id);
    res.json({ success: true });
  } catch (err: any) {
    return error(res, err);
  }
};

export { list, servicesCount, getById, create, update, remove };
