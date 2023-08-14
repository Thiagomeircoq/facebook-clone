// Imports
import { show, store } from "../../js/utils/crud.js";
import { startLoading, stopLoading } from "../../js/utils/loading.js";

// Função responsável por habilitar e desabilitar os selects de gênero
$(document).ready(function () {
    $('input[name="genero"]').change(function () {
        if ($('#personalizado').prop('checked')) {
            // Habilita os selects
            $('#pronomeDiv').removeClass('d-none').addClass('d-block');
        } else {
            // Desabilita os selects
            $('#pronomeDiv').removeClass('d-block').addClass('d-none');
        }
        
        $('select[name="pronome"]').val('default');
    });
});

// Função responsável pelo submit do formulário
$('#create-account').submit(async (e) => {
    // Previne o envio de formulário
    e.preventDefault();

    let form = $('#create-account');

    $.ajax({
        url: form.attr("action"),
        data: formatDate(form).serialize(),
        type: "POST",
        dataType: "json",
        beforeSend: () => {
            startLoading();
        },
        success: (callback) => {
            if (callback.status == 'success') {
                console.log(callback.msg);
            }
            console.log(callback);
        },
        complete: () => {
            // stopLoading()
        }
    })

})

/** 
 * Função responsável por formatar o form com os dados corretos
*/
const formatDate = (form) => {
    const formattedDay = form.find("select[name='day']").val();
    const formattedMonth = form.find("select[name='month']").val();
    const formattedYear = form.find("select[name='year']").val();

    // Restante do código de formatação de data
    let formattedDate = `${validateNumber(formattedDay)}-${validateNumber(formattedMonth)}-${validateNumber(formattedYear)}`;

    // Adicione a data formatada ao formulário
    form.find('input[name="dataNascimento"]').val(formattedDate);

    // Crie um novo campo no formulário e atribua o valor formatado a ele
    return form.append($('<input>').attr('type', 'hidden').attr('name', 'dataNascimento').val(formattedDate));
}

/**
 * Função responsável por criar um número com mais de um digito
 * @param { Number } number 
 * @returns { Number }
 */
const validateNumber = (number) => {
    return number > 10 ? number : `0${number}`;
}
