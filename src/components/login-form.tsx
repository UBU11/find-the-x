import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/src/components/ui/card"
import { FieldDescription } from "@/src/components/ui/field"
import { SignIn } from "@clerk/nextjs"
import login from "@/public/login.jpg"
import Image from "next/image"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="flex items-center justify-center p-6 md:p-8">
            <SignIn appearance={{ elements: { footer: "hidden" } }} routing="path" path="/auth/sign-in" fallbackRedirectUrl="/home" />
          </div>
          <div className="relative hidden bg-muted md:block">
            <Image
              src={login}
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
