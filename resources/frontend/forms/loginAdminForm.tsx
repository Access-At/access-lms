import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function LoginAdminForm() {
  return (
    <>
    <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
        />
    </div>
    <div className="grid gap-2">
        <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            {/* <Link
                href="/forgot-password"
                className="ml-auto inline-block text-sm underline"
            >
                Forgot your password?
            </Link> */}
        </div>
        <Input id="password" type="password" required />
    </div>
    <Button type="submit" className="w-full">
        Login
    </Button>
    {/* <Button variant="outline" className="w-full">
        Login with Google
    </Button> */}
</>
  )
}
