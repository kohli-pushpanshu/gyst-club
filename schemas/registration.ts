import { z } from "zod";

export const registrationSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(15, "Name must be less than 15 characters"),

  email: z
    .string()
    .email("Invalid email address"),

  mobile: z
    .string()
    .min(10, "Mobile number must be at least 10 digits")
    .max(13, "Mobile number must be less than 13 digits"),

  gender: z
    .enum(["male", "female", "other"], {
      message: "Please select a valid gender",
    }),

age: z.string()
    .min(0, "Age must be a positive number"),
    
course: z.string().min(1, "Course selection is required"),
});
