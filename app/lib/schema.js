import { z } from "zod";

export const accountSchema = z.object({
  name: z.string().min(1, "Name is Required"),
  type: z.enum(["CURRENT", "SAVINGS"]),
  balance: z.string().min(1, "Initial Balance is Required"),
  isDefault: z.boolean().default(false),
});
