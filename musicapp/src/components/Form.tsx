'use client'

import {z} from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

const formSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message must be at least 1 character long").max(500, "Message must be at most 500 characters long"),
});

type FormData = z.infer<typeof formSchema>;

export const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        });
    
    const onSubmit = (data: FormData) => {
        const existingData = JSON.parse(localStorage.getItem("contactData") || "[]");
        localStorage.setItem("contactData", JSON.stringify([...existingData, data]));
        alert("Message sent!");
        reset();
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)} className='max-w-md mx-auto 
        bg-black space-y-4 p-4 border border-gray-300 rounded-lg shadow-lg'>
            <div>
                <label htmlFor="name" className='block font-medium text-gray-100'>NAME</label>
                <input {...register("name")} id='name' className={`w-full p-2 border rounded ${errors.name ? "border-red-500" : "border-gray-300"}`} />
                {errors.name && <p className='text-red-500 text-sm'>{errors.name.message}</p>}
            </div>
            <div>
                <label htmlFor="email" className='block font-medium text-gray-100'>EMAIL</label>
                <input {...register("email")}  id="email" className={`w-full p-2 border rounded ${errors.name ? "border-red-500" : "border-gray-300"}`}/>
                {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
            </div>
            <div>
                <label htmlFor="message" className='block font-medium text-gray-100'>MESSAGE</label>
                <textarea {...register("message")} id="message" className={`w-full p-2 border rounded ${errors.name ? "border-red-500" : "border-gray-300"}`} />
                {errors.message && <p className='text-red-500 text-sm'>{errors.message.message}</p>}
            </div>
            <button type="submit" className='w-full bg-neutral-800 text-white p-2 rounded border border-gray-300'>SEND</button>
        </form>
    )
}