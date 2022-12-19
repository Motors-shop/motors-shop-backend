import { DataSource } from "typeorm";
import request from "supertest";
import AppDataSource from "../../../data-source";
import app from "../../../app";

describe("teste das rotas de projetos", () => {
  let connection: DataSource;
  let expectedKeys = new Set([
    "id",
    "sellType",
    "title",
    "description",
    "year",
    "km",
    "price",
    "type",
    "isPublished",
    "capeImage",
    "createdAt",
    "updatedAt",
    "isActive",
  ]);
  let token: string = "";
  let vehicleId: string = "";
  let invalidId: string = "1d27feef-8549-47c7-b576-d6fbcd427a18";

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("GET - /vehicles/:id - Must be able to fetch a vehicle", async () => {
    const response = await request(app).get(`/vehicles/${vehicleId}`);

    expect(response.status).toEqual(200);
    expect(new Set(Object.keys(response.body))).toEqual(expectedKeys);
  });

  test("GET - /vehicles/:id - Must not be able to fetch a vehicle with invalid id", async () => {
    const response = await request(app).get(`/vehicles/${invalidId}`);

    expect(response.status).toEqual(404);
    expect(response.body).toHaveProperty("message");
  });
});
