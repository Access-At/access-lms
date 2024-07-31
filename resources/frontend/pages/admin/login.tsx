// import { LazyImage } from "@/components/shared/lazy-image";
// import { TransitionType } from "@/lib/types";
// import Image from 'example.jpg?w=400&h=300&format=webp'
import Image from '@/assets/image/banner-login.png'
import LoginAdminForm from "@/forms/loginAdminForm";

export default function Login() {

    return (
        <div className="h-screen w-full lg:grid lg:grid-cols-2">
            <div className='flex h-full items-center justify-center py-12'>
                <div className='mx-auto grid w-[350px] gap-6'>
                    <div className='grid gap-2 text-center'>
                        <h1 className='text-3xl font-bold'>Login</h1>
                        <p className='text-balance text-muted-foreground'>
                            Enter your email below to login to your account
                        </p>
                    </div>
                    <div className='grid gap-4'>
                        <LoginAdminForm />
                    </div>
                </div>
            </div>
            <div className="hidden bg-muted lg:block">
                {/* dark:brightness-[0.2] dark:grayscale */}
                <img
                    src={Image}
                    alt='banner image'
                    className='h-full w-full object-cover'
                />
                
                {/* <LazyImage
                    src={"https://www.edukool.com/images/lmsbanner_image.png"}
                    transition={TransitionType.Blur}
                    alt='banner image'
                    className='h-full w-full object-cover' /> */}
            </div>
        </div>
    )
}
