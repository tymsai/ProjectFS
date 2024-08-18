/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ckJ9ReKpy86
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <header className="border-b-2 flex h-16 w-full items-center justify-between bg-background px-4 md:px-6">
      <Link href="#" className="flex items-center" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="hidden lg:flex gap-4">
        <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
          Home
        </Link>
        <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
          About
        </Link>
        <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
          Services
        </Link>
        <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
          Contact
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] bg-background p-4">
          <div className="flex flex-col gap-4">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
              Services
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}