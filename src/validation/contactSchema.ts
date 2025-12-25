import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(3, "Nama minimal 3 karakter"),

  email: z
    .string()
    .email("Email tidak valid"),

  message: z
    .string()
    .min(1, "Pesan tidak boleh kosong"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
