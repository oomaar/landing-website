import { FeatureBox } from "..";
import featureData from "../../data/featureData.json";
import {
    Container,
    SubContainer,
} from "./styledFeature";

const Feature = () => {
    return (
        <Container id="features">
            <SubContainer>
                {featureData.map(data => (
                    <FeatureBox
                        key={data.id}
                        image={data.image}
                        title={data.title}
                        text={data.text}
                    />
                ))}
            </SubContainer>
        </Container>
    );
};

export default Feature;
