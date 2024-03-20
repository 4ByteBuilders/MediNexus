import * as z from "zod";

const doctorSchema = z.object({
    registrationId: z.string().min(6).max(50).superRefine((val, ctx) => {
        if (val.length < 6 || val.length > 50) {
            ctx.addIssue({
                code: 'custom',
                message: 'Registration ID must be between 6 and 50 characters long.',
            });
        }
    }),
    name: z.string().min(2).max(50).superRefine((val, ctx) => {
        if (val.length < 2 || val.length > 50) {
            ctx.addIssue({
                code: 'custom',
                message: 'Name must be between 2 and 50 characters long.',
            });
        }
    }),
    experience: z.string().min(1).max(50).superRefine((val, ctx) => {
        if (val.length < 1 || val.length > 50) {
            ctx.addIssue({
                code: 'custom',
                message: 'Experience must be between 1 and 50 characters long.',
            });
        }
    }),
    degree: z.string().min(2).max(50).superRefine((val, ctx) => {
        if (val.length < 2 || val.length > 50) {
            ctx.addIssue({
                code: 'custom',
                message: 'Degree must be between 2 and 50 characters long.',
            });
        }
    }),
    password: z.string().min(6).max(50).superRefine((val, ctx) => {
        if (val.length < 6 || val.length > 50) {
            ctx.addIssue({
                code: 'custom',
                message: 'Password must be between 6 and 50 characters long.',
            });
        }
    }),
    speciality: z.string().min(2).max(50).superRefine((val, ctx) => {
        if (val.length < 2 || val.length > 50) {
            ctx.addIssue({
                code: 'custom',
                message: 'Speciality must be between 2 and 50 characters long.',
            });
        }
    }),
});

export { doctorSchema }