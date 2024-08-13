import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Page() {
    return (
        <div className="h-[500px] flex justify-center items-center">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    );
}
