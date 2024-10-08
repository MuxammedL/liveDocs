import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"


const Header = ({ className, children }: HeaderProps) => {
    return (
        <div className={cn("header", className)}>
            <Link href="/">
                <Image src="/assets/icons/logo.svg" alt="Logo with name" width={120} height={32} className="hidden md:block" />
                <Image src="/assets/icons/logo-icon.svg" alt="Logo with name" width={32} height={32} className="mr-2 md:hidden" />
            </Link>
            {children}
        </div>
    )
}

export default Header