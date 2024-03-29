import Link from 'next/link'
import Image from  'next/image'

 const Linketer = () => {
    return (
        <section className="fixed left-0 ml-4 top-[45%]">
            <Link href="https://github.com/barmajli2" className='my-2' target='_blank'>
                <Image
                className="  mb-2 "
                src='/github.png'
                alt="github"
                width={45}
                height={45}
                priority
                />
              </Link>
            <Link href="https://www.linkedin.com/in/barmajly2/" className='my-2' target='_blank'>
                <Image
                className="  mb-2 "
                src='/linkedin.png'
                alt="linkedin"
                width={45}
                height={45}
                priority
                />
              </Link>
        </section>
    )
}
export default Linketer
