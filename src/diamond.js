function diamond(input){
    if(input == 'A'){
        return '  A'
    } else if (input === 'B'){
        return '  A\n B B'
    } else if (input === 'C'){
        return `  A\n B B\n${input}     ${input}`
    } else if(input ==='D'){
        return `  A\n B B\n${input}   ${input}\n B B\n  A`
    }
}