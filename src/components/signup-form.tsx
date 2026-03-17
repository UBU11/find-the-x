import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/src/components/ui/card"
import { FieldDescription } from "@/src/components/ui/field"
import { SignUp } from "@clerk/nextjs"
import Image from "next/image"
import signup from "@/public/login.jpg"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="flex items-center justify-center p-6 md:p-8">
            <SignUp appearance={{ elements: { footer: "hidden" } }} routing="path" path="/auth/sign-up" fallbackRedirectUrl="/home" />
          </div>
          <div className="relative hidden bg-muted md:block">
            <Image
              src={signup}
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
