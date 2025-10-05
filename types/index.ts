import {z} from "zod";

export const EventStatus = z.enum(["UPCOMING", "ONGOING", "COMPLETED", "CANCELLED"]);

export const eventSchema = z.object({
    title: z.string(),
    date: z.string(),
    location: z.string(),
    guests: z.number(),
    status: EventStatus,
    type: z.string(),
    image: z.string().array(),
    description: z.string(),
});

export const UserSchema = z.object({
    email: z.string(),
    link: z.string(),
});

export type Event = z.infer<typeof eventSchema>;
export type User = z.infer<typeof UserSchema>;