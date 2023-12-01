import Section from "../../bookingApp/components/Section";
import { Link } from "react-router-dom";
import { useUsersContext } from "../../context/UsersContext";
import { SentEmailModal } from "../components/verification/SentEmailModal";
import { useState } from "react";
import { Loader } from "../../ui/Loader";
import { Helmet } from "react-helmet";

export const VerificationRegisterPage = () => {
    const { userEmail, setIsRegistered, sendEmailAgain, loadingAuth } =
        useUsersContext();
    const [openSendEmail, setOpenSendEmail] = useState(false);
    const handleSendEmail = async () => {
        const sentEmail = await sendEmailAgain(userEmail);
        if (sentEmail) {
            setOpenSendEmail(true);
        }
    };
    return (
        <Section>
            <Helmet>
                <title>Registrase en Bike Me Now</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}

                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/djslo5b3u/image/upload/v1698971497/BikeMeNow_BlueAlpha_svidg9.png"
                />
                <meta property="og:title" content="Registrase en Bike Me Now" />
                <meta
                    property="og:description"
                    content="Descubre la libertad sobre dos ruedas con nuestro servicio de alquiler de bicicletas. Explora tu ciudad o destinos increíbles mientras reservas la bicicleta perfecta para cada aventura. ¡Siente el viento en tu rostro y pedalea hacia tus próximas experiencias inolvidables!"
                />
            </Helmet>
            <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-8">
                <div className="flex flex-col items-center gap-4">
                    <img
                        src="https://res.cloudinary.com/djslo5b3u/image/upload/v1699321812/ThanksImage_fmi6pn.svg"
                        alt="Imagen de verificacion"
                    />
                    <h1 className="text-primary font-bold  text-3xl ssm:text-4xl sm:text-5xl">
                        Muchas gracias!
                    </h1>
                    <div className="flex flex-col gap-1 justify-center items-center">
                        <p className="ssm:max-w-[350px] text-center text-base text-grayTertiary">
                            Ahora eres un miembro de BikeMeNow. Te enviámos un
                            mensaje de verificación al correo:
                        </p>
                        <strong>{userEmail}</strong>
                    </div>
                </div>
                <div className="flex gap-2">
                    <p>¿No te llego el correo?</p>
                    <button className="text-primary" onClick={handleSendEmail}>
                        Volver a enviar
                    </button>
                    {loadingAuth && <Loader className={"text-primary"} />}
                </div>
                <div className="flex flex-col items-center gap-3">
                    <p>¿Deseas ingresar?</p>
                    <Link to={"/auth/login"}>
                        <button
                            className="middle none center rounded-full bg-primary py-3 px-8 font-sans text-xs font-bold uppercase text-white shadow-sm  transition-all  hover:shadow-secondary  active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true"
                            onClick={() => setIsRegistered(false)}
                        >
                            Iniciar sesión
                        </button>
                    </Link>
                </div>
                {openSendEmail && (
                    <SentEmailModal setOpenSendEmail={setOpenSendEmail} />
                )}
            </div>
        </Section>
    );
};
