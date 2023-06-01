import socrates from "../assets/socratesazul-cke.jpg"
import { PublishButton, PublishContainer, PublishData, PublishText, InputLink, TextArea, UserPhoto } from "./PublishContainerComponentStyle";


export default function PublishContainerComponent() {
    return (
        <PublishContainer>
            <UserPhoto src={socrates} alt="socrates" />
            <PublishData>
                <PublishText>What are you going to share today?</PublishText>
                <InputLink type="text" placeholder="http://..." />
                <TextArea placeholder="Awesome article about #javascript"></TextArea>
                <PublishButton>Publish</PublishButton>
            </PublishData>
        </PublishContainer>
    );
}