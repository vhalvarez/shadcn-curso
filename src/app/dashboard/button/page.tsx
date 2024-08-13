"use client";

import { Button } from "@/components/ui/button";
import {
    ChevronRightIcon,
    EnvelopeOpenIcon,
    ReloadIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function Page() {
    return (
        <div className="grid gap-2 grid-cols-5">
            <Button>Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">link</Button>
            <Button variant="outline">outline</Button>
            <Button variant="secondary">secondary</Button>
            <Button disabled>disabled</Button>
            <Button onClick={() => console.log("Hola mundo")}>Click me</Button>
            <Button variant="success">Success</Button>
            <Button capitalize={false}>capitalize false</Button>

            <Button variant="outline" size="icon">
                <ChevronRightIcon className="h-4 w-4" />
            </Button>

            <Button>
                <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
            </Button>

            <Button disabled>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Please wait
            </Button>

            <Button asChild>
                <Link href="/login">Login</Link>
            </Button>
        </div>
    );
}
