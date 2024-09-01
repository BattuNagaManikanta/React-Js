import { sum } from "../sum";


test("Sum will need to give us (a+b)",()=>{
    const result=sum(3,4);
    expect(result).toBe(7);
})

