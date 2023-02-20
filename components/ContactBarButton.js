import Link from 'next/link';

export default function ContactBarButton({website, url, icon}){
    return(
        <div className='text-5xl text-gray-600'>
            <Link href={url}>
                {icon}
            </Link>
        </div>
    )
}