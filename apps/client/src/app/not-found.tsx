"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { Button } from "@local/ui/button";

import { LampContainer } from "@/components/lamp";

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          //@ts-ignore - TODO: fix this
          className="mt-8 bg-gradient-to-br from-rose-300 to-slate-500 bg-clip-text py-4 text-center text-4xl font-bold tracking-tight text-transparent drop-shadow-md md:text-7xl"
        >
          OOPS! <br />
          RESOURCE NOT FOUND. <br />
          CLICK{" "}
          <Button
            variant={"link"}
            onClick={() => router.back()}
            
            className="cursor-pointer text-center text-4xl font-bold tracking-tight text-red-500 drop-shadow-md hover:text-blue-600 hover:underline md:text-7xl"
          >
            HERE
          </Button>{" "}
          TO GO BACK
        </motion.h1>
      </LampContainer>
    </>
  );
}
