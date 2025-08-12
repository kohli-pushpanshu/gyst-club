import {z} from "zod";

export const feedback = z.object({
    name: z.string().min(1, "Name is required").max(15, "Name must be less than 15 characters"),
    email: z.string(),
    mobile: z.string().min(10, "Mobile number must be at least 10 digits").max(13, "Mobile number must be less than 13 digits"),
    message: z.string().min(10, "message must be at least 10 character").max(500, "Message must be less than 500 characters"),
})