import { IClient } from "../types/IClient";
import { connect } from "../libs/mongodb";
import { Client } from "../models/clientModel";

const list = async () => {
  await connect();
  const result = await Client.find();
  return result;
};

const getById = async (id?: string) => {
  if (!id) {
    throw new Error("Informe o campo id!");
  }

  const client = await Client.findById(id);

  if (!client) {
    throw new Error("Nenhuma tarefa encontrada para o id informado!");
  }

  return client;
};

const create = async (client: IClient) => {
  if (!client.name) {
    throw new Error("Informe o campo nome!");
  }
  if (!client.email) {
    throw new Error("Informe o campo email!");
  }
  if (!client.phone) {
    throw new Error("Informe o campo telefone!");
  }
  if (!client.street) {
    throw new Error("Informe o campo endereço!");
  }
  if (!client.city) {
    throw new Error("Informe o campo endereço!");
  }
  if (!client.state) {
    throw new Error("Informe o campo endereço!");
  }
  if (!client.car) {
    throw new Error("Informe o modelo do carro!");
  }
  if (!client.licenseplate) {
    throw new Error("Informe a placa do carro!");
  }

  await connect();
  await Client.create(client);

  return true;
};

const update = async (client: IClient) => {
  if (!client.name) {
    throw new Error("Informe o campo nome!");
  }
  if (!client.email) {
    throw new Error("Informe o campo email!");
  }
  if (!client.phone) {
    throw new Error("Informe o campo telefone!");
  }
  if (!client.street) {
    throw new Error("Informe o campo endereço!");
  }
  if (!client.city) {
    throw new Error("Informe o campo endereço!");
  }
  if (!client.state) {
    throw new Error("Informe o campo endereço!");
  }
  if (!client.car) {
    throw new Error("Informe o modelo do carro!");
  }
  if (!client.licenseplate) {
    throw new Error("Informe a placa do carro!");
  }

  await connect();
  const clientFound = await Client.findByIdAndUpdate(client.id, client);

  return clientFound;
};

const remove = async (id?: string) => {
  if (!id) {
    throw new Error("Informe o campo id!");
  }
  await connect();
  const client = await Client.findByIdAndRemove(id);
  if (!client) {
    throw new Error("Nenhum cliente encontrado para o id informado!");
  }

  return true;
};

export { list, getById, create, update, remove };
