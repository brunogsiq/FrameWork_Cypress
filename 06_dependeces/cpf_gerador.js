/*
    Instalação
    npm install gerador-validador-cpf --save
    Gerando CPF
    import { generate } from 'gerador-validador-cpf'

    generate() // Gera um CPF no formato 00000000000
    generate({ format: true }) // Gera um CPF no formato 000.000.000-00
    Validando CPF
    import { validate } from 'gerador-validador-cpf'

    validate('12345678900')
    // ou
    validate('123.456.789-00')
    Obs. os caracteres ., - e espaço, são ignorados na validação.
*/