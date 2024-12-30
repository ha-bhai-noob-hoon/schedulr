import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { PenBox } from 'lucide-react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const header = () => {
  return (
    <nav className='mx-auto py-4 px-2 flex justify-between items-center shadow-md border-b-2'>
        <Link href={"/"} className='flex items-center'>
        <Image src="/logo.png"
        width="150"
        height={"60"}
        alt='Schedulr Logo'
        className='h-16 w-auto' /> 
        </Link>

        <div className='flex items-center gap-4'>
            <Link href={"/events?crete=true"}>
                <Button className="flex items-center gap-4">
                    <PenBox size={18} />Create Event</Button>
            </Link>
            <SignedOut>
                <SignInButton forceRedirectUrl='/dashboard'>
                <Button variant="outline">Login</Button>

                </SignInButton>

            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    </nav>
  )
}

export default header