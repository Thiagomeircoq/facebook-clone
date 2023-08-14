export const startLoading = (container) => {
    if (!container) {
        // Criar um novo container que ocupe toda a tela
        const fullscreenContainer = $('<div>').addClass('fullscreen-container');
        $('body').append(fullscreenContainer);
        container = fullscreenContainer;
    }

    const loadingIndicator = $('<span>').addClass('loader');
    container.css('opacity', '0.6');
    container.append(loadingIndicator);
};

export const stopLoading = (container) => {
    if (!container) {
        container = $('.fullscreen-container');
    }

    const loadingIndicator = container.find('.loader');
    container.css('opacity', '1');
    loadingIndicator.remove();

    if (!container.hasClass('fullscreen-container')) {
        // Remover o container personalizado criado
        container.remove();
    }
};