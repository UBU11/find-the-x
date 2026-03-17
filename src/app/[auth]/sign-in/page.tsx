"use client"

import { LoginForm } from "@/src/components/login-form"
import { motion } from "motion/react"

export default function SignInPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-sm md:max-w-4xl"
      >
        <LoginForm />
      </motion.div>
    </div>
  )
}
