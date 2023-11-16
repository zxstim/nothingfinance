import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { BookText } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-12 items-center justify-center h-screen">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/nothingfinance-logo.svg"
          alt="Nothing Finance Logo"
          width={500}
          height={70}
          priority
        />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-secondary">Crowdfund your next Dapp!</h1>
        <Button asChild className="flex flex-row items-center" variant="secondary">
          <Link href="https://docs.nothingfinance.com">
            <BookText className="mr-2 h-4 w-4" />
            Documentation
          </Link>
        </Button>
      </div>
    </>
  )
}
