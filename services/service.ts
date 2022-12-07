import { IService } from "../types/IService";
import { connect } from "../libs/mongodb";
import { Service } from "../models/serviceModel";

const list = async () => {
  await connect();
  const result = await Service.find();
  return result;
};

const servicesCount = async () => {
  await connect();
  const result = await Service.countDocuments();
  return result;
};

const servicesFinishedCount = async () => {
  await connect();
  const result = await Service.countDocuments({ finished: true });
  return result;
};

const servicesUnfinishedCount = async () => {
  await connect();
  const result = await Service.countDocuments({ finished: false });
  return result;
};

const getById = async (id?: string) => {
  if (!id) {
    throw new Error("Informe o campo id!");
  }

  const service = await Service.findById(id);

  if (!service) {
    throw new Error("Nenhuma tarefa encontrada para o id informado!");
  }

  return service;
};

const create = async (service: IService) => {
  if (!service.title) {
    throw new Error("Informe o campo nome!");
  }
  if (!service.start) {
    throw new Error("Informe o campo dia do inicio do serviço!");
  }
  if (!service.startHour) {
    throw new Error("Informe o campo hora inicial!");
  }
  if (!service.end) {
    throw new Error("Informe o campo dia do término do serviço!");
  }
  if (!service.endHour) {
    throw new Error("Informe o campo hora final!");
  }
  if (!service.services) {
    throw new Error("Informe o campo serviço!");
  }
  if (!service.price) {
    throw new Error("Informe o campo preço!");
  }

  await connect();
  await Service.create(service);

  return true;
};

const update = async (service: IService) => {
  if (!service.title) {
    throw new Error("Informe o campo nome!");
  }
  if (!service.start) {
    throw new Error("Informe o campo dia do inicio do serviço!");
  }
  if (!service.startHour) {
    throw new Error("Informe o campo hora inicial!");
  }
  if (!service.end) {
    throw new Error("Informe o campo dia do término do serviço!");
  }
  if (!service.endHour) {
    throw new Error("Informe o campo hora final!");
  }
  if (!service.services) {
    throw new Error("Informe o campo serviço!");
  }
  if (!service.price) {
    throw new Error("Informe o campo preço!");
  }

  await connect();
  const serviceFound = await Service.findByIdAndUpdate(service.id, service);

  return serviceFound;
};

const remove = async (id?: string) => {
  if (!id) {
    throw new Error("Informe o campo id!");
  }
  await connect();
  const service = await Service.findByIdAndRemove(id);
  if (!service) {
    throw new Error("Nenhum serviço encontrado para o id informado!");
  }

  return true;
};

export {
  list,
  servicesCount,
  servicesFinishedCount,
  servicesUnfinishedCount,
  getById,
  create,
  update,
  remove,
};
