//import socrates from "../assets/socratesazul-cke.jpg"
import { IoIosArrowDown } from "react-icons/io";
import { HeaderContainer, TextLogo, LogoutContainer, UserImg } from "./HeaderStyle";
import { UserContext } from "../../contexts/UserContext";
import { useContext, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

export default function Header() {
    const { timeLineData, setTimeLineData, attTimeLine, setMetaDetaInfo } = useContext(UserContext);
    const { setIsLoadedPage } = useContext(UserContext);

    const APILinkMetaData = "https://jsonlink.io/api/extract?url=";

    useEffect(() => {
        let newData = [];
        const config = {
            headers: {
                Authorization: "Bearer f5e16715-b3b3-43eb-a575-c612106a1085",
            },
        };
        const promise = axios.get(`http://localhost:5000/timeline`, config);
        promise.then((res) => {
            newData = [...res.data];
            setTimeLineData(newData);
            const requests = newData.map((nd) => axios.get(`${APILinkMetaData}${nd.url}`));

            axios.all(requests)
                .then(axios.spread((...responses) => {
                    const metaDataInfo = responses.map(r => ({ title: r.data.title, description: r.data.description, images: r.data.images[0] }));
                    console.log("metaDataInfo", metaDataInfo);
                    setMetaDetaInfo(metaDataInfo);
                    setIsLoadedPage(true);
                }))
                .catch(error => {
                    console.error(error);
                });

        });
        promise.catch((res) => {
            alert("nada a declarar");
        });
    }, [attTimeLine, setTimeLineData, setMetaDetaInfo, setIsLoadedPage]);

    //console.log(timeLineData);
    //console.log("metaDataInfo", metaDataInfo)
    return (
        <>
            <HeaderContainer>
                <TextLogo>linkr</TextLogo>
                <SearchBar />
                <LogoutContainer>
                    <IoIosArrowDown style={{ color: "white", fontSize: "32px", marginTop: "20px" }} />
                    {/*<UserImg src={socrates} alt="socrates" />*/}
                    <UserImg src={timeLineData[0]?.urlp} alt={`${timeLineData[0]?.username} photo`} />
                </LogoutContainer>
            </HeaderContainer>
        </>
    );
}