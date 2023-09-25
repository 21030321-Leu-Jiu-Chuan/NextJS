import Image  from 'next/image'
import Link from "next/link"
import profileimg from "@/public/profile-img.png"


const Logo = () => {
  return (
    <Link href="/">
        <div className='w-16 rounded-full overflow-hidden border border-solid border-dark'>
          <Image src={profileimg} alt="CodeBucks" className="w-full h-auto rounded-full"  />
        </div>
        <span>CodeBucks</span>
    </Link>
  )
}

export default Logo