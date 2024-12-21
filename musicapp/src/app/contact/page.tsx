'use client'

import { Form } from "@/components/Form"
import { Meteors } from "@/components/ui/meteors"

function Contact() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Meteors number={40} />
      </div>

      <div className="pt-36">
      <Form />
      </div>
    </div>
  )
}

export default Contact
