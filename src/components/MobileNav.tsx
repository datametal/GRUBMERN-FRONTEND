import React from 'react'
import { Menu } from 'lucide-react'
import { Separator } from './ui/separator'
import { Button } from './ui/button'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet' // Add the import statement for the Sheet component

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className='text-orange-500' />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>
          <span>Welcome to GRUBMERN.com</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className='flex'>
          <Button className='flex-1 bg-orange-500 font-bold'>Log In</Button>
        </SheetDescription>
      </SheetContent>
    </Sheet> // Fix the JSX syntax by removing unnecessary line breaks
  )
}

export default MobileNav
