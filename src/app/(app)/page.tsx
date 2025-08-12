'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ColourfulText } from '../../../components/ui/colourful-text'
import { AnimatedTestimonials } from '../../../components/ui/animated-testimonials'
import { TypewriterEffectSmooth } from '../../../components/ui/typewriter-effect'
import { motion } from 'framer-motion'
import Footer from '../../../components/ui/Footer'
import { Button } from '../../../components/ui/moving-border'
import { Button1 } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { redirect, useRouter } from 'next/navigation'
import { joinSchema } from '../../../schemas/join'
import { useForm } from 'react-hook-form'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Loader2 } from 'lucide-react'

const words = [
  { text: 'Gita' },
  { text: 'Youth' },
  { text: 'Society' },
  { text: 'For' },
  {
    text: 'Transformation Club',
    className: 'text-yellow-300 dark:text-yellow-300',
  },
]

const testimonials = [
  {
    quote:
      'In the symphony of life, let your character play the melody of integrity and virtue, Character means how much one is self-controlled, how much one is truthful, how much one is clean, how much one is merciful. One who has character and devotion, his words will have effect.',
    name: 'Character',
    designation: '',
    src: '/character.jpg',
  },
  {
    quote:
      'Empower yourself with knowledge, skills, and dedication to thrive in every endeavor. It’s not just about doing things—it’s about doing them with heart and purpose.',
    name: 'Competence',
    designation: '',
    src: '/competence.jpg',
  },
  {
    quote:
      'With a heart devoted to higher ideals, find purpose and joy in the service of others. Devotion isn’t just about rituals or rules—it’s about living with purpose, loving deeply, and showing up for others.',
    name: 'Devotion',
    designation: '',
    src: '/devotion.jpg',
  },
]




const Home = () => {



  
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const form = useForm<z.infer<typeof joinSchema>>({
    resolver: zodResolver(joinSchema),
    defaultValues: {
      name: '',
      email: '',
      mobile: '',
      gender:'male',
      Age: '',
      course: '',
      college: '',
    },
})

  const onSubmit = async (data: z.infer<typeof joinSchema>) => {
    setSubmitting(true);
    try {
      await axios.post('/api/join', data);
      toast.success('Registration successful! Check your email for details.');
      redirect('/');
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error('Registration failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };



  return (
    <div className="bg-white text-black font-sans w-full">

      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src="/5335769.jpg"
          alt="GYST Club Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4 text-white">
          <motion.h4
            className="text-base md:text-2xl font-semibold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            An Educational Wing of ISKCON Kanpur
          </motion.h4>

          <motion.div
            className="text-2xl md:text-5xl font-bold mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <TypewriterEffectSmooth words={words} className='text-2xl'/>
          </motion.div>

          <motion.p
            className="text-sm md:text-xl font-medium mt-2 text-gradietnt-to-r from-blue-500 to-purple-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <ColourfulText text="Rekindling Wisdom , Reviving Love"/>
          </motion.p>
          <div className='py-8'>
          <Button
              borderRadius="1.75rem"
              className="bg- text-white border-gray-500"
              onClick={() => openModal()}
            >
              Join Now!
            </Button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">
             Join GYST Club
            </h2>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

               
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                
                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+91 98765 43210" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

               
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender</FormLabel>
                      <FormControl>
                        <select {...field} className="w-full p-2 border rounded-md">
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                
                <FormField
                  control={form.control}
                  name="Age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Age</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Your age" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="course"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>course</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="B.tech" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="college"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>college</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="CSJM University" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                
                <Button1
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-3 rounded-md transition"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="animate-spin mr-2 h-4 w-4" />
                      Submitting...
                    </>
                  ) : (
                    "Register Now"
                  )}
                </Button1>
              </form>
            </Form>
          </div>
        </div>
      )}


      <section className="py-8 px-8 sm:px-8 md:px-16 md:py-20 text-center bg-gray-100 text-black">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Our Mission & Vision
        </h2>
        <div className="max-w-6xl mx-auto">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </section>


      <section className="py-6 px-6 text-center bg-blue-100">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h4 className="text-2xl md:text-3xl font-bold text-gray-900">
            Empowering Students in{' '}
            <span className="text-yellow-600">Practical Spirituality</span>
          </h4>
          <h5 className="text-lg md:text-xl font-medium text-gray-700">
            for Personal and Professional Excellence.
          </h5>
          <p className="text-md md:text-lg font-semibold text-gray-800">
            ✨ Join <span className="font-extrabold">GYST Club</span> Today! ✨
          </p>
        </motion.div>
      </section>
      <section className="py-16 px-4 sm:px-8 text-center bg-gray-50">
      <div className="flex justify-center">
        <Image
          src="/GYST.png"
          alt="GYST Club Logo"
          width={300}
          height={300}
          className="object-contain rounded-xl shadow-lg"
        />
      </div>
    </section>
    <Footer/>
    </div>
  )
}

export default Home
