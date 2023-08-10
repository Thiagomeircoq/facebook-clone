/**
 * Função responsável por retornar os registros da busca
 * @param {String} url 
 * @param {String|Integer} id 
 * @returns {Object}
 */
const showAll = async (url, id = "") => {
    try {
        const response = await fetch(url + id);

        if (!response.ok) {
            throw new Error('Erro ao realizar a requisição');
        }

        return await response.json();

    } catch (error) {
        console.log(error);
    }
}

/**
 * Função responsável por enviar as informações para o controller
 * @param {Object} data 
 * @param {String} url 
 * @returns {Object}
 */
const store = async (data, url) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Erro ao inserir os dados no banco de dados');
        }

        return await response.json();

    } catch (error) {
        console.log(error);
    }
}