import { PublicEmployee } from "@snokam/employees-client";
import { employeesServerClient } from "../../clients/server/employees";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// Server client example
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PublicEmployee[]>,
) {
  const employees = await employeesServerClient.getEmployeesPublic();
  res.status(200).json(employees);
}
