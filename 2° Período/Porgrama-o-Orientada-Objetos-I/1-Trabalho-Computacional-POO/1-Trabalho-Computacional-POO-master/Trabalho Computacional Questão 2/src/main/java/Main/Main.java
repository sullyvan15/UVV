package Main;


import java.util.Scanner;


public class Main {
	public static void main(String[] args) {		
		//VARIAVEIS PARAMETRO DO CADASTRO
		String descricao;
		int quantidade;
		int sysPedido;
		int sysEntrada;
		int sysclienteID;
		int sysOperador;
		int sysLocal;
		int sysCadastro;
		int sysItem;
		float valor;
		Scanner teclado = new Scanner(System.in);
		Cadastro cadastro = new Cadastro();
		Pedido pedido = new Pedido();
		do {
			System.out.println("Universidade Vila Velha");
			System.out.println("Sistema de Pedidos");
			System.out.print("\nSelecione uma opção:\n1. Cadastro de produtos\n2. Novo pedido\n3. Finalizar o sistema\nOpção: ");
			sysOperador = teclado.nextInt();
			if (sysOperador < 3 && sysOperador > 0) {
				switch (sysOperador) {
				case 1:
					do {
						System.out.print("\nSelecione uma opção:\n1. Cadastro em Exatas\n2. Cadastro em Humanas e biológicas\n3. Excluir em Exatas\n4. Excluir em Humanas e biológicas\n5. Listar registros\n6. Finalizar\nOpção: ");
						sysCadastro = teclado.nextInt();
						if (sysCadastro <= 6 && sysCadastro > 0) {
							switch (sysCadastro) {
							case 1:
								System.out.print("Informe o nome do curso: ");
								descricao = teclado.next();
								System.out.print("Informe a quantidade de vagas : ");
								quantidade = teclado.nextInt();
								System.out.print("Informe o valor unitário do curso: ");
								valor = teclado.nextFloat();
								if (quantidade == 0) {
									System.out.println("nada");
								} else {
									cadastro.cadastroExatas(descricao, quantidade, valor);
								}
								break;
							case 2:
								System.out.print("Informe o nome do curso: ");
								descricao = teclado.next();
								System.out.print("Informe a quantidade de vagas: ");
								quantidade = teclado.nextInt();
								System.out.print("Informe o valor unitário do curso: ");
								valor = teclado.nextFloat();
								if (quantidade == 0) {
									System.out.println("Aí não cidadão");
								} else {
									cadastro.cadastroHumbio(descricao, quantidade, valor);																	
								}
								break;
							case 3:
								System.out.println("Selecione o indice do registro a excluir: ");
								cadastro.listarExatas();
								sysLocal = teclado.nextInt();
								cadastro.exclusaoExatas(sysLocal);
								cadastro.listarExatas();								
								break;
							case 4:
								System.out.println("Selecione o indice do registro a excluir: ");
								cadastro.listarHumbio();
								sysLocal = teclado.nextInt();
								cadastro.exclusaoHumbio(sysLocal);
								cadastro.listarHumbio();								
								break;
							case 5:
								if (cadastro.getListaRegistroExatas().size() == 0 && cadastro.getListaRegistroHumbio().size() == 0) {
									System.out.println("Nenhum registro encontrado");									
								} else {
									cadastro.listarExatas();
									cadastro.listarHumbio();									
								}
								break;
								default:
									System.out.println("\n");
								break;
							}							
						} else {
							System.out.println("Opção inválida");	
						}						
					} while (sysCadastro != 6);
					break;					
				case 2:
					//INICIO DO MENU DE SELECAO DE PEDIDOS
					if (cadastro.getListaRegistroExatas().size() == 0 && cadastro.getListaRegistroHumbio().size() == 0) {
						System.out.println("\nNenhum registro de produto encontrado");
						System.out.println("Efetue a inclusão de novos cursos\n");
					} else {
						do {
							System.out.print("\nSelecione uma opção:\n1. Registrar pedido\n2. Cancelar pedido\n3. Fechar pedido\n4. Finalizar\nOpção: ");
							sysPedido = teclado.nextInt();
							if (sysPedido <= 4 && sysPedido > 0) {
								switch (sysPedido) {
								case 1:
									System.out.print("Informe o cliente: ");
									sysclienteID = teclado.nextInt();
									pedido.incluirCliente(sysclienteID);
									do {										
										System.out.print("\nSelecione uma opção:\n1. Registrar Tipo de curso\n2. Registrar em Humanas e biológicas\n3. Finalizar\nOpção: ");
										sysEntrada = teclado.nextInt();
										if (sysEntrada <= 3 && sysEntrada > 0) {
											switch (sysEntrada) {
											case 1:
												cadastro.listarExatas();
												System.out.print("Selecione o indice do item a incluir: ");
												sysItem = teclado.nextInt();
												pedido.incluirCursos(sysclienteID, sysItem);

									
												break;
											case 2:
												
												break;
											default:
												System.out.println("\n");
											break;
											}
										} else {
											System.out.println("Opção inválida");	
										}										
									} while (sysEntrada != 3);									
									break;
								case 2:

									break;
								case 3:

									break;
								default:
									System.out.println("\n");
								break;
								}							
							} else {
								System.out.println("Opção inválida");	
							}
							
							
							
							
	
							
							
							
							

								
							
							
							
							
							
							
						} while (sysPedido != 1000);
						
						
						
						
						System.out.println("");

						
						
						
						
						
						System.out.println("Pedido");						
						
						
						
						
						
						
						
						
						
						
					
					}
					break;
					//FINAL DO MENU DE SELECAO DE PEDIDOS
				}
			} else {
				System.out.println("Opção inválida");
			}	
		} while (sysOperador != 3);
		System.out.println("\nSistema finalizado");
		teclado.close();		
	}
}
