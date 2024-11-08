import { Carousel } from "@material-tailwind/react";

export function HeroSlider() {
    return (
        <Carousel className="h-[80vh]" placeholder="Your placeholder text"
            onPointerEnterCapture={() => console.log('Pointer entered')}
            onPointerLeaveCapture={() => console.log('Pointer left')}>
            <img
                src="https://static.wixstatic.com/media/c1981a_361708518b964bed88559d3677083c63~mv2.jpg/v1/fill/w_1818,h_700,al_c,q_85,enc_auto/c1981a_361708518b964bed88559d3677083c63~mv2.jpg"
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src="https://static.wixstatic.com/media/c1981a_f3b2945c76854c78a891719b06f6dacd~mv2.jpg/v1/fill/w_1818,h_700,al_c,q_85,enc_auto/c1981a_f3b2945c76854c78a891719b06f6dacd~mv2.jpg"
                alt="image 2"
                className="h-full w-full object-cover"
            />
            <img
                src="https://static.wixstatic.com/media/c1981a_3f32eaa03ca848a6bde236b9437f7e96~mv2.jpg/v1/fill/w_1818,h_700,al_c,q_85,enc_auto/c1981a_3f32eaa03ca848a6bde236b9437f7e96~mv2.jpg"
                alt="image 3"
                className="h-full w-full object-cover"
            />
         
        </Carousel>
    );
}