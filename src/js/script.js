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