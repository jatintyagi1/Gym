import './styles.css'
import InfoSection from "./infoSection"
import Image from '../../assets/Images/fitness_5.png'

export default function Info() {
    return (
        <InfoSection
            lightBg={false}
            id="about"
            imgStart={false}
            topLine="Smart fitness technology"
            lightText={true}
            headline="We are the future of fitness"
            darkText={false}
            description="Our studios have cutting-edge equipment, so you maximise every single workout. You are free to focus on the activity and to be better, we do everything else for you. 
Achieve your performance goals and track progress in real-time."
            buttonLabel="Get Started"
            img={Image}
            alt="Image"
            primary={true}
            dark={true}
            dark2={false}
        />
    )
}