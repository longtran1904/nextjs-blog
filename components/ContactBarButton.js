import Link from 'next/link';

export default function ContactBarButton({website, url, icon}){
    return(
        <div className='p-6 mx-2 border-2 border-green-500 rounded-full'>
            <Link href={url}>
                {icon}
            </Link>
        </div>
    )
}