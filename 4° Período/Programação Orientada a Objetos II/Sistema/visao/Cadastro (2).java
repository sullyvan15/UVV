package Views;

import dao.FuncionarioDAO;
import dao.FuncionarioDAOJDBC;
import dao.CargoDAO;
import dao.CargoDAOJDBC;
import java.sql.SQLException;
import modelo.Funcionario;
import modelo.Cargo;



public class ViewPrincipal extends javax.swing.JPanel {

    public ViewPrincipal() {
        initComponents();
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        panelPrincipal = new javax.swing.JTabbedPane();
        marcasPanel = new javax.swing.JPanel();
        inserirMarca = new javax.swing.JTabbedPane();
        jPanel6 = new javax.swing.JPanel();
        jPanel7 = new javax.swing.JPanel();
        inputNomeMarca = new javax.swing.JTextField();
        txtLabelNome2 = new javax.swing.JLabel();
        inputDescricaoMarca = new javax.swing.JTextField();
        txtLabelMarca2 = new javax.swing.JLabel();
        btnCadastrarMarca = new javax.swing.JButton();
        jPanel3 = new javax.swing.JPanel();
        containercargos2 = new javax.swing.JPanel();
        funcionariosPanel = new javax.swing.JPanel();
        inserirfuncionario = new javax.swing.JTabbedPane();
        jPanel8 = new javax.swing.JPanel();
        inputBuscafuncionario = new javax.swing.JTextField();
        buttonBuscafuncionario = new javax.swing.JButton();
        jLabel3 = new javax.swing.JLabel();
        jPanel9 = new javax.swing.JPanel();
        jPanel10 = new javax.swing.JPanel();
        inputNomefuncionario = new javax.swing.JTextField();
        txtLabelNome3 = new javax.swing.JLabel();
        inputSobrenomefuncionario = new javax.swing.JTextField();
        txtLabelMarca3 = new javax.swing.JLabel();
        txtLabelCpf = new javax.swing.JLabel();
        inputCnhfuncionario = new javax.swing.JTextField();
        txtLabelCnh = new javax.swing.JLabel();
        inputTelefonefuncionario = new javax.swing.JTextField();
        txtLabelCpf1 = new javax.swing.JLabel();
        inputCPFfuncionario = new javax.swing.JTextField();
        btnCadastrarfuncionario = new javax.swing.JButton();
        jPanel1 = new javax.swing.JPanel();
        txtLabelNome4 = new javax.swing.JLabel();
        inputCEPEndereco = new javax.swing.JTextField();
        txtLabelNome5 = new javax.swing.JLabel();
        inputNumeroEndereco = new javax.swing.JTextField();
        txtLabelNome6 = new javax.swing.JLabel();
        inputfuncionarioEndereco = new javax.swing.JTextField();
        txtLabelNome7 = new javax.swing.JLabel();
        inputBairroEndereco = new javax.swing.JTextField();
        txtLabelNome8 = new javax.swing.JLabel();
        inputLogradouroEndereco = new javax.swing.JTextField();
        txtLabelNome9 = new javax.swing.JLabel();
        inputCidadeEndereco = new javax.swing.JTextField();
        txtLabelNome10 = new javax.swing.JLabel();
        inputPaisEndereco = new javax.swing.JTextField();
        btnCadastrarEndereco = new javax.swing.JButton();
        inputIdfuncionarioEndereco = new javax.swing.JTextField();
        txtLabelNome13 = new javax.swing.JLabel();
        cargosPanel = new javax.swing.JTabbedPane();
        jPanel2 = new javax.swing.JPanel();
        inputBuscacargo = new javax.swing.JTextField();
        butonBuscacargo = new javax.swing.JButton();
        jLabel2 = new javax.swing.JLabel();
        jPanel4 = new javax.swing.JPanel();
        jPanel5 = new javax.swing.JPanel();
        inputIdMarcacargo = new javax.swing.JTextField();
        txtLabelMarca1 = new javax.swing.JLabel();
        btnCadastrarcargo = new javax.swing.JButton();
        inputDescricaocargo = new javax.swing.JTextField();
        txtLabelMarca8 = new javax.swing.JLabel();
        jPanel11 = new javax.swing.JPanel();
        automovelPanel = new javax.swing.JTabbedPane();
        jPanel12 = new javax.swing.JPanel();
        inputBuscaPornome = new javax.swing.JTextField();
        jLabel1 = new javax.swing.JLabel();
        jButton1 = new javax.swing.JButton();
        jPanel13 = new javax.swing.JPanel();
        jPanel14 = new javax.swing.JPanel();
        inputnomeAutomovel = new javax.swing.JTextField();
        txtLabelNome11 = new javax.swing.JLabel();
        inputChassiAutomovel = new javax.swing.JTextField();
        txtLabelMarca4 = new javax.swing.JLabel();
        btnCadastrarAutomovel = new javax.swing.JButton();
        inputRenavamAutomovel = new javax.swing.JTextField();
        txtLabelNome12 = new javax.swing.JLabel();
        inputValorLocacaoAutomovel = new javax.swing.JTextField();
        txtLabelMarca5 = new javax.swing.JLabel();
        inputTipoCombustivelAutomovel = new javax.swing.JTextField();
        txtLabelMarca6 = new javax.swing.JLabel();
        inputIdcargoAutomovel = new javax.swing.JTextField();
        txtLabelMarca7 = new javax.swing.JLabel();
        inputCorAutomovel1 = new javax.swing.JTextField();
        txtLabelMarca9 = new javax.swing.JLabel();
        jPanel15 = new javax.swing.JPanel();
        automovelPanel1 = new javax.swing.JTabbedPane();
        jPanel16 = new javax.swing.JPanel();
        buttonBuscaLocacoes = new javax.swing.JButton();
        jLabel4 = new javax.swing.JLabel();
        inputIdDevolucao = new javax.swing.JTextField();
        buttonRegistraDevolucao = new javax.swing.JButton();
        jPanel17 = new javax.swing.JPanel();
        jPanel18 = new javax.swing.JPanel();
        inputDtLocacao = new javax.swing.JTextField();
        txtLabelNome14 = new javax.swing.JLabel();
        inputValorKm = new javax.swing.JTextField();
        txtLabelMarca10 = new javax.swing.JLabel();
        btnCadastrarLocacao = new javax.swing.JButton();
        inputValorLocacao = new javax.swing.JTextField();
        txtLabelNome15 = new javax.swing.JLabel();
        inputKmLocacao = new javax.swing.JTextField();
        txtLabelMarca11 = new javax.swing.JLabel();
        inputIdAutomovelLocacao = new javax.swing.JTextField();
        txtLabelMarca12 = new javax.swing.JLabel();
        inputBonusLocacao = new javax.swing.JTextField();
        txtLabelMarca13 = new javax.swing.JLabel();
        inputIdfuncionarioLocacao = new javax.swing.JTextField();
        txtLabelMarca14 = new javax.swing.JLabel();
        inputDtDevolucaoLocacao = new javax.swing.JTextField();
        txtLabelMarca15 = new javax.swing.JLabel();
// --------MARCA----------------------------------------------------------------------------------------------
        inputNomeMarca.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                inputNomeMarcaActionPerformed(evt);
            }
        });

        txtLabelNome2.setText("Nome da marca:");

        txtLabelMarca2.setText("Descrição da marca:");

        btnCadastrarMarca.setText("Cadastrar");
        btnCadastrarMarca.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnCadastrarMarcaActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel7Layout = new javax.swing.GroupLayout(jPanel7);
        jPanel7.setLayout(jPanel7Layout);
        jPanel7Layout.setHorizontalGroup(
                jPanel7Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel7Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel7Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(inputNomeMarca, javax.swing.GroupLayout.Alignment.TRAILING)
                                        .addComponent(btnCadastrarMarca, javax.swing.GroupLayout.DEFAULT_SIZE, 487, Short.MAX_VALUE)
                                        .addComponent(inputDescricaoMarca)
                                        .addGroup(jPanel7Layout.createSequentialGroup()
                                                .addGroup(jPanel7Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(txtLabelNome2)
                                                        .addComponent(txtLabelMarca2))
                                                .addGap(0, 0, Short.MAX_VALUE)))
                                .addContainerGap())
        );
        jPanel7Layout.setVerticalGroup(
                jPanel7Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel7Layout.createSequentialGroup()
                                .addContainerGap()
                                .addComponent(txtLabelNome2)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(inputNomeMarca, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addComponent(txtLabelMarca2)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(inputDescricaoMarca, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(18, 18, 18)
                                .addComponent(btnCadastrarMarca)
                                .addContainerGap(85, Short.MAX_VALUE))
        );

        javax.swing.GroupLayout jPanel6Layout = new javax.swing.GroupLayout(jPanel6);
        jPanel6.setLayout(jPanel6Layout);
        jPanel6Layout.setHorizontalGroup(
                jPanel6Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel6Layout.createSequentialGroup()
                                .addContainerGap()
                                .addComponent(jPanel7, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                .addContainerGap())
        );
        jPanel6Layout.setVerticalGroup(
                jPanel6Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel6Layout.createSequentialGroup()
                                .addContainerGap()
                                .addComponent(jPanel7, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
// ---------MARCA-------------------------------------------------------------------------------------------

// ---------funcionario-------------------------------------------------------------------------------------------
        jLabel3.setText("Digite o nome do funcionario que deseja pesquisar:");

        javax.swing.GroupLayout jPanel8Layout = new javax.swing.GroupLayout(jPanel8);
        jPanel8.setLayout(jPanel8Layout);
        jPanel8Layout.setHorizontalGroup(
                jPanel8Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel8Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel8Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel8Layout.createSequentialGroup()
                                                .addComponent(inputBuscafuncionario, javax.swing.GroupLayout.PREFERRED_SIZE, 370, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 48, Short.MAX_VALUE)
                                                .addComponent(buttonBuscafuncionario)
                                                .addGap(16, 16, 16))
                                        .addGroup(jPanel8Layout.createSequentialGroup()
                                                .addComponent(jLabel3)
                                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))))
        );
        jPanel8Layout.setVerticalGroup(
                jPanel8Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel8Layout.createSequentialGroup()
                                .addContainerGap()
                                .addComponent(jLabel3)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel8Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(inputBuscafuncionario, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(buttonBuscafuncionario))
                                .addContainerGap(415, Short.MAX_VALUE))
        );

        inserirfuncionario.addTab("Lista de funcionarios cadastrados", jPanel8);

        inputNomefuncionario.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                inputNomefuncionarioActionPerformed(evt);
            }
        });

        txtLabelNome3.setText("Nome do funcionario:");

        txtLabelMarca3.setText("Sobrenome do funcionario:");

        txtLabelCpf.setText("CPF do funcionario:");

        inputCnhfuncionario.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                inputCnhfuncionarioActionPerformed(evt);
            }
        });

        txtLabelCnh.setText("Carteira nacional do funcionario: (CNH)");

        inputTelefonefuncionario.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                inputTelefonefuncionarioActionPerformed(evt);
            }
        });

        txtLabelCpf1.setText("Telefone do funcionario:");

        inputCPFfuncionario.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                inputCPFfuncionarioActionPerformed(evt);
            }
        });

        btnCadastrarfuncionario.setText("Cadastrar");
        btnCadastrarfuncionario.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnCadastrarfuncionarioActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel10Layout = new javax.swing.GroupLayout(jPanel10);
        jPanel10.setLayout(jPanel10Layout);
        jPanel10Layout.setHorizontalGroup(
                jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel10Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel10Layout.createSequentialGroup()
                                                .addComponent(txtLabelCpf1)
                                                .addGap(0, 0, Short.MAX_VALUE))
                                        .addComponent(inputTelefonefuncionario)
                                        .addGroup(jPanel10Layout.createSequentialGroup()
                                                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                                .addGroup(jPanel10Layout.createSequentialGroup()
                                                                        .addComponent(txtLabelNome3, javax.swing.GroupLayout.DEFAULT_SIZE, 134, Short.MAX_VALUE)
                                                                        .addGap(124, 124, 124))
                                                                .addGroup(jPanel10Layout.createSequentialGroup()
                                                                        .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                                                                .addComponent(inputNomefuncionario, javax.swing.GroupLayout.DEFAULT_SIZE, 224, Short.MAX_VALUE)
                                                                                .addComponent(inputCPFfuncionario))
                                                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)))
                                                        .addGroup(jPanel10Layout.createSequentialGroup()
                                                                .addComponent(txtLabelCpf)
                                                                .addGap(174, 174, 174)))
                                                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(inputCnhfuncionario)
                                                        .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel10Layout.createSequentialGroup()
                                                                .addGap(0, 0, Short.MAX_VALUE)
                                                                .addComponent(inputSobrenomefuncionario, javax.swing.GroupLayout.PREFERRED_SIZE, 229, javax.swing.GroupLayout.PREFERRED_SIZE))
                                                        .addGroup(jPanel10Layout.createSequentialGroup()
                                                                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                                        .addComponent(txtLabelMarca3)
                                                                        .addComponent(txtLabelCnh))
                                                                .addGap(0, 0, Short.MAX_VALUE)))))
                                .addContainerGap())
                        .addComponent(btnCadastrarfuncionario, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        );
        jPanel10Layout.setVerticalGroup(
                jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel10Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(txtLabelNome3)
                                        .addComponent(txtLabelMarca3))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(inputNomefuncionario, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(inputSobrenomefuncionario, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(18, 18, 18)
                                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(txtLabelCpf)
                                        .addComponent(txtLabelCnh))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(inputCnhfuncionario, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(inputCPFfuncionario, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(18, 18, 18)
                                .addComponent(txtLabelCpf1)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(inputTelefonefuncionario, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 27, Short.MAX_VALUE)
                                .addComponent(btnCadastrarfuncionario)
                                .addContainerGap())
        );

        javax.swing.GroupLayout jPanel9Layout = new javax.swing.GroupLayout(jPanel9);
        jPanel9.setLayout(jPanel9Layout);
        jPanel9Layout.setHorizontalGroup(
                jPanel9Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel9Layout.createSequentialGroup()
                                .addContainerGap()
                                .addComponent(jPanel10, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                .addContainerGap())
        );
        jPanel9Layout.setVerticalGroup(
                jPanel9Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel9Layout.createSequentialGroup()
                                .addContainerGap()
                                .addComponent(jPanel10, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        inserirfuncionario.addTab("+ Inserir novo funcionario", jPanel9);

        txtLabelNome4.setText("funcionario:");

        inputCEPEndereco.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                inputCEPEnderecoActionPerformed(evt);
            }
        });

        txtLabelNome5.setText("CEP:");

        inputNumeroEndereco.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                inputNumeroEnderecoActionPerformed(evt);
            }
        });

        txtLabelNome6.setText("Logradouro:");

        inputfuncionarioEndereco.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                inputfuncionarioEnderecoActionPerformed(evt);
            }
        });

        txtLabelNome7.setText("Número:");

        inputBairroEndereco.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                inputBairroEnderecoActionPerformed(evt);
            }
        });

        txtLabelNome8.setText("Bairro:");

        inputLogradouroEndereco.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                inputLogradouroEnderecoActionPerformed(evt);
            }
        });

        txtLabelNome9.setText("País:");

        inputCidadeEndereco.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                inputCidadeEnderecoActionPerformed(evt);
            }
        });

        txtLabelNome10.setText("Cidade:");

        inputPaisEndereco.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                inputPaisEnderecoActionPerformed(evt);
            }
        });

        btnCadastrarEndereco.setText("Cadastrar");
        btnCadastrarEndereco.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnCadastrarEnderecoActionPerformed(evt);
            }
        });

        inputIdfuncionarioEndereco.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                inputIdfuncionarioEnderecoActionPerformed(evt);
            }
        });

        txtLabelNome13.setText("ID do funcionario:");

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
                jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel1Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel1Layout.createSequentialGroup()
                                                .addComponent(txtLabelNome6, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                                .addGap(183, 183, 183)
                                                .addComponent(txtLabelNome7, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                                .addGap(171, 171, 171))
                                        .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                                                .addComponent(inputLogradouroEndereco)
                                                .addGap(39, 39, 39)
                                                .addComponent(inputNumeroEndereco)
                                                .addContainerGap())
                                        .addComponent(btnCadastrarEndereco, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                        .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                                                        .addGroup(jPanel1Layout.createSequentialGroup()
                                                                .addComponent(txtLabelNome8, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                                                .addGap(214, 214, 214)
                                                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                                        .addComponent(inputIdfuncionarioEndereco)
                                                                        .addGroup(jPanel1Layout.createSequentialGroup()
                                                                                .addComponent(txtLabelNome10, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                                                                .addGap(171, 171, 171))))
                                                        .addGroup(javax.swing.GroupLayout.Alignment.LEADING, jPanel1Layout.createSequentialGroup()
                                                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                                        .addGroup(jPanel1Layout.createSequentialGroup()
                                                                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING, false)
                                                                                        .addComponent(inputBairroEndereco, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, 224, Short.MAX_VALUE)
                                                                                        .addComponent(inputPaisEndereco, javax.swing.GroupLayout.Alignment.LEADING))
                                                                                .addGap(39, 39, 39))
                                                                        .addGroup(jPanel1Layout.createSequentialGroup()
                                                                                .addComponent(txtLabelNome9, javax.swing.GroupLayout.PREFERRED_SIZE, 1, Short.MAX_VALUE)
                                                                                .addGap(125, 125, 125)))
                                                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                                        .addGroup(jPanel1Layout.createSequentialGroup()
                                                                                .addComponent(txtLabelNome13, javax.swing.GroupLayout.PREFERRED_SIZE, 106, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                                                .addGap(118, 118, 118))
                                                                        .addComponent(inputCidadeEndereco))))
                                                .addContainerGap())
                                        .addGroup(jPanel1Layout.createSequentialGroup()
                                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addGroup(jPanel1Layout.createSequentialGroup()
                                                                .addComponent(inputfuncionarioEndereco)
                                                                .addGap(39, 39, 39))
                                                        .addGroup(jPanel1Layout.createSequentialGroup()
                                                                .addComponent(txtLabelNome4, javax.swing.GroupLayout.DEFAULT_SIZE, 59, Short.MAX_VALUE)
                                                                .addGap(210, 210, 210)))
                                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addGroup(jPanel1Layout.createSequentialGroup()
                                                                .addComponent(txtLabelNome5, javax.swing.GroupLayout.DEFAULT_SIZE, 43, Short.MAX_VALUE)
                                                                .addGap(193, 193, 193))
                                                        .addGroup(jPanel1Layout.createSequentialGroup()
                                                                .addComponent(inputCEPEndereco)
                                                                .addContainerGap())))))
        );
        jPanel1Layout.setVerticalGroup(
                jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel1Layout.createSequentialGroup()
                                .addGap(19, 19, 19)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(txtLabelNome4, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                        .addComponent(txtLabelNome5, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(inputCEPEndereco)
                                        .addComponent(inputfuncionarioEndereco))
                                .addGap(18, 18, 18)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(txtLabelNome6, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                        .addComponent(txtLabelNome7, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                                .addGap(5, 5, 5)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(inputNumeroEndereco)
                                        .addComponent(inputLogradouroEndereco))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(txtLabelNome8, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                        .addComponent(txtLabelNome10, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(inputBairroEndereco)
                                        .addComponent(inputCidadeEndereco))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(txtLabelNome9)
                                        .addComponent(txtLabelNome13))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(inputPaisEndereco, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(inputIdfuncionarioEndereco, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(18, 18, 18)
                                .addComponent(btnCadastrarEndereco)
                                .addGap(175, 175, 175))
        );

        inserirfuncionario.addTab("+ Inserir endereço funcionario", jPanel1);

        javax.swing.GroupLayout funcionariosPanelLayout = new javax.swing.GroupLayout(funcionariosPanel);
        funcionariosPanel.setLayout(funcionariosPanelLayout);
        funcionariosPanelLayout.setHorizontalGroup(
                funcionariosPanelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGap(0, 513, Short.MAX_VALUE)
                        .addGroup(funcionariosPanelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                .addGroup(funcionariosPanelLayout.createSequentialGroup()
                                        .addGap(0, 0, 0)
                                        .addComponent(inserirfuncionario)
                                        .addGap(0, 0, 0)))
        );
        funcionariosPanelLayout.setVerticalGroup(
                funcionariosPanelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGap(0, 501, Short.MAX_VALUE)
                        .addGroup(funcionariosPanelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                .addGroup(funcionariosPanelLayout.createSequentialGroup()
                                        .addGap(0, 0, 0)
                                        .addComponent(inserirfuncionario)
                                        .addGap(0, 0, 0)))
        );

        panelPrincipal.addTab("funcionarios", funcionariosPanel);

        butonBuscacargo.setText("Buscar");
        butonBuscacargo.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                butonBuscacargoActionPerformed(evt);
            }
        });
// ---------------cargo-------------------------------------------------------------------------------------
        jLabel2.setText("Buscar cargo por nome:");

        javax.swing.GroupLayout jPanel2Layout = new javax.swing.GroupLayout(jPanel2);
        jPanel2.setLayout(jPanel2Layout);
        jPanel2Layout.setHorizontalGroup(
                jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel2Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel2Layout.createSequentialGroup()
                                                .addComponent(jLabel2)
                                                .addContainerGap(359, Short.MAX_VALUE))
                                        .addGroup(jPanel2Layout.createSequentialGroup()
                                                .addComponent(inputBuscacargo, javax.swing.GroupLayout.PREFERRED_SIZE, 372, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                                .addComponent(butonBuscacargo)
                                                .addGap(18, 18, 18))))
        );
        jPanel2Layout.setVerticalGroup(
                jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel2Layout.createSequentialGroup()
                                .addGap(8, 8, 8)
                                .addComponent(jLabel2)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(inputBuscacargo, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(butonBuscacargo))
                                .addContainerGap(413, Short.MAX_VALUE))
        );

        cargosPanel.addTab("Lista de cargos cadastrados", jPanel2);

        txtLabelMarca1.setText("Descrição:");

        btnCadastrarcargo.setText("Cadastrar");
        btnCadastrarcargo.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnCadastrarcargoActionPerformed(evt);
            }
        });

        txtLabelMarca8.setText("ID da marca:");

        javax.swing.GroupLayout jPanel5Layout = new javax.swing.GroupLayout(jPanel5);
        jPanel5.setLayout(jPanel5Layout);
        jPanel5Layout.setHorizontalGroup(
                jPanel5Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel5Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel5Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                                        .addGroup(jPanel5Layout.createSequentialGroup()
                                                .addComponent(btnCadastrarcargo, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                                .addContainerGap())
                                        .addGroup(jPanel5Layout.createSequentialGroup()
                                                .addGroup(jPanel5Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(txtLabelMarca1)
                                                        .addComponent(inputDescricaocargo, javax.swing.GroupLayout.PREFERRED_SIZE, 212, javax.swing.GroupLayout.PREFERRED_SIZE))
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 41, Short.MAX_VALUE)
                                                .addGroup(jPanel5Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(inputIdMarcacargo, javax.swing.GroupLayout.PREFERRED_SIZE, 226, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addComponent(txtLabelMarca8))
                                                .addGap(14, 14, 14))))
        );
        jPanel5Layout.setVerticalGroup(
                jPanel5Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel5Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel5Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(txtLabelMarca8, javax.swing.GroupLayout.PREFERRED_SIZE, 16, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(txtLabelMarca1))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel5Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(inputDescricaocargo, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(inputIdMarcacargo, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(18, 18, 18)
                                .addComponent(btnCadastrarcargo)
                                .addContainerGap(205, Short.MAX_VALUE))
        );

        javax.swing.GroupLayout jPanel4Layout = new javax.swing.GroupLayout(jPanel4);
        jPanel4.setLayout(jPanel4Layout);
        jPanel4Layout.setHorizontalGroup(
                jPanel4Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel4Layout.createSequentialGroup()
                                .addContainerGap()
                                .addComponent(jPanel5, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                .addContainerGap())
        );
        jPanel4Layout.setVerticalGroup(
                jPanel4Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel4Layout.createSequentialGroup()
                                .addComponent(jPanel5, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(0, 168, Short.MAX_VALUE))
        );

        cargosPanel.addTab("+ Inserir novo cargo", jPanel4);

        panelPrincipal.addTab("cargos", cargosPanel);

        jLabel1.setText("Buscar setor por nome:");

        jButton1.setText("Buscar");
        jButton1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton1ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel12Layout = new javax.swing.GroupLayout(jPanel12);
        jPanel12.setLayout(jPanel12Layout);
        jPanel12Layout.setHorizontalGroup(
                jPanel12Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel12Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel12Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel12Layout.createSequentialGroup()
                                                .addComponent(inputBuscaPornome)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                                .addComponent(jButton1))
                                        .addGroup(jPanel12Layout.createSequentialGroup()
                                                .addComponent(jLabel1)
                                                .addGap(0, 337, Short.MAX_VALUE)))
                                .addContainerGap())
        );
        jPanel12Layout.setVerticalGroup(
                jPanel12Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel12Layout.createSequentialGroup()
                                .addContainerGap()
                                .addComponent(jLabel1)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel12Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(inputBuscaPornome, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton1))
                                .addContainerGap(415, Short.MAX_VALUE))
        );

        automovelPanel.addTab("Lista de setor cadastrados", jPanel12);

        inputnomeAutomovel.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                inputnomeAutomovelActionPerformed(evt);
            }
        });

        txtLabelNome11.setText("nome:");

        txtLabelMarca4.setText("CHASSI:");

        btnCadastrarAutomovel.setText("Cadastrar");
        btnCadastrarAutomovel.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnCadastrarAutomovelActionPerformed(evt);
            }
        });

        inputRenavamAutomovel.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                inputRenavamAutomovelActionPerformed(evt);
            }
        });

        txtLabelNome12.setText("RENAVAM:");

        txtLabelMarca5.setText("Valor da locação:");

        txtLabelMarca6.setText("Tipo do combustível:");

        txtLabelMarca7.setText("Cor do setor:");

        txtLabelMarca9.setText("ID do cargo:");

        javax.swing.GroupLayout jPanel14Layout = new javax.swing.GroupLayout(jPanel14);
        jPanel14.setLayout(jPanel14Layout);
        jPanel14Layout.setHorizontalGroup(
                jPanel14Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel14Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel14Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel14Layout.createSequentialGroup()
                                                .addGroup(jPanel14Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addGroup(jPanel14Layout.createSequentialGroup()
                                                                .addComponent(txtLabelMarca7, javax.swing.GroupLayout.PREFERRED_SIZE, 134, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 134, Short.MAX_VALUE))
                                                        .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel14Layout.createSequentialGroup()
                                                                .addGroup(jPanel14Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                                                                        .addComponent(inputCorAutomovel1, javax.swing.GroupLayout.Alignment.LEADING)
                                                                        .addComponent(inputChassiAutomovel, javax.swing.GroupLayout.Alignment.LEADING)
                                                                        .addComponent(inputnomeAutomovel, javax.swing.GroupLayout.Alignment.LEADING)
                                                                        .addGroup(javax.swing.GroupLayout.Alignment.LEADING, jPanel14Layout.createSequentialGroup()
                                                                                .addGroup(jPanel14Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                                                                                        .addComponent(txtLabelNome11, javax.swing.GroupLayout.Alignment.LEADING)
                                                                                        .addComponent(txtLabelMarca4, javax.swing.GroupLayout.Alignment.LEADING))
                                                                                .addGap(0, 0, Short.MAX_VALUE)))
                                                                .addGap(49, 49, 49)))
                                                .addGroup(jPanel14Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(inputTipoCombustivelAutomovel, javax.swing.GroupLayout.Alignment.TRAILING)
                                                        .addComponent(inputRenavamAutomovel, javax.swing.GroupLayout.DEFAULT_SIZE, 219, Short.MAX_VALUE)
                                                        .addComponent(inputValorLocacaoAutomovel)
                                                        .addGroup(jPanel14Layout.createSequentialGroup()
                                                                .addGroup(jPanel14Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                                        .addComponent(txtLabelMarca6, javax.swing.GroupLayout.PREFERRED_SIZE, 134, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                                        .addComponent(txtLabelNome12, javax.swing.GroupLayout.PREFERRED_SIZE, 83, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                                        .addComponent(txtLabelMarca5, javax.swing.GroupLayout.PREFERRED_SIZE, 144, javax.swing.GroupLayout.PREFERRED_SIZE))
                                                                .addGap(0, 75, Short.MAX_VALUE))))
                                        .addComponent(btnCadastrarAutomovel, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                        .addGroup(jPanel14Layout.createSequentialGroup()
                                                .addComponent(txtLabelMarca9, javax.swing.GroupLayout.PREFERRED_SIZE, 134, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addGap(0, 0, Short.MAX_VALUE))
                                        .addComponent(inputIdcargoAutomovel))
                                .addContainerGap())
        );
        jPanel14Layout.setVerticalGroup(
                jPanel14Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel14Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel14Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(txtLabelNome11)
                                        .addComponent(txtLabelNome12))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel14Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(inputnomeAutomovel, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(inputRenavamAutomovel, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addGroup(jPanel14Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(txtLabelMarca4)
                                        .addComponent(txtLabelMarca5))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel14Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(inputChassiAutomovel, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(inputValorLocacaoAutomovel, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(10, 10, 10)
                                .addGroup(jPanel14Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(txtLabelMarca6)
                                        .addComponent(txtLabelMarca7))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel14Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(inputTipoCombustivelAutomovel, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(inputCorAutomovel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addComponent(txtLabelMarca9)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(inputIdcargoAutomovel, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 11, Short.MAX_VALUE)
                                .addComponent(btnCadastrarAutomovel)
                                .addGap(46, 46, 46))
        );
// ----------------------------------------------------------------------------------------------------
        javax.swing.GroupLayout jPanel13Layout = new javax.swing.GroupLayout(jPanel13);
        jPanel13.setLayout(jPanel13Layout);
        jPanel13Layout.setHorizontalGroup(
                jPanel13Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel13Layout.createSequentialGroup()
                                .addContainerGap()
                                .addComponent(jPanel14, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                .addContainerGap())
        );
        jPanel13Layout.setVerticalGroup(
                jPanel13Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel13Layout.createSequentialGroup()
                                .addContainerGap()
                                .addComponent(jPanel14, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addContainerGap(156, Short.MAX_VALUE))
        );

        automovelPanel.addTab("+ Inserir novo setor", jPanel13);

        javax.swing.GroupLayout jPanel11Layout = new javax.swing.GroupLayout(jPanel11);
        jPanel11.setLayout(jPanel11Layout);
        jPanel11Layout.setHorizontalGroup(
                jPanel11Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGap(0, 513, Short.MAX_VALUE)
                        .addGroup(jPanel11Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                .addGroup(jPanel11Layout.createSequentialGroup()
                                        .addGap(0, 0, 0)
                                        .addComponent(automovelPanel)
                                        .addGap(0, 0, 0)))
        );
        jPanel11Layout.setVerticalGroup(
                jPanel11Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGap(0, 501, Short.MAX_VALUE)
                        .addGroup(jPanel11Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                .addGroup(jPanel11Layout.createSequentialGroup()
                                        .addGap(0, 0, 0)
                                        .addComponent(automovelPanel)
                                        .addGap(0, 0, 0)))
        );

        panelPrincipal.addTab("setor", jPanel11);

        buttonBuscaLocacoes.setText("Exibir todas as locações");
        buttonBuscaLocacoes.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                buttonBuscaLocacoesActionPerformed(evt);
            }
        });

        jLabel4.setText("Informe o id da locação para registrar devolução:");

        buttonRegistraDevolucao.setText("Registrar devolução");
        buttonRegistraDevolucao.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                buttonRegistraDevolucaoActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel16Layout = new javax.swing.GroupLayout(jPanel16);
        jPanel16.setLayout(jPanel16Layout);
        jPanel16Layout.setHorizontalGroup(
                jPanel16Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel16Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel16Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel16Layout.createSequentialGroup()
                                                .addComponent(inputIdDevolucao, javax.swing.GroupLayout.PREFERRED_SIZE, 301, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 29, Short.MAX_VALUE)
                                                .addGroup(jPanel16Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                                        .addComponent(buttonBuscaLocacoes, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                                        .addComponent(buttonRegistraDevolucao, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)))
                                        .addGroup(jPanel16Layout.createSequentialGroup()
                                                .addComponent(jLabel4)
                                                .addGap(0, 0, Short.MAX_VALUE)))
                                .addContainerGap())
        );
        jPanel16Layout.setVerticalGroup(
                jPanel16Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel16Layout.createSequentialGroup()
                                .addGap(22, 22, 22)
                                .addComponent(jLabel4)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel16Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(inputIdDevolucao, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(buttonRegistraDevolucao))
                                .addGap(5, 5, 5)
                                .addComponent(buttonBuscaLocacoes)
                                .addContainerGap(362, Short.MAX_VALUE))
        );
// ----------------------------------------------------------------------------------------------------


        private void inputNomefuncionarioActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_inputNomefuncionarioActionPerformed
            // TODO add your handling code here:
        }//GEN-LAST:event_inputNomefuncionarioActionPerformed

        private void inputCnhfuncionarioActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_inputCnhfuncionarioActionPerformed
            // TODO add your handling code here:
        }//GEN-LAST:event_inputCnhfuncionarioActionPerformed

        private void inputTelefonefuncionarioActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_inputTelefonefuncionarioActionPerformed
            // TODO add your handling code here:
        }//GEN-LAST:event_inputTelefonefuncionarioActionPerformed

        private void inputCPFfuncionarioActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_inputCPFfuncionarioActionPerformed
            // TODO add your handling code here:
        }//GEN-LAST:event_inputCPFfuncionarioActionPerformed

        private void inputCEPEnderecoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_inputCEPEnderecoActionPerformed
            // TODO add your handling code here:
        }//GEN-LAST:event_inputCEPEnderecoActionPerformed

        private void inputNumeroEnderecoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_inputNumeroEnderecoActionPerformed
            // TODO add your handling code here:
        }//GEN-LAST:event_inputNumeroEnderecoActionPerformed

        private void inputfuncionarioEnderecoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_inputfuncionarioEnderecoActionPerformed
            // TODO add your handling code here:
        }//GEN-LAST:event_inputfuncionarioEnderecoActionPerformed

        private void inputBairroEnderecoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_inputBairroEnderecoActionPerformed
            // TODO add your handling code here:
        }//GEN-LAST:event_inputBairroEnderecoActionPerformed

        private void inputLogradouroEnderecoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_inputLogradouroEnderecoActionPerformed
            // TODO add your handling code here:
        }//GEN-LAST:event_inputLogradouroEnderecoActionPerformed

        private void inputCidadeEnderecoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_inputCidadeEnderecoActionPerformed
            // TODO add your handling code here:
        }//GEN-LAST:event_inputCidadeEnderecoActionPerformed

        private void inputPaisEnderecoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_inputPaisEnderecoActionPerformed
            // TODO add your handling code here:
        }//GEN-LAST:event_inputPaisEnderecoActionPerformed

        //cadastra novo funcionario
        private void btnCadastrarfuncionarioActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnCadastrarfuncionarioActionPerformed
            funcionarioController controller = null;
            String nome = inputNomefuncionario.getText();
            String sobrenome = inputSobrenomefuncionario.getText();
            String cpf = inputCPFfuncionario.getText();
            String cnh = inputCnhfuncionario.getText();
            String telefone = inputTelefonefuncionario.getText();

            if(nome.length() < 1 || sobrenome.length() < 1 || cpf.length() < 1 || cnh.length() < 1 || telefone.length() < 1){
                Alerta.display("Preencha todos os campos!", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
            }
            else {
                if(nome.length() > 32) {
                    Alerta.display("Nome muito grande!", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
                }
                else if(sobrenome.length() > 32) {
                    Alerta.display("Sobrenome muito grande!", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
                }
                else if(cpf.length() > 16) {
                    Alerta.display("CPF muito grande!", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
                }
                else if(cnh.length() > 20) {
                    Alerta.display("CNH muito grande!", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
                }
                else if(telefone.length() > 16) {
                    Alerta.display("Telefone muito grande!", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
                } else {
                    try {
                        controller = new funcionarioController();
                        funcionario funcionario = new funcionario(nome, sobrenome, cpf, cnh, telefone);
                        if(controller.salvar(funcionario)) {
                            Alerta.display("funcionario cadastrado com sucesso!", Alerta.tituloSucesso, JOptionPane.OK_OPTION);
                            inputNomefuncionario.setText("");
                            inputSobrenomefuncionario.setText("");
                            inputCPFfuncionario.setText("");
                            inputCnhfuncionario.setText("");
                            inputTelefonefuncionario.setText("");
                        }
                    } catch (ClassNotFoundException ex) {
                        Logger.getLogger(ViewPrincipal.class.getName()).log(Level.SEVERE, null, ex);
                        Alerta.display("Ocorreu um erro ao tentar cadastrar o funcionario.", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
                    } catch (SQLException ex) {
                        Logger.getLogger(ViewPrincipal.class.getName()).log(Level.SEVERE, null, ex);
                        Alerta.display("Ocorreu um erro ao tentar cadastrar o funcionario.", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
                    }
                }
            }


        }//GEN-LAST:event_btnCadastrarEnderecoActionPerformed

        private void inputIdfuncionarioEnderecoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_inputIdfuncionarioEnderecoActionPerformed
            // TODO add your handling code here:
        }//GEN-LAST:event_inputIdfuncionarioEnderecoActionPerformed

        //cadastra cargo
        private void btnCadastrarcargoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnCadastrarcargoActionPerformed
            cargoController controller;
            try {
                controller = new cargoController();
                String descricao = inputDescricaocargo.getText();
                int idMarca = Integer.parseInt(inputIdMarcacargo.getText());
                cargo cargo = new cargo(descricao, idMarca);
                if(controller.salvar(cargo)){
                    Alerta.display("cargo cadastrado com sucesso!", Alerta.tituloSucesso, JOptionPane.OK_OPTION);
                    inputDescricaoMarca.setText("");
                    inputIdMarcacargo.setText("");
                } else {
                    Alerta.display("Ocorreu um erro ao tentar cadastrar o cargo.", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
                }
            } catch (ClassNotFoundException ex) {
                Logger.getLogger(ViewPrincipal.class.getName()).log(Level.SEVERE, null, ex);
                Alerta.display("Ocorreu um erro ao tentar cadastrar o cargo.", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
            } catch (SQLException ex) {
                Logger.getLogger(ViewPrincipal.class.getName()).log(Level.SEVERE, null, ex);
                Alerta.display("Ocorreu um erro ao tentar cadastrar o cargo.", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
            }

        }//GEN-LAST:event_btnCadastrarcargoActionPerformed

//GEN-FIRST:event_btnCadastrarMarcaActionPerformed
        private void btnCadastrarMarcaActionPerformed(java.awt.event.ActionEvent evt) {
            MarcaController controller;
            try {
                controller = new MarcaController();
                String descricao = inputDescricaoMarca.getText();
                Marca marca = new Marca(descricao);
                if(controller.salvar(marca)){
                    Alerta.display("Marca cadastrado com sucesso!", Alerta.tituloSucesso, JOptionPane.OK_OPTION);
                    inputDescricaoMarca.setText("");
                    inputIdMarcacargo.setText("");
                } else {
                    Alerta.display("Ocorreu um erro ao tentar cadastrar a marca.", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
                }
            } catch (ClassNotFoundException ex) {
                Logger.getLogger(ViewPrincipal.class.getName()).log(Level.SEVERE, null, ex);
                Alerta.display("Ocorreu um erro ao tentar cadastrar a marca.", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
            } catch (SQLException ex) {
                Logger.getLogger(ViewPrincipal.class.getName()).log(Level.SEVERE, null, ex);
                Alerta.display("Ocorreu um erro ao tentar cadastrar o cargo.", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
            }

        }


//GEN-LAST:event_btnCadastrarMarcaActionPerformed

        private void inputNomeMarcaActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_inputNomeMarcaActionPerformed
            // TODO add your handling code here:
        }//GEN-LAST:event_inputNomeMarcaActionPerformed

        private void inputRenavamAutomovelActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_inputRenavamAutomovelActionPerformed
            // TODO add your handling code here:
        }//GEN-LAST:event_inputRenavamAutomovelActionPerformed

        //cadastrar setor
        private void btnCadastrarAutomovelActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnCadastrarAutomovelActionPerformed
            AutomovelController controller;
            String nome = inputnomeAutomovel.getText();
            String renavam = inputRenavamAutomovel.getText();
            String chassi = inputChassiAutomovel.getText();
            float valorLocacao = Float.parseFloat(inputValorLocacaoAutomovel.getText());
            String cor = inputCorAutomovel1.getText();
            String tipoCombustivel = inputTipoCombustivelAutomovel.getText();
            int idcargo = Integer.parseInt(inputIdcargoAutomovel.getText());

            if(nome.length() < 1) {
                Alerta.display("Informe a nome do setor.", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
            } else if(renavam.length() < 1) {
                Alerta.display("Informe o renavam do setor.", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
            } else if(chassi.length() < 1) {
                Alerta.display("Informe o chassi do setor.", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
            } else if(cor.length() < 1) {
                Alerta.display("Informe a cor do setor.", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
            } else if(tipoCombustivel.length() < 1) {
                Alerta.display("Informe o tipo do combustível do setor.", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
            } else if(tipoCombustivel.length() > 32) {
                Alerta.display("Tipo do combustível do setor muito grande.", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
            } else if(nome.length() > 32) {
                Alerta.display("nome do setor muito grande.", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
            } else if(renavam.length() > 32) {
                Alerta.display("Renavam do setor muito grande.", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
            } else if(chassi.length() > 32) {
                Alerta.display("Chassi do setor muito grande.", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
            } else {
                Automovel automovel = new Automovel(nome, renavam, chassi, valorLocacao, cor, tipoCombustivel, idcargo);

                try {
                    controller = new AutomovelController();
                    if(controller.salvar(automovel)) {
                        Alerta.display("Automovel cadastrado com sucesso!", Alerta.tituloSucesso, JOptionPane.OK_OPTION);
                        inputnomeAutomovel.setText("");
                        inputRenavamAutomovel.setText("");
                        inputChassiAutomovel.setText("");
                        inputValorLocacaoAutomovel.setText("");
                        inputCorAutomovel1.setText("");
                        inputTipoCombustivelAutomovel.setText("");
                        inputIdcargoAutomovel.setText("");
                    } else {
                        Alerta.display("Ocorreu um erro ao tentar cadastrar o setor.", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
                    }
                } catch (ClassNotFoundException ex) {
                    Logger.getLogger(ViewPrincipal.class.getName()).log(Level.SEVERE, null, ex);
                    Alerta.display("Ocorreu um erro ao tentar cadastrar o setor.", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
                } catch (SQLException ex) {
                    Logger.getLogger(ViewPrincipal.class.getName()).log(Level.SEVERE, null, ex);
                    Alerta.display("Ocorreu um erro ao tentar cadastrar o setor.", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
                }
            }
        }//GEN-LAST:event_btnCadastrarAutomovelActionPerformed

        private void inputnomeAutomovelActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_inputnomeAutomovelActionPerformed
            // TODO add your handling code here:
        }//GEN-LAST:event_inputnomeAutomovelActionPerformed

        private void inputDtLocacaoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_inputDtLocacaoActionPerformed
            // TODO add your handling code here:
        }//GEN-LAST:event_inputDtLocacaoActionPerformed

        //cadastra locacao
        private void btnCadastrarLocacaoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnCadastrarLocacaoActionPerformed
            LocacaoController controller;
            try {
                controller = new LocacaoController();

                int km = Integer.parseInt(inputKmLocacao.getText());
                float valorLocacao = Float.parseFloat(inputValorLocacao.getText());
                float bonus = Float.parseFloat(inputBonusLocacao.getText());
                float valorKm = Float.parseFloat(inputValorKm.getText());
                int idfuncionario = Integer.parseInt(inputIdfuncionarioLocacao.getText());
                int idAutomovel = Integer.parseInt(inputIdAutomovelLocacao.getText());

                Locacao locacao = new Locacao(km, valorLocacao, valorKm, bonus, idfuncionario, idAutomovel);

                if(controller.salvar(locacao)) {
                    Alerta.display("Locação cadastrada com sucesso!", Alerta.tituloSucesso, JOptionPane.OK_OPTION);
                    inputKmLocacao.setText("");
                    inputValorLocacao.setText("");
                    inputValorKm.setText("");
                    inputBonusLocacao.setText("");
                    inputIdfuncionarioLocacao.setText("");
                    inputIdAutomovelLocacao.setText("");
                } else {
                    Alerta.display("Ocorreu um erro ao tentar cadastrar a locação.", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
                }
            } catch (ClassNotFoundException ex) {
                Logger.getLogger(ViewPrincipal.class.getName()).log(Level.SEVERE, null, ex);
                Alerta.display("Ocorreu um erro ao tentar cadastrar a locação.", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
            } catch (SQLException ex) {
                Logger.getLogger(ViewPrincipal.class.getName()).log(Level.SEVERE, null, ex);
                Alerta.display("Ocorreu um erro ao tentar cadastrar a locação.", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
            }
        }//GEN-LAST:event_btnCadastrarLocacaoActionPerformed

        private void inputValorLocacaoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_inputValorLocacaoActionPerformed
            // TODO add your handling code here:
        }//GEN-LAST:event_inputValorLocacaoActionPerformed

        private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed
            String nome = inputBuscaPornome.getText();

            if(nome.length() < 1){
                Alerta.display("Informe a nome do veículo.", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
            } else {
                AutomovelController controller;
                try {
                    controller = new AutomovelController();
                    List automoveis = controller.consultar(nome);
                    ArrayList<String> formatedAutomoveis = new ArrayList();

                    automoveis.forEach(automovel -> {
                        formatedAutomoveis.add(automovel.toString());
                    });

                    Alerta.displayList(formatedAutomoveis, Alerta.tituloSucesso);
                } catch (ClassNotFoundException ex) {
                    Logger.getLogger(ViewPrincipal.class.getName()).log(Level.SEVERE, null, ex);
                } catch (SQLException ex) {
                    Logger.getLogger(ViewPrincipal.class.getName()).log(Level.SEVERE, null, ex);
                }
            }

        }//GEN-LAST:event_jButton1ActionPerformed

        private void butonBuscacargoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_butonBuscacargoActionPerformed
            String descricao = inputBuscacargo.getText();

            if(descricao.length() < 1){
                Alerta.display("Informe a descrição do cargo.", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
            } else {
                cargoController controller;
                try {
                    controller = new cargoController();
                    List cargos = controller.consultar(descricao);
                    ArrayList<String> formatedcargo = new ArrayList();

                    cargos.forEach(cargo -> {
                        formatedcargo.add(cargo.toString());
                    });

                    Alerta.displayList(formatedcargo, Alerta.tituloSucesso);
                } catch (ClassNotFoundException ex) {
                    Logger.getLogger(ViewPrincipal.class.getName()).log(Level.SEVERE, null, ex);
                } catch (SQLException ex) {
                    Logger.getLogger(ViewPrincipal.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
        }//GEN-LAST:event_butonBuscacargoActionPerformed

        private void buttonBuscafuncionarioActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_buttonBuscafuncionarioActionPerformed
            String nome = inputBuscafuncionario.getText();

            if(nome.length() < 1){
                Alerta.display("Informe o nome do funcionario.", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
            } else {
                funcionarioController controller;
                try {
                    controller = new funcionarioController();
                    List funcionarios = controller.consultar(nome);
                    ArrayList<String> formatedfuncionarios = new ArrayList();

                    funcionarios.forEach(funcionario -> {
                        formatedfuncionarios.add(funcionario.toString());
                    });

                    Alerta.displayList(formatedfuncionarios, Alerta.tituloSucesso);
                } catch (ClassNotFoundException ex) {
                    Logger.getLogger(ViewPrincipal.class.getName()).log(Level.SEVERE, null, ex);
                } catch (SQLException ex) {
                    Logger.getLogger(ViewPrincipal.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
        }//GEN-LAST:event_buttonBuscafuncionarioActionPerformed

        private void buttonBuscaLocacoesActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_buttonBuscaLocacoesActionPerformed
            LocacaoController controller;
            try {
                controller = new LocacaoController();
                List locacoes = controller.obterTodos();
                ArrayList<String> formatedLocacoes = new ArrayList();

                locacoes.forEach(locacao -> {
                    formatedLocacoes.add(locacao.toString());
                });

                Alerta.displayList(formatedLocacoes, Alerta.tituloSucesso);
            } catch (ClassNotFoundException ex) {
                Logger.getLogger(ViewPrincipal.class.getName()).log(Level.SEVERE, null, ex);
            } catch (SQLException ex) {
                Logger.getLogger(ViewPrincipal.class.getName()).log(Level.SEVERE, null, ex);
            }
        }//GEN-LAST:event_buttonBuscaLocacoesActionPerformed

        private void buttonRegistraDevolucaoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_buttonRegistraDevolucaoActionPerformed
            if(inputIdDevolucao.getText().length() < 1){
                Alerta.display("Informe o id da locação.", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
            } else {
                int locacaoId = Integer.parseInt(inputIdDevolucao.getText());
                LocacaoController controller;
                try {
                    controller = new LocacaoController();
                    if(controller.registraDevolucao(locacaoId)) {
                        Alerta.display("Devolução realizada com sucesso!", Alerta.tituloSucesso, JOptionPane.OK_OPTION);
                        inputIdDevolucao.setText("");
                    } else {
                        Alerta.display("Ocorreu um erro ao tentar realizar a devolução.", Alerta.tituloError, JOptionPane.ERROR_MESSAGE);
                    }
                } catch (ClassNotFoundException ex) {
                    Logger.getLogger(ViewPrincipal.class.getName()).log(Level.SEVERE, null, ex);
                } catch (SQLException ex) {
                    Logger.getLogger(ViewPrincipal.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
        }//GEN-LAST:event_buttonRegistraDevolucaoActionPerformed



        // Variables declaration - do not modify//GEN-BEGIN:variables
        private javax.swing.JTabbedPane automovelPanel;
        private javax.swing.JTabbedPane automovelPanel1;
        private javax.swing.JButton btnCadastrarAutomovel;
        private javax.swing.JButton btnCadastrarfuncionario;
        private javax.swing.JButton btnCadastrarEndereco;
        private javax.swing.JButton btnCadastrarLocacao;
        private javax.swing.JButton btnCadastrarMarca;
        private javax.swing.JButton btnCadastrarcargo;
        private javax.swing.JButton butonBuscacargo;
        private javax.swing.JButton buttonBuscafuncionario;
        private javax.swing.JButton buttonBuscaLocacoes;
        private javax.swing.JButton buttonRegistraDevolucao;
        private javax.swing.JPanel funcionariosPanel;
        private javax.swing.JPanel containercargos2;
        private javax.swing.JTextField inputBairroEndereco;
        private javax.swing.JTextField inputBonusLocacao;
        private javax.swing.JTextField inputBuscafuncionario;
        private javax.swing.JTextField inputBuscacargo;
        private javax.swing.JTextField inputBuscaPornome;
        private javax.swing.JTextField inputCEPEndereco;
        private javax.swing.JTextField inputCPFfuncionario;
        private javax.swing.JTextField inputChassiAutomovel;
        private javax.swing.JTextField inputCidadeEndereco;
        private javax.swing.JTextField inputfuncionarioEndereco;
        private javax.swing.JTextField inputCnhfuncionario;
        private javax.swing.JTextField inputCorAutomovel1;
        private javax.swing.JTextField inputDescricaoMarca;
        private javax.swing.JTextField inputDescricaocargo;
        private javax.swing.JTextField inputDtDevolucaoLocacao;
        private javax.swing.JTextField inputDtLocacao;
        private javax.swing.JTextField inputIdAutomovelLocacao;
        private javax.swing.JTextField inputIdfuncionarioEndereco;
        private javax.swing.JTextField inputIdfuncionarioLocacao;
        private javax.swing.JTextField inputIdDevolucao;
        private javax.swing.JTextField inputIdMarcacargo;
        private javax.swing.JTextField inputIdcargoAutomovel;
        private javax.swing.JTextField inputKmLocacao;
        private javax.swing.JTextField inputValorTotalLocacao;
        private javax.swing.JTextField inputLogradouroEndereco;
        private javax.swing.JTextField inputNomefuncionario;
        private javax.swing.JTextField inputNomeMarca;
        private javax.swing.JTextField inputNumeroEndereco;
        private javax.swing.JTextField inputPaisEndereco;
        private javax.swing.JTextField inputnomeAutomovel;
        private javax.swing.JTextField inputRenavamAutomovel;
        private javax.swing.JTextField inputSobrenomefuncionario;
        private javax.swing.JTextField inputTelefonefuncionario;
        private javax.swing.JTextField inputTipoCombustivelAutomovel;
        private javax.swing.JTextField inputValorKm;
        private javax.swing.JTextField inputValorLocacao;
        private javax.swing.JTextField inputValorLocacaoAutomovel;
        private javax.swing.JTabbedPane inserirfuncionario;
        private javax.swing.JTabbedPane inserirMarca;
        private javax.swing.JButton jButton1;
        private javax.swing.JLabel jLabel1;
        private javax.swing.JLabel jLabel2;
        private javax.swing.JLabel jLabel3;
        private javax.swing.JLabel jLabel4;
        private javax.swing.JPanel jPanel1;
        private javax.swing.JPanel jPanel10;
        private javax.swing.JPanel jPanel11;
        private javax.swing.JPanel jPanel12;
        private javax.swing.JPanel jPanel13;
        private javax.swing.JPanel jPanel14;
        private javax.swing.JPanel jPanel15;
        private javax.swing.JPanel jPanel16;
        private javax.swing.JPanel jPanel17;
        private javax.swing.JPanel jPanel18;
        private javax.swing.JPanel jPanel2;
        private javax.swing.JPanel jPanel3;
        private javax.swing.JPanel jPanel4;
        private javax.swing.JPanel jPanel5;
        private javax.swing.JPanel jPanel6;
        private javax.swing.JPanel jPanel7;
        private javax.swing.JPanel jPanel8;
        private javax.swing.JPanel jPanel9;
        private javax.swing.JPanel marcasPanel;
        private javax.swing.JTabbedPane cargosPanel;
        private javax.swing.JTabbedPane panelPrincipal;
        private javax.swing.JLabel txtLabelCnh;
        private javax.swing.JLabel txtLabelCpf;
        private javax.swing.JLabel txtLabelCpf1;
        private javax.swing.JLabel txtLabelMarca1;
        private javax.swing.JLabel txtLabelMarca10;
        private javax.swing.JLabel txtLabelMarca11;
        private javax.swing.JLabel txtLabelMarca12;
        private javax.swing.JLabel txtLabelMarca13;
        private javax.swing.JLabel txtLabelMarca14;
        private javax.swing.JLabel txtLabelMarca15;
        private javax.swing.JLabel txtLabelMarca2;
        private javax.swing.JLabel txtLabelMarca3;
        private javax.swing.JLabel txtLabelMarca4;
        private javax.swing.JLabel txtLabelMarca5;
        private javax.swing.JLabel txtLabelMarca6;
        private javax.swing.JLabel txtLabelMarca7;
        private javax.swing.JLabel txtLabelMarca8;
        private javax.swing.JLabel txtLabelMarca9;
        private javax.swing.JLabel txtLabelNome10;
        private javax.swing.JLabel txtLabelNome11;
        private javax.swing.JLabel txtLabelNome12;
        private javax.swing.JLabel txtLabelNome13;
        private javax.swing.JLabel txtLabelNome14;
        private javax.swing.JLabel txtLabelNome15;
        private javax.swing.JLabel txtLabelNome2;
        private javax.swing.JLabel txtLabelNome3;
        private javax.swing.JLabel txtLabelNome4;
        private javax.swing.JLabel txtLabelNome5;
        private javax.swing.JLabel txtLabelNome6;
        private javax.swing.JLabel txtLabelNome7;
        private javax.swing.JLabel txtLabelNome8;
        private javax.swing.JLabel txtLabelNome9;
        // End of variables declaration//GEN-END:variables

    }
