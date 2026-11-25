//Botão da arvre//
const botaoArvore = document.getElementById('p1-botao');
const camadaArvore = document.getElementById('arvore');
const trilhoArvore = document.getElementById('p1-trilho');
const bolinhaArvore = document.getElementById('p1-bolinha');
botaoArvore.addEventListener('click', () => {
    camadaArvore.classList.toggle('hidden');
    trilhoArvore.classList.toggle('bg-slate-300');
    trilhoArvore.classList.toggle('bg-green-700');
    bolinhaArvore.classList.toggle('translate-x-5');
    atualizarBar();
})

//Botão da moblty//
const botaoMobilidade = document.getElementById('p2-botao');
const camadaMobilidade = document.getElementById('mobilidade');
const trilhoMobilidade = document.getElementById('p2-trilho');
const bolinhaMobilidade = document.getElementById('p2-bolinha');
botaoMobilidade.addEventListener('click', () => {
    camadaMobilidade.classList.toggle('hidden');
    trilhoMobilidade.classList.toggle('bg-slate-300');
    trilhoMobilidade.classList.toggle('bg-green-700');
    bolinhaMobilidade.classList.toggle('translate-x-5');
    atualizarBar();
})

//Botão da enrgy//
const botaoEnergia = document.getElementById('p3-botao');
const camadaEnergia = document.getElementById('energia');
const trilhaEnergia = document.getElementById('p3-trilho');
const bolinhaEnergia = document.getElementById('p3-bolinha');
botaoEnergia.addEventListener('click', () => {
    camadaEnergia.classList.toggle('hidden');
    trilhaEnergia.classList.toggle('bg-slate-300');
    trilhaEnergia.classList.toggle('bg-green-700');
    bolinhaEnergia.classList.toggle('translate-x-5');
    atualizarBar();
})
function atualizarBar() {
    const textoAr = document.getElementById('nvl-qualidade-ar');
    const barraAr = document.getElementById('bar-ar');

    let pontos = 0;

    if (!camadaArvore.classList.contains('hidden')) {
        pontos = pontos + 1;
    }
    if (!camadaEnergia.classList.contains('hidden')) {
        pontos = pontos + 1;
    }
    if (!camadaMobilidade.classList.contains('hidden')) {
        pontos = pontos + 1;
    }

    if (pontos === 0) {
        textoAr.textContent = 'Crítica';
        barraAr.className = 'h-full rounded-full transition-all duration-500 bg-red-600 w-1/4';
    } else if (pontos === 1) {
        textoAr.textContent = 'Moderada';
        barraAr.className = 'h-full rounded-full transition-all duration-500 bg-orange-500 w-2/4';
    } else if (pontos === 2) {
        textoAr.textContent = 'Boa';
        barraAr.className = 'h-full rounded-full transition-all duration-500 bg-yellow-400 w-3/4';
    } else {
        textoAr.textContent = 'Excelente';
        barraAr.className = 'h-full rounded-full transition-all duration-500 bg-green-600 w-full';
    }
}

atualizarBar();