import Link from 'next/link';

export default function ContactBarButton({website, url, icon_light, icon_dark, darkMode}){
    return(
        <div className='text-5xl dark:text-slate-50'>
            <Link href={url}>
                {darkMode ? icon_dark : icon_light}
            </Link>
        </div>
    )
}