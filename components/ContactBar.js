import ContactBarButtons from "../content/ContactBarButton.config";
import ContactBarButton from "./ContactBarButton";
const ContactBar = ({darkMode}) => (
    <div className="flex py-5 items-center justify-center gap-16">
        {ContactBarButtons.map((buttonInfo) => (
            <ContactBarButton
                key={buttonInfo.website}
                website={buttonInfo.website}
                url={buttonInfo.url}
                icon_light={buttonInfo.icon_light}
                icon_dark={buttonInfo.icon_dark}
                darkMode={darkMode}
            />
        ))}
    </div>
);

export default ContactBar;