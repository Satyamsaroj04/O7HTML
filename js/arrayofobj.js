console.log("print 5 People")
let DetailsPeople=[{Username: "Satyam" ,Age:21, Gender:"Male",Adress:"Jalandhar"},
    {Username: "Nikhil" ,Age:21, Gender:"Male",Adress:"Jalandhar"},
    {Username: "Kumkum" ,Age:20, Gender:"Female",Adress:"Delhi"
    },
     {Username: "Rahul" ,Age:22, Gender:"Male",Adress:"Jalandhar"
    },{Username: "Tanisha" ,Age:19, Gender:"Female",Adress:"Delhi"
    }
]
console.log("\n<<<People Details written Below>>>")
for(let i=0;i<DetailsPeople.length;i++){
console.log(DetailsPeople[i])
}console.log("\n<<<People Username written Below>>>")
for(let i=0;i<DetailsPeople.length;i++){
console.log(DetailsPeople[i].Username)
}console.log("\n<<<People Age written below>>>")
for(let i=0;i<DetailsPeople.length;i++){
console.log(DetailsPeople[i].Age)
}
console.log("\n<<<People Adress written below>>>")
for(let i=0;i<DetailsPeople.length;i++){
console.log(DetailsPeople[i].Adress)
}
