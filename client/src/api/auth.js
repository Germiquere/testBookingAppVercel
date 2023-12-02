export const login = async (user) => {
    try {
        const res = await fetch(`http://54.227.169.64:8080/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (!res.ok) {
            let error = {
                status: res.status,
                ok: false,
                message: "Error en la solicitud PUT",
            };

            if (res.status === 403) {
                error.message = "Error: No autorizado";
            }

            throw error;
        }

        const data = await res.json();
        return data;
    } catch (error) {
        throw error;
    }
};
export const register = async (user) => {
    console.log("estoy pro registrar");

    try {
        const res = await fetch(`http://54.227.169.64:8080/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (!res.ok) {
            let error = {
                status: res.status,
                ok: false,
                message: "Error en la solicitud POST",
            };

            if (res.status === 409) {
                error.message = "Error: usuario registrado";
            }

            throw error;
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error.status);
        throw error;
    }
};
export const sendEmail = async (email) => {
    //  `http://localhost:8080/auth/reenviar-email?email=${email}`
    // `http://localhost:8080/auth/reenviar-confirmacion?email=${email}`
    try {
        const res = await fetch(
            `http://localhost:8080/auth/reenviar-email?email=${email}`,
            {
                method: "POST",
                headers: {
                    // "Content-Type": "application/json",
                },
                // body: JSON.stringify(user),
            }
        );

        if (!res.ok) {
            let error = {
                status: res.status,
                ok: false,
                message: "Error en la solicitud POST",
            };

            // if (res.status === 409) {
            //     error.message = "Error: usuario registrado";
            // }

            throw error;
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error.status);
        throw error;
    }
};
