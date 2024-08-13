import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { RocketIcon } from "@radix-ui/react-icons";

export default function Page() {
    return (
        <div className="grid gap-2">
            <Alert>
                <RocketIcon className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                    You can add components to your app using the cli.
                </AlertDescription>
            </Alert>
            <Alert variant='destructive'>
                <RocketIcon className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                    You can add components to your app using the cli.
                </AlertDescription>
            </Alert>
            <Alert variant='success'>
                <RocketIcon className="h-4 w-4" />
                <AlertTitle>Success!!</AlertTitle>
                <AlertDescription>
                    You can add components to your app using the cli.
                </AlertDescription>
            </Alert>
        </div>
    );
}
