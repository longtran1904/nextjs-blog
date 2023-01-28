import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';


const ContactBarButtons = [
    {
        website: 'GitHub',
        url: 'https://github.com/longtran1904',
        icon: <FontAwesomeIcon icon={faGithub} size="lg" />
    },
    {
        website: 'LinkedIn',
        url: 'https://www.linkedin.com/in/long-tran123/',
        icon: <FontAwesomeIcon icon={faLinkedinIn} size="lg"/>
    }
];
export default ContactBarButtons;