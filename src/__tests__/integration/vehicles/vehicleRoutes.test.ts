import { DataSource } from "typeorm";
import request from "supertest";
import AppDataSource from "../../../data-source";
import app from "../../../app";

describe("teste das rotas de projetos", () => {
  let connection: DataSource;
  let newVehicle = {};
  let expectedKeys = Object.keys(newVehicle);
  let token: string = "";
  let otherToken: string = "";
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

    // setar usuários quando existir as rotas para poder salvar tokens
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("GET - /vehicles/:id - Must be able to fetch a vehicle", async () => {
    const response = await request(app).get(`/vehicles/${vehicleId}`);

    expect(response.status).toEqual(200);
    expect(Object.keys(response.body)).toEqual(expectedKeys);
  });

  test("GET - /vehicles/:id - Must not be able to fetch a vehicle with invalid id", async () => {
    const response = await request(app).get(`/vehicles/${invalidId}`);

    expect(response.status).toEqual(404);
    expect(response.body).toHaveProperty("message");
  });

  test("DELETE - /vehicles/:id - Must not be able to delete a vehicle without authorization token", async () => {
    const response = await request(app)
      .delete(`/vehicles/${vehicleId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toEqual(401);
    expect(response.body).toHaveProperty("message");
  });

  test("DELETE - /vehicles/:id - Must not be able to delete a vehicle that the user does not own", async () => {
    const response = await request(app)
      .delete(`/vehicles/${vehicleId}`)
      .set("Authorization", `Bearer ${otherToken}`);

    expect(response.status).toEqual(403);
    expect(response.body).toHaveProperty("message");
  });

  test("DELETE - /vehicles/:id - Should not be able to delete a vehicle with invalid id", async () => {
    const response = await request(app)
      .delete(`/vehicles/${invalidId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toEqual(404);
    expect(response.body).toHaveProperty("message");
  });

  test("DELETE - /vehicles/:id - Must be able to delete a vehicle", async () => {
    const response = await request(app)
      .delete(`/vehicles/${vehicleId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toEqual(204);
  });
});
