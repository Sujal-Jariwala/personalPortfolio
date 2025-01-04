import {z} from 'zod'

export const userSchema = z.object({
    name:z.string().nonempty('This field is required.'). min(1, 'Name must have 1 character.').regex(/^[a-zA-Z\s_]*$/, 'Invalid Name'),
    email:z.string().nonempty('This field is required.').email('Invalid email address'),
    websiteUrl:z.string().url('Invalid url').optional(),
    message:z.string().min(4, 'Message must be greater than 4 characters').optional()
})
