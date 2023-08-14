// Função responsável por validar e preecher os selects de Data da página
$(document).ready(function() {

    // Preenche as options com o valores corretos
    const fillSelect = (selectElement, start, end) => {
        for (let i = start; i <= end; i++) {
            selectElement.append($('<option>', {
                value: i,
                text: i
            }));
        }
    }

    // Select Dia (1 a 31 )
    $('.selectDia').each(function() {
        fillSelect($(this), 1, 31);
    });

    // Select Mês (1 a 12)
    $('.selectMes').each(function() {
        fillSelect($(this), 1, 12);
    });

    // Select Ano (100 - ano atual)
    let anoAtual = new Date().getFullYear();
    $('.selectAno').each(function() {
        fillSelect($(this), anoAtual - 100, anoAtual);
    });

    // Função para obter o último dia de um mês e ano
    function getLastDayOfMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }

    // Função para validar a data selecionada
    function validarData() {
        let dia = parseInt($(this).closest('.row').find('.selectDia').val());
        let mes = parseInt($(this).closest('.row').find('.selectMes').val());
        let ano = parseInt($(this).closest('.row').find('.selectAno').val());

        let ultimoDiaDoMes = getLastDayOfMonth(ano, mes);

        // Validar se a data é válida
        let data = new Date(ano, mes - 1, dia);
        if (data.getDate() !== dia || data.getMonth() !== mes - 1 || data.getFullYear() !== ano) {
            $(this).closest('.row').find('.selectDia').val(ultimoDiaDoMes);
        }
    }

    // Adicionar um evento de mudança aos selects
    $('.selectDia, .selectMes, .selectAno').on('change', validarData);
});
