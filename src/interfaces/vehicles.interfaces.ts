import { Vehicle } from "../entities/vehicle.entity";

type VehicleRequestOmittedFields =
  | "id"
  | "owner"
  | "photos"
  | "comments"
  | "sellType"
  | "createdAt"
  | "updatedAt"
  | VehicleRequestOptionalFields;

type VehicleRequestOptionalFields = "sellType" | "isPublished";

export type IVehicleRequest = Partial<
  Pick<Vehicle, VehicleRequestOptionalFields>
> &
  Omit<Vehicle, VehicleRequestOmittedFields>;
