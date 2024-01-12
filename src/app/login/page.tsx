import LoginForm from '@/components/ui/login-form';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Login() {
    return (
        <div className={cn("flex flex-col items-center justify-center h-screen")}>
            <LoginForm />
            <Button variant='ghost' className='mt-4'>
                Create an account
            </Button>
        </div>
    );
}

