import { render, screen } from '@testing-library/react';
import ListaLivros from './ListaLivros';

describe('Testes de renderização do componente ListaLivros', () => {
  test('Renderização do Learn React', () => {
    render(<ListaLivros />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test("Renderização de Learn React e save to reload", () => {
    render(<ListaLivros />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
    const stringText = screen.getByText(/save to reload/);
    expect(stringText).toBeInTheDocument();
  });
});

describe("Teste de soma", () => {
  function sum(a, b) {
    return a + b;
  }
  test("O resultado deve ser 5", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
describe("Teste de presença de string", () => {
  describe("Teste de presença de item em array", () => {
    const NOMES = ["Daniel", "Skroski", "Ribeiro", "Souza"];
    test("Testa a presença do item 'Skroski' no array NOMES", () => {
      expect(NOMES).toContain("Skroski");
    });
  });
});  



