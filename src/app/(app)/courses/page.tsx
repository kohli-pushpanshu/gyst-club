"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registrationSchema } from "../../../../schemas/registration";

import {
  CardContainer,
  CardBody,
  CardItem,
} from "../../../../components/ui/3d-card";
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
import Footer from "../../../../components/ui/Footer";

const cardData = [
  {
    title: "Self Management for Success",
    description:
      "Navigate the path of success with the compass of self-discipline and strategic choices",
    imageUrl: "/Manage.jpg",
    courseId: "1",
  },
  {
    title: "Art of Smart Works",
    description:
      "Unlock the secrets that smart workers know, transforming challenges into stepping stones to success",
    imageUrl: "/smart.png",
    courseId: "2",
  },
  {
    title: "Convert Stress to Smile",
    description:
      "Discover the alchemy of turning stress into smiles, embracing resilience and a positive mindset.",
    imageUrl: "/smile.png",
    courseId: "3",
  },
  {
    title: "Leadership Sutras from Gita",
    description:
      "Draw inspiration from timeless wisdom, leading with the sagacity of the Bhagavad Gita's leadership sutras.",
    imageUrl: "/character.jpg",
    courseId: "4",
  },
  {
    title: "Overcoming Inferiority Complex",
    description:
      "Transform the shadows of self-doubt into the brilliance of self-discovery with self-love and confidence.",
    imageUrl: "/complex.png",
    courseId: "5",
  },
  {
    title: "Power of Habits",
    description:
      "Cultivate habits that nourish both mind and body, laying the foundation for academic excellence.",
    imageUrl: "/poh.png",
    courseId: "6",
  },
];

export default function CourseCards() {
  type Course = {
    title: string;
    description: string;
    imageUrl: string;
    courseId: string;
  };

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm<z.input<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      gender: "male",
      age: '',
      course: selectedCourse ? selectedCourse.courseId : "",
    },
  });

  const onSubmit = async (data: z.infer<typeof registrationSchema>) => {
    if (selectedCourse) {
      data.course = selectedCourse.courseId;
    }

    setSubmitting(true);
    try {
      await axios.post("/api/register", data);
      toast.success("Registration successful! Check your email for details.");
      router.push("/payment");
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Registration failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const openModal = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <div className="bg-white text-black w-full">
    
      <div className="relative w-full h-[200px]">
        <Image
          src="/library.jpg"
          alt="Courses"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h2 className="text-white text-4xl md:text-6xl font-bold">Courses</h2>
        </div>
      </div>

      
      <div className="flex flex-wrap justify-center gap-10 py-6 px-4 bg-gray-100">
        {cardData.map((card, index) => (
          <CardContainer
            key={index}
            className="w-[22rem] bg-white rounded-xl border border-gray-200 p-5 shadow-md hover:shadow-lg transition"
          >
            <CardBody>
              <CardItem translateZ={20} className="text-gray-900 text-xl font-semibold mb-2">
                {card.title}
              </CardItem>
              <CardItem translateZ={10} className="text-gray-600 text-sm mb-4">
                {card.description}
              </CardItem>
              <CardItem translateZ={30}>
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg border border-gray-100"
                />
              </CardItem>
              <div className="mt-5 flex justify-end">
                <button
                  onClick={() => openModal(card)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Register
                </button>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      
      {isModalOpen && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">
              Register for {selectedCourse.title}
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
                  name="age"
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

      <Footer />
    </div>
  );
}
