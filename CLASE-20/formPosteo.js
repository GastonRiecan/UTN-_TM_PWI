const handleSubmit = async (event) => {
    event.preventDefault();

    const titulo = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    console.log('Datos enviados:', { title: titulo, body: body });

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: titulo,
                body: body,
                userId: 1,
            })
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Enviado');
            console.log('Respuesta:', data);
        } else {
            console.error('Error');
        }
    } catch (error) {
        console.error('Error',error);
    }
}

let formulario = document.getElementById('formPost');
formulario.addEventListener('submit', handleSubmit);