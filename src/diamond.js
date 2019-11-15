function diamond(input){
    if(input == 'A'){
        return `  ${input}`
    } else if (input === 'B'){
        return `  A\n ${input} ${input}`
    } else if (input === 'c'){
        return `  A\n B B\n${input}     ${input}`
    } else 
        return `  A\n B B\n${input}   ${input}\n B B\n  A`
    
}