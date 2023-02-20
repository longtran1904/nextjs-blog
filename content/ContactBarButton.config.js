import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';


const ContactBarButtons = [
    {
        website: 'GitHub',
        url: 'https://github.com/longtran1904',
        icon_light: <AiFillGithub />,
        icon_dark: <AiOutlineGithub/>

    },
    {
        website: 'LinkedIn',
        url: 'https://www.linkedin.com/in/long-tran123/',
        icon_light: <AiFillLinkedin/>,
        icon_dark: <AiOutlineLinkedin/>
    },
    {
        website: 'twitter',
        url: 'https://www.linkedin.com/in/long-tran123/',
        icon_light: <AiFillTwitterCircle/>,
        icon_dark: <AiOutlineTwitter/>
    }
];
export default ContactBarButtons;