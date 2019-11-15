describe("Diamond", function(){
    it("should print A", function(){
        let input = 'A'
        let result = diamond(input)
        expect(result).toEqual('  A')
    })
    it("should print B on second line", function(){
        let input = 'B'
        let result = diamond(input)
        expect(result).toEqual('  A\n B B')
    })
    it("should print c on third line", function(){
        let input = 'c'
        let result = diamond(input)
        expect(result).toEqual('  A\n B B\nc     c')
    })
    it("should print D on third line and finish diamond", function(){
        let input = 'D'
        let result = diamond(input)
        expect(result).toEqual('  A\n B B\nD   D\n B B\n  A')
        console.log(result)
    })
})