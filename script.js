// Lista de unidades solicitantes
const unidades = [
  'Dcc - Divisão de Contratos e Convênios',
  'Nusege - Núcleo de Serviços Gerais/CSI/SA',
  'Cce - Coordenadoria de Cerimonial',
  'Ccom - Coordenadoria de Comunicação Social',
  'Emeron - Escola da Magistratura do Estado de Rondônia',
  'Nupemec - Núcleo Permanente de Métodos Consensuais de Solução de Conflitos/CGJ',
  'Dea - Departamento de Engenharia e Arquitetura/SA',
  'Dgb - Divisão de Gestão de Bens/Deagesp/SA',
  'Dfc - Departamento de Finanças e Contabilidade/SOF',
  'Dialmox - Divisão de Almoxarifado/Deagesp/SA',
  'Nugraf - Núcleo de Serviços Gráficos/CSI/SA',
  'Nusea - Núcleo de Serviços Administrativos/CSI/SA',
  'Secretaria Administrativa',
  'Diplage - Divisão de Planejamento, Gestão e Monitoramento/DEJAD/SCGJ',
  'Nages - Núcleo de Acessibilidade, Inclusão e Gestão Socioambiental/GGOV',
  'Secretaria de Gestão de Pessoas',
  'Secretaria de Tecnologia da Informação e Comunicação',
  'Gabinete da Secretaria Administrativa',
  'Coseph - Coordenadoria de Segurança Patrimonial e Humana',
  'Abm - Assessoria de Bombeiro Militar',
  'Asmil - Assessoria Militar',
  'Disau - Divisão de Saúde e Bem-Estar Organizacional/SGP',
  'Degov - Departamento de Estratégia e Governança de TIC',
  'Diaq - Divisão de Aquisições/Deagesp/SA',
  'AsplanSA - Assessoria de Planejamento/SA',
  'AJSA - Assessoria Jurídica/SA - Secretaria Administrativa',
  'Dear - Departamento de Arrecadação',
  'Nuseg - Núcleo de Segurança',
  'CPL',
  'Gabinete de Governança',
  'NOP-ADM - Núcleo de Apoio Operacional-Administrativo',
  "Comarca de Alta Floresta d'Oeste",
  "Comarca de Alvorada d'Oeste",
  'Comarca de Ariquemes',
  'Comarca de Buritis',
  'Comarca de Cacoal',
  'Comarca de Cerejeiras',
  'Comarca de Colorado do Oeste',
  'Comarca de Costa Marques',
  "Comarca de Espigão d'Oeste",
  'Comarca de Guajará-Mirim',
  'Comarca de Jaru',
  'Comarca de Ji-Paraná',
  "Comarca de Machadinho d'Oeste",
  "Comarca de Nova Brasilândia d'Oeste",
  'Comarca de Ouro Preto do Oeste',
  'Comarca de Pimenta Bueno',
  'Comarca de Presidente Médici',
  'Comarca de Rolim de Moura',
  "Comarca de Santa Luzia d'Oeste",
  'Comarca de São Francisco do Guaporé',
  'Comarca de São Miguel do Guaporé',
  'Comarca de Vilhena',
  'Seac - Seção de Aquisição e Contratação/Diplan/Dead/SG/Emeron',
];

// Preencher o campo de seleção com unidades
const unidadeSelect = document.getElementById('unidade');
unidades.forEach((unidade) => {
  const option = document.createElement('option');
  option.value = unidade;
  option.textContent = unidade;
  unidadeSelect.appendChild(option);
});

// Função para salvar dados no localStorage
function saveData() {
  const table = document
    .getElementById('demandTable')
    .getElementsByTagName('tbody')[0];
  const rows = Array.from(table.rows).map((row) => ({
    item: row.cells[0].textContent,
    quantidade: row.cells[1].textContent,
    especificacao: row.cells[2].textContent,
    unidade: row.cells[3].textContent,
  }));
  localStorage.setItem('demandas', JSON.stringify(rows));
}

// Função para carregar dados do localStorage
function loadData() {
  const savedData = JSON.parse(localStorage.getItem('demandas')) || [];
  const table = document
    .getElementById('demandTable')
    .getElementsByTagName('tbody')[0];
  savedData.forEach((demanda) => {
    const row = table.insertRow();
    Object.values(demanda).forEach((value) => {
      const cell = row.insertCell();
      cell.textContent = value;
    });
  });
}

// Adicionar nova demanda
document
  .getElementById('demandForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const item = document.getElementById('item').value;
    const quantidade = document.getElementById('quantidade').value;
    const especificacao = document.getElementById('especificacao').value;
    const unidade = document.getElementById('unidade').value;

    if (item && quantidade && especificacao && unidade) {
      const table = document
        .getElementById('demandTable')
        .getElementsByTagName('tbody')[0];
      const row = table.insertRow();
      row.insertCell().textContent = item;
      row.insertCell().textContent = quantidade;
      row.insertCell().textContent = especificacao;
      row.insertCell().textContent = unidade;

      saveData();

      document.getElementById('demandForm').reset();
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });

// Carregar dados ao iniciar
document.addEventListener('DOMContentLoaded', loadData);
