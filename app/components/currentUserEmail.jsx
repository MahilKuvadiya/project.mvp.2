'use client'

import { useSession } from "next-auth/react"

export default function currentUserEmail() {
    const session = useSession();
    const email = session?.user?.email;
    return email;
}