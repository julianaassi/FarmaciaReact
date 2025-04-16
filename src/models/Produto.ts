import categoria from "./Categoria";

export default interface Produto {
    id: number;
    nome: string;
    preço:number;
    descricao:string;
    foto:string;
    fabricante: string;
    categoria?: categoria[]| null;
}