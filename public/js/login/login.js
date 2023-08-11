$(document).ready(function () {
    $('input[name="genero"]').change(function () {
        if ($('#personalizado').prop('checked')) {
            $('#pronomeDiv').removeClass('d-none').addClass('d-block');
        } else {
            $('#pronomeDiv').removeClass('d-block').addClass('d-none');
        }
        
        $('select[name="pronome"]').val('default');
    });

    $('.js-example-basic-single').select2();
});
