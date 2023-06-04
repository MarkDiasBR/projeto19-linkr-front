//import socrates from "../assets/socratesazul-cke.jpg"
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import { useState, useContext } from "react";
import { PublishButton, PublishContainer, PublishData, PublishText, InputLink, TextArea, UserPhoto } from "./PublishContainerComponentStyle";

export default function PublishContainerComponent() {
    const [publishLink, setPublishLink] = useState("");
    const [urlDescription, setUrlDescription] = useState("");
    const [publishButtonText, setPublishButtonText] = useState("Publish");
    const [publishDisable, setPublishDisable] = useState(false);

    const { attTimeLine, setAttTimeLine, timeLineData } = useContext(UserContext);




    function getPublish(event) {
        event.preventDefault();
        console.log("button")
        setPublishDisable(true);
        setPublishButtonText("Publishing...");

        if (!publishLink) return alert("Preencha pelo menos o link!");
        const promise = axios.post(`localhost:5000/post`, {
            link: publishLink,
            description: urlDescription,
        }, { Authorization: "Bearer f5e16715-b3b3-43eb-a575-c612106a1085" });

        promise.then(() => {
            setPublishDisable(true);
            setAttTimeLine(!attTimeLine);//////context
            setPublishButtonText("Publishing...");
            setUrlDescription("");
            setUrlDescription("");
        });

        promise.catch(() => {
            setPublishDisable(true);
            setPublishButtonText("Publish");
            alert("Houve um erro ao publicar seu link!");
        });
    }


    return (
        <PublishContainer>
            <UserPhoto src={timeLineData[0]?.urlp} alt={`${timeLineData[0]?.username} photo`} />
            {/*<UserPhoto src={socrates} alt="socrates" />*/}
            <PublishData>
                <PublishText>What are you going to share today?</PublishText>
                <form onSubmit={getPublish}>
                    <InputLink
                        disabled={publishDisable}
                        type="text"
                        placeholder="http://..."
                        value={publishLink}
                        onChange={(e) => setPublishLink(e.target.value)}
                    />
                    <TextArea
                        disabled={publishDisable}
                        placeholder="Awesome article about #javascript"
                        value={urlDescription}
                        onChange={(e) => setUrlDescription(e.target.value)}
                    ></TextArea>
                    <PublishButton disabled={publishDisable} type="submit">{publishButtonText}</PublishButton>
                </form>
            </PublishData>
        </PublishContainer>
    );
}