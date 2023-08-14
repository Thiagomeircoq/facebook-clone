/**
 * Função responsável por retornar os registros da busca
 * @param {String} url 
 * @param {String|Integer} id 
 * @returns {Object}
 */
export const show = async (url, id = "") => {
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
export const store = async (data, url) => {
    try {
        $.ajax({
            url: url,
            data: data,
            type: "POST",
            dataType: "json",
            success: function (callback) {
                return callback;
            },
            error: function (error) {
                return console.log(error);
            }
        })
    } catch (error) {
        console.log(error);
    }
}

