import ContactBarButtons from "../content/ContactBarButton.config";
import ContactBarButton from "./ContactBarButton";
const ContactBar = () => (
    <div className="flex py-5 items-center justify-center">
        {ContactBarButtons.map((buttonInfo) => (
            <ContactBarButton
                key={buttonInfo.website}
                website={buttonInfo.website}
                url={buttonInfo.url}
                icon={buttonInfo.icon}
            />
        ))}
    </div>
);

export default ContactBar;